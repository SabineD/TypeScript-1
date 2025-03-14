"use strict";
class Student {
    constructor(naam, studentnummer) {
        this._cijfers = [];
        this._naam = naam;
        this._studentnummer = studentnummer;
    }
    get getNaam() {
        return this._naam;
    }
    get getGemiddelde() {
        if (this._cijfers.length === 0)
            return 0;
        const totaal = this._cijfers.reduce((acc, curr) => acc + curr, 0);
        return Number((totaal / this._cijfers.length).toFixed(2));
    }
    set setNaam(value) {
        if (value.trim() !== "") {
            this._naam = value;
        }
        else {
            console.log("De naam mag niet leeg zijn.");
        }
    }
    voegCijferToe(cijfer) {
        this._cijfers.push(cijfer);
    }
}
const student1 = new Student("Pieter", 12345);
const student2 = new Student("Anna", 54321);
const student3 = new Student("Sofie", 67890);
student1.voegCijferToe(8);
student1.voegCijferToe(7.5);
student1.voegCijferToe(6);
student2.voegCijferToe(7);
student2.voegCijferToe(7.5);
student2.voegCijferToe(8);
console.log(`${student1.getNaam}'s gemiddelde is ${student1.getGemiddelde}`);
console.log(`${student2.getNaam}'s gemiddelde is ${student2.getGemiddelde}`);
console.log(`${student3.getNaam}'s gemiddelde is ${student3.getGemiddelde}`);
student1.setNaam = "Peter";
console.log(`De nieuwe naam van student1 is: ${student1.getNaam}`);
