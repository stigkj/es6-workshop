# es6-workshop

1. Start med å kjøre `npm install`
2. Kjør opp følgende kommandoer i 2 forskjellige terminal vinduer
    - `npm run test:watch`
    - `npm run webpack:watch`

Bra ressurs: http://exploringjs.com/es6/

## Oppgave 1
Oppgave 1 er å implementere intro.js metodene slik at testene i introTest.js passerer.
Testene er "skipped", så fjern *.skip* fra testen så får du den til å feile før du implementerer koden.

## Oppgave 2
Oppgaven omhandler å lage og bruke ES6 moduler.

- Første test forventer at det er implementert en funksjon som returner bare det ene argumentet den får inn, i defaultModule. Må også importeres i test filen.
- Andre test forventer at det er 2 funksjoner i mathModule.js. Her kan det da ikke brukes `export default`. Og så må de importeres i test filen slik at de kan brukes.
- Siste test er å bruke https://github.com/speedskater/babel-plugin-rewire til å mocke `foo` importen som er i moduleWithDependency.js. (selve plugin'en er klar til bruk, er bare å endre i testen) 

## Oppgave 3
Oppgaven er å lage noen ES6 klasser.
- Først skal det lages en Animal klasse som tar inn et navn i konstruktøren.
- Neste er å bruke den allerede opprettede Animal klassen som en subklasse til en Lion klasse, som kan si noe.


