const calculatex = (x: number, y: number, operator?: string): number => {
  if (operator === "substract") {
    return x - y;
  }
  return x + y;
};

console.log(calculatex(5, 3));
console.log(calculatex(5, 3, "substract"));

const introducex = (naam: string, leeftijd: number = 30): string =>
  `Hello, my name is ${naam} and I'm ${leeftijd} years old.`;

console.log(introducex("Alice"));
console.log(introducex("Bob", 40));

const userx: {
  name: string;
  age: number;
  describex(): string;
} = {
  name: "Charlie",
  age: 35,
  describex(): string {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
  },
};

console.log(userx.describex());
