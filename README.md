npm install react-navigation

# Installasjon og bruk

#_todo_:

_note to self: installere mongoose? Expo? Cypress? --save på dem ?_

1. `git clone git@gitlab.stud.idi.ntnu.no:IT2810-H19/teams/team-10/prosjekt-4.git Prosjekt_4_gruppe10 && cd Prosjekt_4_gruppe10`
2. `cd frontend && npm install`
3. `cd ../backend && npm install`
4. Deretter kjør `npm start` i backend-mappen

# Dokumentasjon

Vi har laget en app som viser frem steder i verden. Den har en hjem-side, en utforsker-side og en favoritt-side. Nederst vises en tab-bar som brukes til å navigere mellom de tre sidene. Ved å trykke på taben med huset kommer man til hjem-siden, ved å trykke på søkeikonet, kommer man inn til utforsk-siden og ved å trykke på hjertet kommer man til sin favoritt.

Hjem-siden er en oversiktsside der man kan få et visst intrykk av hva appen gjør. Der vises også de fem mest populære byene, altså de lokasjonskortene som flest har trykket seg inn på for å se mer informasjon om.

Det er på utforskersiden mye av funksjonaliteten ligger, blant annet søking, filtrering og sortering. Søkingen gjøres med søkebaren og filtrering/sortering gjøres ved hjelp av dropdown-menyene.

Den siste tab-en, favoritt-siden, viser fram ditt favorittsted. Dette kan man velge når man er inne på et lokasjonskort. Det er kun mulig med én favoritt.

## Funksjonalitet

Når det gjelder søk, så må man søke på hele byen/landet for at det skal komme opp.
Hadde vi hatt mer tid (og prosjektet ga mer poeng) skulle vi også fått implementert slik at man kunne søke med ufullstendige ord.
Feks man søker "p" og alle landene/byene som starter på "p" dukker opp. Vi har også et issue på dette med label "could be nice".

## Design

Vi har gått for et minimaslistisk design for å gjøre siden oversiktelig og for at den skal være enkel å bruke. Vi har for det meste brukt react sine eksterne biblioteker, og det gjør at siden holder seg konsistent i design.

## Frontend

Appen er skrevet i React Native, og til state management bruker vi Redux. Vi initialiserte prosjektet og tester appen ved å bruke Expo. I tillegg har vi tatt i bruk ulike biblioteker som for eksempel react-navigation-tab og react-native-material-menu. Hvis man ønsker å se resten, finner man fler i package.json der de står i dependencies.

## Backend

Selvom man kunne benytte seg av samme server som sist, valgte vi å gjøre om litt på vår. Dette fordi vi fikk tilbakemeldinger på prosjekt 3 om at vi ikke hadde det beste oppsettet (f.eks fordi vi sorterte i frontend), og dette var ikke like kompatibelt med veldig store datasett. Vi har også ryddet opp i fetchene og laget egen fil som kjører fetchmetoder for å gjøre det hele mer oversiktelig.

Vi har da en routers-mappe i backend som inneholder en api-fil. Her ligger all routing, samt sortering dersom det er valgt av bruker. Den sorterer da dersom det er lagret noe om dette i redux.

I frontend har vi også en api-mappe som inneholder en fetchers-fil. Denne inneholder en GetData-funksjon som hente riktig data utfra hvilken input den får, eks på riktig søkeord osv.

Selve databasen er lik som sist, og det samme er koblingen mellom server og app. Forskjellen er da at vi har ryddet opp i koden så den er mer oversiktelig, vi har prøvd å få mest mulig gjenbruk av kode og slippe å skrive ting dobbelt opp.

Av teknologier til backend har vi brukt Express, MondoDB og Mongoose.

## Git og kommentering

I dette prosjektet er master-branchen "hellig" og skal alltid ha velfungerende og kjørende kode. Til utviklingen har vi opprettet ulike brancher til de forskjellige issuesene, samt merket hver commit med hvilken issue de tilhører. De stedene vi ikke har lagt til dette, er det fordi vi committer en quick fix eller at committen ikke tilhører noen spesiell issue. Vi har også laget merge requests når vi skal merge til master. Dette gjør det lettere å oppdage merge conflicts og at vi ikke merger dårlig kode til master.

Vi har kommentert koden på en saklig måte, og prøvd å supplere koden strategisk og konstruktivt. For å gjøre koden vår enda mer ryddig enn i prosjekt 3, har vi prøvd å gi alle komponenter og funksjoner fornuftige navn slik at man lett skal skjønne hva de er og gjør, tillegg til å gjøre ting konsistent og oversiktlig.

## Testing

Run tests:
For å kjøre:

```
npx cypress open
```

For ende-til-ende-testing har vi brykt Cypress. Da får vi testet applikasjonen tilstrekkelig på en enkel og oversiktlig måte. I tillegg er det lett å følge testene og se hva som skjer.
