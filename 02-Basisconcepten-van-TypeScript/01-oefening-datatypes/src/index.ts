const leeftijdStudent: number = 30;
const achternaam: string = "Defour";
const isStudent: boolean = true;

console.log(
  `De leefttijd van ${achternaam} is ${leeftijdStudent}. Ingeschreven als student is ${isStudent}.`
);

const dagenVanDeWeek: string[] = [
  "maandag",
  "dinsdag",
  "woensdag",
  "donderdag",
  "vrijdag",
  "zaterdag",
  "zondag",
];
console.log(`Vandaag zijn we ${dagenVanDeWeek[2]}.`);

const persoonInfo: [number, string] = [30, "Sabine"];
console.log(`${persoonInfo[1]} is ${persoonInfo[0]}.`);

enum WindRichting {
  Noord,
  Oost,
  Zuid,
  West,
}
const huidigeRichting: WindRichting = WindRichting.Noord;
console.log(`De wind komt uit het ${huidigeRichting}`);
console.log(`De wind komt uit het ${WindRichting[huidigeRichting]}`);
console.log(WindRichting);

// Definieer enum voor 4 seasons: Spring, Summer, Autumn, Winter.
// Maak een currentSeason variabele die Autumn bevat. Log currentSeason.

enum FourSeasons {
  Spring,
  Summer,
  Autumn,
  Winter,
}
const currentSeason: FourSeasons = FourSeasons.Autumn;
console.log(currentSeason);

// Maak een enum voor Planets. Deze bevat de planeten en een uitleg:
//    Mercury = "Small and close to the Sun",
//    Venus = "Similar in size to Earth, but very hot",
//    Earth = "Our home planet",
//    Mars = "The red planet",
//    Jupiter = "The largest planet",
//    Saturn = "Known for its rings",
//    Uranus = "An ice giant",
//    Neptune = "A distant blue world"
// Maak een variabele favoritePlanetInfo en stel die in op je favoriete planeet.

enum Planets {
  Mercury = "Small and close to the Sun",
  Venus = "Similar in size to Earth, but very hot",
  Earth = "Our home planet",
  Mars = "The red planet",
  Jupiter = "The largest planet",
  Saturn = "Known for its rings",
  Uranus = "An ice giant",
  Neptune = "A distant blue world",
}
const favoritePlanetInfo: Planets = Planets.Venus;
console.log(favoritePlanetInfo);

// Definieer een variabele met het type any en noem het mijnData.
// Definieer een andere variabele met het type unknown en noem het externeInput.
// Geef waardes.
// Log de variabelen.

// 5. Any en Unknown
let mijnData: any = "Dit kan alles zijn!";
mijnData = 100; // Dit is geldig met 'any' type
let externeInput: unknown;
externeInput = "Wat je wil intikken.";

console.log(`Mijn data: ${mijnData}`);
console.log(`Externe input: ${externeInput}`);

function begroet2(naam: string, taal: string = "Nederlands"): string {
  return `Hallo, ${naam}! ${taal}`;
}
console.log(begroet2("Jan"));
console.log(begroet2("Jan", "Engels"));
