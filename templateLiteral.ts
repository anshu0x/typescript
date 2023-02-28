// TypeScript Template Literal Types

type Surname = "Sharma";

type Name = `${string} ${Surname}`;

let name: Name = "Anshu Sharma";

console.log(name);

export {};
