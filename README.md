npm install react-navigation

# Installasjon og bruk
### IKKE SIKKER PÅ OM DETTE ER RIKTIG
1. Kjør `npm install` i backend-mappen
2. Kjør `npm install` i frontend mappen
3. Deretter kjør `npm start` i backend-mappen


# Dokumentasjon

Vi har laget en app som viser frem steder i verden. Den har en hjem-side og en utforsker-side. På hjem-siden vises de fem byen som flest har trykket seg inn på for å se mer informasjon, da de fem mest populære byene. Nederst vises en tab-bar som brukes til å navigere mellom de to sidene. Ved å trykke på taben med søkeikonet, kommer du inn til utforsk-siden.

Det er på utforsksiden mye av funksjonaliteten ligger, blant annet med søking, filtrering og sortering. Søkingen gjøres med søkebaren og filtrering/sortering gjøres vha dropdown-menyene. 

Man kan også trykke på lokasjons-kortene for å se mer informasjon om hvert sted. 

## Teknologier

* Redux
* Expo
* MongoDB
* Express
* Mongoose 
* og evt mer?????

## Design
Vi har gått for et minimaslistisk design for å gjøre siden mest oversiktelig og for at den skal være enkel å bruke. Vi har for det meste brukt react sine ekstrene biblioteker, og det gjør at siden holder seg konsistent i design. 

## Funksjonalitet

Når det gjelder søk, så må man søke på hele byen/landet for at det skal komme opp. 
Hadde vi hatt mer tid (og prosjektet ga mer poeng) skulle vi også fått implementert slik at man kunne søke med ufullstendige ord. 
Feks man søker "p" og alle landene/byene som starter på "p" dukker opp. Vi har også et issue på dette med label "could be nice". 


## Git og kommentering
Vi har prøvd å være flinke på å kommentere koden, samt merke hver commit med hvilken issue de tilhører. De stedene vi ikke har lagt det til er det fordi det kun committes en quick fix eller at commit ikke tilhører noen spesiell issue. 

Vi har prøvd å gjøre koden vår enda mer ryddig enn i prosjekt 3, og vi har prøvd å gi alle komponenter og funksjoner fornuftige navn slik at man lett skal skjønne hva de er og gjør.

## Backend
Selvom man kunne benytte seg av samme server som sist, valgte vi å gjøre om litt på vår. Dette fordi vi fikk tilbakemeldinger på prosjekt 3 om at vi ikke hadde det beste oppsettet (f.eks fordi vi sorterte i frontend), og dette var ikke like kompatibelt med veldig store datasett. Vi har også ryddet opp i fetchene og laget egen fil som kjører fetchmetoder, for å gjøre det hele mer oversiktelig. 

Vi har da en routers-mappe i backend som inneholder en api-fil. Her ligger all routing, samt sortering dersom det er valgt av bruker. Den sorterer da dersom det er lagret noe om dette i redux. 

I frontend har vi også en api-mappe som inneholder en fetchers-fil. Denne inneholder en GetData-funksjon som hente riktig data utfra hvilken input den får, eks på riktig søkeord osv. 

Selve databasen er lik som sist, og det samme er koblingen mellom server og app. Forskjellen er da at vi har ryddet opp i koden så den er mer oversiktelig, vi har prøvd å få mest mulig gjenbruk av kode og slippe å skrive ting dobbelt opp. 

