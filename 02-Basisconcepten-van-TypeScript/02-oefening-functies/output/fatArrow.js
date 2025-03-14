"use strict";
const calculate = (x, y, operator) => {
    if (operator === "substract") {
        return x - y;
    }
    return x + y;
};
console.log(calculate(10, 5));
console.log(calculate(10, 5, "substract"));
const introduce = (naam, leeftijd = 30) => `Hallo, mijn naam is ${naam}, ik ben ${leeftijd} jaar oud.`;
console.log(introduce("Sabine"));
console.log(introduce("Sabine", 20));
const user = {
    name: "Sabine",
    age: 25,
    describe() {
        return `Hallo, mijn naam is ${this.name}, ik ben ${this.age} jaar oud.`;
    },
};
console.log(user.describe());
const person = {
    name: "Alice",
    startTimer: function () {
        setInterval(() => {
            console.log(`Hallo, mijn naam is ${this.name}`);
        }, 1000);
    },
};
// person.startTimer();
//# sourceMappingURL=fatArrow.js.map