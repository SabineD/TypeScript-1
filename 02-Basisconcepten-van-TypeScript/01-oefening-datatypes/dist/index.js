"use strict";
const leeftijdStudent = 30;
const achternaam = "Defour";
const isStudent = true;
console.log(`De leefttijd van ${achternaam} is ${leeftijdStudent}. Ingeschreven als student is ${isStudent}.`);
const dagenVanDeWeek = [
    "maandag",
    "dinsdag",
    "woensdag",
    "donderdag",
    "vrijdag",
    "zaterdag",
    "zondag",
];
console.log(`Vandaag zijn we ${dagenVanDeWeek[2]}.`);
const persoonInfo = [30, "Sabine"];
console.log(`${persoonInfo[1]} is ${persoonInfo[0]}.`);
var WindRichting;
(function (WindRichting) {
    WindRichting[WindRichting["Noord"] = 0] = "Noord";
    WindRichting[WindRichting["Oost"] = 1] = "Oost";
    WindRichting[WindRichting["Zuid"] = 2] = "Zuid";
    WindRichting[WindRichting["West"] = 3] = "West";
})(WindRichting || (WindRichting = {}));
const huidigeRichting = WindRichting.Noord;
console.log(`De wind komt uit het ${huidigeRichting}`);
console.log(`De wind komt uit het ${WindRichting[huidigeRichting]}`);
console.log(WindRichting);
// Definieer enum voor 4 seasons: Spring, Summer, Autumn, Winter.
// Maak een currentSeason variabele die Autumn bevat. Log currentSeason.
var FourSeasons;
(function (FourSeasons) {
    FourSeasons[FourSeasons["Spring"] = 0] = "Spring";
    FourSeasons[FourSeasons["Summer"] = 1] = "Summer";
    FourSeasons[FourSeasons["Autumn"] = 2] = "Autumn";
    FourSeasons[FourSeasons["Winter"] = 3] = "Winter";
})(FourSeasons || (FourSeasons = {}));
const currentSeason = FourSeasons.Autumn;
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
var Planets;
(function (Planets) {
    Planets["Mercury"] = "Small and close to the Sun";
    Planets["Venus"] = "Similar in size to Earth, but very hot";
    Planets["Earth"] = "Our home planet";
    Planets["Mars"] = "The red planet";
    Planets["Jupiter"] = "The largest planet";
    Planets["Saturn"] = "Known for its rings";
    Planets["Uranus"] = "An ice giant";
    Planets["Neptune"] = "A distant blue world";
})(Planets || (Planets = {}));
const favoritePlanetInfo = Planets.Venus;
console.log(favoritePlanetInfo);
// Definieer een variabele met het type any en noem het mijnData.
// Definieer een andere variabele met het type unknown en noem het externeInput.
// Geef waardes.
// Log de variabelen.
// 5. Any en Unknown
let mijnData = "Dit kan alles zijn!";
mijnData = 100; // Dit is geldig met 'any' type
let externeInput;
externeInput = "Wat je wil intikken.";
console.log(`Mijn data: ${mijnData}`);
console.log(`Externe input: ${externeInput}`);
function begroet2(naam, taal = "Nederlands") {
    return `Hallo, ${naam}! ${taal}`;
}
console.log(begroet2("Jan"));
console.log(begroet2("Jan", "Engels"));
