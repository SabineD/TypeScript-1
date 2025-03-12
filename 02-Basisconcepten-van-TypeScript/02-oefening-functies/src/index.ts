const calculatex = (x: number, y: number, operator?: string): number => {
  if (operator === "substract") {
    return x - y;
  }
  return x + y;
};

console.log(calculatex(5, 3));
console.log(calculatex(5, 3, "substract"));

const introduce = (naam: string, leeftijd: number = 30): string =>
  `Hello, my name is ${naam} and I'm ${leeftijd} years old.`;

console.log(introduce("Alice"));
console.log(introduce("Bob", 40));

const user: {
  name: string;
  age: number;
  describe(): string;
} = {
  name: "Charlie",
  age: 35,
  describe(): string {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
  },
};

console.log(user.describe());
