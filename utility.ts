// Partial ReturnType Parameters Omit Pick Exclude Required Readonly Awaited

type Person = {
  name: string;
  age?: number;
};

let person1: Person = {
  age: 1,
  name: "anshu",
};

let user1: Required<Person> = {
  age: 12,
  name: "Asa",
};

let user2: Readonly<Person> = {
  age: 12,
  name: "Asa",
};

user2.age = "Asda";

let user3: Pick<Person, "name"> = {
  name: "Asa",
};

let user4: Omit<Person, "name"> = {
  name: "Asa",
  age: 12,
};

// ReturnType

function fetchUser(name: string) {}

let user5: ReturnType<typeof fetchUser>;

// Parameters

let user6: Parameters<typeof fetchUser>[0];

// Exclude

type Name = "anshu" | "sharma";

let user7: Exclude<Name, "anshu"> = "sharma";

// Extract

let user8: Extract<Name, "anshu"> = "anshu";

// Awaited

type nameUser = Awaited<string>;

let FetchName = new Promise((res, rej) => {
  try {
    res("Anshu sharma");
  } catch (error) {
    rej(error);
  }
});

console.log(FetchName); // Promise { 'Anshu sharma }

console.log(FetchName); // Promise { 'Anshu sharma }
