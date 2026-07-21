function toggleNav(){
  const open = document.querySelector('.navlinks').classList.toggle('open');
  document.querySelector('.nav-backdrop').classList.toggle('open', open);
}
function closeNav(){
  document.querySelector('.navlinks').classList.remove('open');
  document.querySelector('.nav-backdrop').classList.remove('open');
}

let currentLang = 'no';
const pages = ['hero','program','info','overnatting','opplevelser','cast','rsvp'];

function getPath(obj, path){
  return path.split('.').reduce((o,k) => (o && o[k] !== undefined) ? o[k] : null, obj);
}

function setLang(lang){
  currentLang = lang;
  document.getElementById('htmlRoot').lang = lang;
  document.getElementById('btnNo').classList.toggle('active', lang === 'no');
  document.getElementById('btnEn').classList.toggle('active', lang === 'en');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = getPath(translations[lang], el.dataset.i18n);
    if(val === null) return;
    if('i18nHtml' in el.dataset) el.innerHTML = val;
    else el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const val = getPath(translations[lang], el.dataset.i18nPh);
    if(val !== null) el.setAttribute('placeholder', val);
  });

  loadAdminPreview();
}

function goTo(page){
  pages.forEach(p => {
    const el = document.getElementById(p);
    if(el) el.classList.toggle('active', p === page);
  });
  document.querySelectorAll('.navlinks a[data-page]').forEach(a=>{
    a.classList.toggle('active', a.dataset.page === page);
  });
  closeNav();
  window.scrollTo(0,0);
  if(page === 'rsvp') loadAdminPreview();
}

document.querySelectorAll('.choice').forEach(choice => {
  choice.addEventListener('click', () => {
    const group = choice.closest('.choice-row');
    group.querySelectorAll('.choice').forEach(c => c.classList.remove('selected'));
    choice.classList.add('selected');
    choice.querySelector('input').checked = true;

    if(group.dataset.group === 'extraGuest'){
      const bringing = choice.dataset.value === 'yes';
      document.getElementById('extraGuestNameField').style.display = bringing ? '' : 'none';
    }
  });
});

const GFORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSf7Vca7B4q4fw8B_YObrYx0mDjfqvb6aPYAtx4sYBgc-OtSlg/formResponse';
const GFORM_ENTRIES = {
  name: 'entry.599596592',
  friday: 'entry.2014790516',
  saturday: 'entry.1406104630',
  extraGuest: 'entry.1741505114',
  extraGuestName: 'entry.872767972',
  staying: 'entry.1936161963',
  notes: 'entry.2014298393',
  song: 'entry.450540508'
};

function submitToGoogleForm(entry){
  const form = document.createElement('form');
  form.action = GFORM_ACTION;
  form.method = 'POST';
  form.target = 'hidden_iframe';
  form.style.display = 'none';

  const stayingLabels = {
    thon: 'Thon Hotell Parken',
    skottevik: 'Skottevig Feriesenter',
    other: 'Annet'
  };
  const fields = {
    pageHistory: '0,1,2',
    [GFORM_ENTRIES.name]: entry.name,
    [GFORM_ENTRIES.friday]: entry.friday === 'yes' ? 'Kommer' : 'Kan ikke',
    [GFORM_ENTRIES.saturday]: entry.saturday === 'yes' ? 'Kommer' : 'Kan ikke',
    [GFORM_ENTRIES.extraGuest]: entry.extraGuest === 'yes' ? 'Ja' : 'Nei',
    [GFORM_ENTRIES.extraGuestName]: entry.extraGuestName || '',
    [GFORM_ENTRIES.staying]: stayingLabels[entry.staying] || '',
    [GFORM_ENTRIES.notes]: entry.notes || '',
    [GFORM_ENTRIES.song]: entry.song || ''
  };

  Object.entries(fields).forEach(([key, value]) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = value;
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
  form.remove();
}

document.getElementById('rsvpForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('rname').value.trim();
  const friday = document.querySelector('input[name=friday]:checked');
  const saturday = document.querySelector('input[name=saturday]:checked');
  const errorEl = document.getElementById('rsvpError');

  if(!name || !friday || !saturday){
    errorEl.style.display = 'block';
    return;
  }
  errorEl.style.display = 'none';

  const extraGuest = document.querySelector('input[name=extraGuest]:checked');
  const staying = document.querySelector('input[name=staying]:checked');
  const entry = {
    name,
    friday: friday.value,
    saturday: saturday.value,
    extraGuest: extraGuest ? extraGuest.value : 'no',
    extraGuestName: document.getElementById('rextraname').value.trim(),
    staying: staying ? staying.value : '',
    song: document.getElementById('rsong').value.trim(),
    notes: document.getElementById('rnotes').value.trim(),
    submittedAt: new Date().toISOString()
  };

  const key = 'rsvp:' + Date.now() + '-' + Math.random().toString(36).slice(2,8);

  try{
    await window.storage.set(key, JSON.stringify(entry), true);
  }catch(err){
    console.error('Could not save RSVP to Claude storage', err);
  }

  try{
    submitToGoogleForm(entry);
  }catch(err){
    console.error('Could not submit RSVP to Google Form', err);
  }

  document.getElementById('doneName').textContent = name;
  document.getElementById('rsvpForm').classList.add('hidden');
  document.getElementById('rsvpDone').classList.remove('hidden');
});

function toggleAdmin(){
  const panel = document.getElementById('adminPanel');
  panel.classList.toggle('open');
  if(panel.classList.contains('open')) loadAdminPreview();
}

async function loadAdminPreview(){
  const panel = document.getElementById('adminPanel');
  if(!panel || !panel.classList.contains('open')) return;
  const t = translations[currentLang].rsvp;
  const content = document.getElementById('adminContent');
  content.textContent = t.loading;
  try{
    const list = await window.storage.list('rsvp:', true);
    if(!list || !list.keys || list.keys.length === 0){
      content.textContent = t.none;
      return;
    }
    const rows = [];
    for(const k of list.keys){
      try{
        const res = await window.storage.get(k, true);
        if(res && res.value) rows.push(JSON.parse(res.value));
      }catch(e){}
    }
    rows.sort((a,b) => new Date(a.submittedAt) - new Date(b.submittedAt));
    let html = `<table><thead><tr><th>${t.table.name}</th><th>${t.table.fri}</th><th>${t.table.sat}</th><th>${t.table.notes}</th></tr></thead><tbody>`;
    rows.forEach(r => {
      html += `<tr><td>${escapeHtml(r.name)}</td><td>${r.friday==='yes'?t.table.yes:t.table.no}</td><td>${r.saturday==='yes'?t.table.yes:t.table.no}</td><td>${escapeHtml(r.notes||'')}</td></tr>`;
    });
    html += '</tbody></table>';
    content.innerHTML = html;
  }catch(err){
    content.textContent = t.failLoad;
  }
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

setLang('no');
goTo('hero');

const revealEls = document.querySelectorAll('.reveal, .frame-reveal');
if('IntersectionObserver' in window){
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {threshold:0.15, rootMargin:'0px 0px -40px 0px'});
  revealEls.forEach(el => revealObserver.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in-view'));
}
