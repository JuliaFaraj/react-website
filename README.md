React-projekt – StorAid

Detta är ett skolprojekt där jag har byggt en webbplats i React utifrån en Figma-design. Fokus har legat på att arbeta komponentbaserat, hämta data från API:er och skapa en ren, tydlig och organiserad projektstruktur. Jag har även använt AI som bollplank när jag fastnade eller behövde hjälp att förstå logik, men all kod är skriven, anpassad och implementerad av mig.

Uppbyggnad
React & Struktur
- Projektet är uppdelat i flera fristående komponenter under src/Components/.
- Navigering hanteras med React Router.
- Varje sektion i designen motsvarar en egen komponent (t.ex. LatestBlogs, FAQ, WhyChooseUs, Contact Form).

API-hämtningar
Bloggar
- Hämtar alla bloggar, sorterar dem efter datum och visar de tre senaste.
FAQ
- Hämtar FAQ-poster från API och visar dem i en egenbyggd accordion med öppna/stäng-funktion.

Kontaktformulär
Formuläret hanterar:
- state med useState
- validering med reguljära uttryck
- validering vid submit
- POST-request till API:t när allt är korrekt ifyllt

CSS & Layout
- All styling är skriven i vanlig CSS.
- Jag använder både flexbox och grid beroende på sektion.

Struktur
- Komponenter: src/Components/
- Sidor: src/Pages/
- Bilder & ikoner: src/assets/
- Global CSS: index.css


Reflektion

Jag har arbetat självständigt med detta projekt och använt AI (ChatGPT) som ett stöd för att förstå specifika problem, felsöka snabbare och få tips på hur jag kunde strukturera min kod bättre. Det var viktigt för mig att förstå vad jag gjorde och varför, så all logik och alla beslut i projektet är mina egna.

Under projektets gång har jag:
- byggt komponenter från grunden
- satt upp routing mellan alla sidor
- hämtat och presenterat data från API
- skapat ett fullständigt kontaktformulär
- löst layoutproblem och buggar (t.ex. extra knappar, grid-problem och valideringsfel)


Det här projektet har gett mig en tydligare förståelse för hur man bygger en modern React-applikation med fokus på struktur, komponenter och API-hantering. I framtida arbetetn kommer jag se till att förbättra och bygga vidare på uppräckter jag fick under arbetets gång, exempelvis kommer jag framöver inte ha en global css fil för att enklare kuna hitta alla olika css delar genom egna filer. 
