"use strict";
const calculatex = (x, y, operator) => {
    if (operator === "substract") {
        return x - y;
    }
    return x + y;
};
console.log(calculatex(5, 3));
console.log(calculatex(5, 3, "substract"));
const introduce = (naam, leeftijd = 30) => `Hello, my name is ${naam} and I'm ${leeftijd} years old.`;
console.log(introduce("Alice"));
console.log(introduce("Bob", 40));
const user = {
    name: "Charlie",
    age: 35,
    describe() {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    },
};
console.log(user.describe());
//# sourceMappingURL=index.js.map