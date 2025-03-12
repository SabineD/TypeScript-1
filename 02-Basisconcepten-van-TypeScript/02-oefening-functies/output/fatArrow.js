"use strict";
const calculate = (x, y, operator) => {
    if (operator === "substract") {
        return x - y;
    }
    return x + y;
};
console.log(calculate(10, 5));
console.log(calculate(10, 5, "substract"));
//# sourceMappingURL=fatArrow.js.map