const calculate = (x: number, y: number, operator?: string): number => {
  if (operator === "substract") {
    return x - y;
  }

  return x + y;
};
console.log(calculate(10, 5));
console.log(calculate(10, 5, "substract"));
