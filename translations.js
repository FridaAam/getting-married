const translations = {
  no: {
    nav:{program:"Program", info:"Praktisk info", stay:"Overnatting", rsvp:"RSVP"},
    hero:{eyebrow:"Vi skal gifte oss", date:"29. august · Stilla, Indre Kviviga", place:"Stilla, Høvåg - Sørlandet", scroll:"Stilla venter"},
    program:{
      kicker:"Helgens gang", title:"Program",
      sub:"To dager ved sjøen — én rolig kveld for å bli kjent, én dag for å feire.",
      fri:{day:"Fredag", desc:"Vi tenner grillen, og bruker kvelden på å bli bedre kjent før den store dagen. Uformelt og avslappet."},
      sat:{
        day:"Lørdag", sub:"Bryllupsdagen",
        t1:"Vielse", d1:"Selve seremonien — vi sier ja.",
        t2:"Mottakelse", d2:"Mottakelse med lett mat og drikke på plenen",
        t3:"Middag", d3:"Middag i teltet",
        laterTime:"Utover kvelden", d4:"Kake, dans og fest",
      }
    },
    info:{
      kicker:"Godt å vite", title:"Praktisk informasjon", sub:"Alt du trenger å vite før du kommer til Stilla.",
      loc:{h:"Sted", p1:"Stilla, Kvivigveien 40, 4770 Høvåg."},
      dress:{h:"Antrekk", p1:"Smoking/dress; lang (uhvit) kjole.", p2:"Vi anbefaler plen-vennlige sko, da vielsen og minglingen foregår på gress."},
      stay:{h:"Overnatting", p1:"Forslag til overnatting i nærheten kommer her — både hoteller i Lillesand og muligheter for hytte/rom i området.", ph:"Forslag legges til"},
      transport:{h:"Transport", p1:"For gjester som bor i Kristiansand vil det settes opp buss/taxi fra Thon Hotell Parken i Kristiansand til og fra Stilla. Vi anbefaler gjester som bor på Skottevik Feriesenter om å rusle bort til Stilla. Det tar ca. 15 minutter."},
      gifts:{h:"Gaver", p1:"Det viktigste er at dere kommer.", ph:"Info legges til"},
      food:{h:"Mat & allergier", p1:"Har du allergier eller matpreferanser? Legg det inn under RSVP, så tar vi hånd om det."}
    },
    stay:{
      kicker:"Rom & losji", title:"Overnatting",
      sub:"To alternativer i nærheten av Stilla — velg det som passer best.",
      thon:{
        intro:"For dere som ønsker å bo i byen, har vi avtale med Thon Hotel Parken i Kristiansand. Det vil bli arrangert felles transport til og fra Stilla på bryllupsdagen.",
        discountLabel:"Rabattkode", discountValue:"Bryllup Aamot og Marø — 25 % rabatt",
        bookingLabel:"Bestilling", priceLabel:"Priser per natt",
        r1:"Standardrom, 1 person", r2:"Standardrom, 2 personer",
        r3:"Familierom, 3 personer", r4:"Familierom, 4 personer",
        r5:"Business-rom, 1 person", r6:"Business-rom, 2 personer",
        r7:"Juniorsuite, 1 person", r8:"Juniorsuite, 2 personer",
        note:"Oppgi rabattkoden ved bestilling for å få 25 % rabatt. Book én natt (lørdag) eller to (fredag & lørdag), etter eget ønske."
      },
      skottevik:{
        intro:"For en litt enklere og mer naturnær opplevelse, og gangavstand til selve bryllupet, har vi forhåndsreservert et antall leiligheter på Skottevik for perioden 28.–30. august 2026.",
        priceLabel:"Priser for hele oppholdet, 2 netter (28.–30.8.26), inkl. obligatorisk utvask",
        l4cap:"4 personer · 35 m²", l4desc:"To dobbeltrom med rammemadrasser. Stue med åpent kjøkken, komfyr, kjøleskap og oppvaskmaskin. Bad med dusj og toalett. Felles uteplass og vik med sandstrand utenfor leilighetsbygget.",
        l5cap:"5 personer · 50 m²", l5desc:"Leilighet i sørlandsstil med to dobbeltrom og ett enkeltrom. Bad med dusj og toalett. Stue med åpent kjøkken, komfyr og kjøleskap. Ca. 20 meter fra sjøen, med tilgang til felles uteplass.",
        l6acap:"6 personer · ca. 56 m²", l6adesc:"Leilighet over restauranten med to soverom og hems. To enheter ligger mot tunet uten balkong, to har liten balkong mot sjøen. Stue med åpent kjøkken, komfyr, kjøleskap og oppvaskmaskin. Bad med dusj og toalett. Trapp opp til enheten.",
        l6ccap:"6 personer · ca. 56 m²", l6cdesc:"Leilighet over to plan helt ned ved sjøkanten, med to soverom og hems. Møblert terrasse mot sjøen. Kombinert stue og kjøkken med spiseplass, komfyr, kjøleskap og oppvaskmaskin. Bad har dusj og toalett.",
        refLabel:"Referanse", bookingLabel:"Bestilling",
        bookingNote:"booking@skottevik.no — oppgi referanse, type enhet, e-postadresse og telefonnummer. Du får deretter bekreftelse og betalingslenke.",
        deadline:"Frist: Reservasjonene holdes til 30. juni 2026."
      }
    },
    rsvp:{
      kicker:"Vi håper du kommer", sub:"Gi oss beskjed om du blir med — på grilling på fredag, bryllupet, eller begge deler.",
      name:{label:"Navn", ph:"Fornavn Etternavn"},
      friday:{label:"Fredag — Grilling (18:00–22:00)"},
      saturday:{label:"Lørdag — Bryllupet", sub:"Vielse & fest"},
      attending:"Kommer", cant:"Kan ikke",
      notes:{label:"Allergier, matpreferanser eller annet vi bør vite", ph:"F.eks. glutenfri, vegetar, annet..."},
      error:"Vennligst fyll ut navn og svar for begge dager.",
      submit:"Send svar", thanks:"Takk,", doneMsg:"Svaret ditt er notert. Vi gleder oss til å feire med deg.",
      adminBtn:"Vis alle svar (kun for brudeparet)",
      table:{name:"Navn", fri:"Fre", sat:"Lør", notes:"Notat", yes:"Ja", no:"Nei"},
      loading:"Laster...", none:"Ingen svar registrert ennå.", failLoad:"Kunne ikke hente svar."
    },
    footer:{line:"29. august · Stilla, Høvåg"}
  },
  en: {
    nav:{program:"Schedule", info:"Good to Know", stay:"Accommodation", rsvp:"RSVP"},
    hero:{eyebrow:"We're getting married", date:"August 29 · Stilla, Indre Kviviga", place:"Stilla, Høvåg – Sørlandet, Norway", scroll:"Stilla awaits"},
    program:{
      kicker:"The weekend", title:"Schedule",
      sub:"Two days by the sea — one relaxed evening to get to know each other, one day to celebrate.",
      fri:{day:"Friday", desc:"We'll light the grill, and spend the evening getting to know each other before the big day. Relaxed and informal."},
      sat:{
        day:"Saturday", sub:"Wedding Day",
        t1:"Ceremony", d1:"The ceremony itself — we say yes.",
        t2:"Drinks", d2:"A glass in hand and time to congratulate, breathe, and enjoy the view.",
        t3:"Dinner", d3:"We'll sit down to dinner together.",
        laterTime:"Later that evening", t4:"Dancing", d4:"We'll hit the dance floor, and the night is ours."
      }
    },
    info:{
      kicker:"Good to know", title:"Practical Information", sub:"Everything you need to know before you arrive at Stilla.",
      loc:{h:"Location", p1:"Stilla, Kvivigveien 40, 4770 Høvåg"},
      dress:{h:"Dress Code", p1:"Tuxedo/suit; long (non-white) dress.", p2:"We recommend lawn-friendly shoes, since the ceremony and mingling take place on the lawn."},
      stay:{h:"Accommodation", p1:"Suggestions for nearby accommodation will go here — hotels in Lillesand as well as cabins and rooms in the area.", ph:"Suggestions coming soon"},
      transport:{h:"Transport", p1:"For guests staying at Thon Hotel Parken in Kristiansand we will arrange taxi/bus to and from Stilla. For guests staying at Skottevik Feriesenter, we recommend walking over to Stilla. It takes about 15 minutes."},
      gifts:{h:"Gifts", p1:"The most important thing is that you're there.", ph:"Info coming soon"},
      food:{h:"Food & Allergies", p1:"Have any allergies or dietary preferences? Let us know under RSVP and we'll take care of it."}
    },
    stay:{
      kicker:"Rooms & Stay", title:"Accommodation",
      sub:"Two options near Stilla — pick whichever suits you best.",
      thon:{
        intro:"For those who'd like to stay in the city, we have an agreement with Thon Hotel Parken in Kristiansand. Shared transport to and from Stilla will be arranged on the wedding day.",
        discountLabel:"Discount code", discountValue:"Bryllup Aamot og Marø — 25% discount",
        bookingLabel:"Booking", priceLabel:"Prices per night",
        r1:"Standard room, 1 person", r2:"Standard room, 2 people",
        r3:"Family room, 3 people", r4:"Family room, 4 people",
        r5:"Business room, 1 person", r6:"Business room, 2 people",
        r7:"Junior suite, 1 person", r8:"Junior suite, 2 people",
        note:"Quote the discount code when booking to get 25% off. Book one night (Saturday) or two (Friday & Saturday), whichever suits you."
      },
      skottevik:{
        intro:"For a slightly simpler, more nature-close stay within walking distance of the wedding itself, we've pre-booked a number of apartments at Skottevik for 28–30 August 2026.",
        priceLabel:"Prices for the full stay, 2 nights (28–30.8.26), incl. mandatory final cleaning",
        l4cap:"4 people · 35 m²", l4desc:"Two double rooms with divan beds. Living room with open kitchen, stove, fridge and dishwasher. Bathroom with shower and toilet. Shared outdoor area and a sandy-beach cove outside the building.",
        l5cap:"5 people · 50 m²", l5desc:"Sørlandet-style apartment with two double rooms and one single room. Bathroom with shower and toilet. Living room with open kitchen, stove and fridge. About 20 metres from the sea, with access to a shared outdoor area.",
        l6acap:"6 people · approx. 56 m²", l6adesc:"Apartment above the restaurant with two bedrooms and a loft. Two units face the courtyard with no balcony; two have a small balcony facing the sea. Living room with open kitchen, stove, fridge and dishwasher. Bathroom with shower and toilet. Stairs up to the unit.",
        l6ccap:"6 people · approx. 56 m²", l6cdesc:"Two-storey apartment right by the water's edge, with two bedrooms and a loft. Furnished terrace facing the sea. Combined living room and kitchen with dining area, stove, fridge and dishwasher. Bathroom with shower and toilet.",
        refLabel:"Reference", bookingLabel:"Booking",
        bookingNote:"booking@skottevik.no — state the reference, unit type, email address and phone number. You'll then receive confirmation and a payment link.",
        deadline:"Deadline: Reservations are held until 30 June 2026."
      }
    },
    rsvp:{
      kicker:"We hope you'll come", sub:"Let us know if you'll join us — for casual barbeque, the wedding, or both.",
      name:{label:"Name", ph:"First Last"},
      friday:{label:"Friday — Casual barbeque (18:00–22:00)"},
      saturday:{label:"Saturday — The Wedding", sub:"Ceremony & Party"},
      attending:"Attending", cant:"Can't make it",
      notes:{label:"Allergies, dietary preferences, or anything else we should know", ph:"E.g. gluten-free, vegetarian, other..."},
      error:"Please fill in your name and answer for both days.",
      submit:"Submit RSVP", thanks:"Thank you,", doneMsg:"Your response has been noted. We can't wait to celebrate with you.",
      adminBtn:"View all responses (couple only)",
      table:{name:"Name", fri:"Fri", sat:"Sat", notes:"Notes", yes:"Yes", no:"No"},
      loading:"Loading...", none:"No responses yet.", failLoad:"Could not load responses."
    },
    footer:{line:"August 29 · Stilla, Høvåg"}
  }
};
