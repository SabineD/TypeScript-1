"use strict";
const calculatex = (x, y, operator) => {
    if (operator === "substract") {
        return x - y;
    }
    return x + y;
};
console.log(calculatex(5, 3));
console.log(calculatex(5, 3, "substract"));
const introducex = (naam, leeftijd = 30) => `Hello, my name is ${naam} and I'm ${leeftijd} years old.`;
console.log(introducex("Alice"));
console.log(introducex("Bob", 40));
const userx = {
    name: "Charlie",
    age: 35,
    describex() {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    },
};
console.log(userx.describex());
//# sourceMappingURL=index.js.map