// let a: string = "anshu";
// let b: number = 33;
// let c: boolean = true;

// let a: string[] = ["a", "b", "c"];
// let b: number[] = [1, 2, 4, 5];
// let c: unknown[] = ["a", "b", "c", 54, 4, 3, 2];

//!  type alias

// type Book = {
//   name: string;
//   price: number;
// };

// type Book = {
//   quantity: number;
// };

// we can not re assign aa type with type alias

//?  we can not define  interface for primitive data types such as vairiables

//! interface

// interface Book {
//   bname: string;
//   price: number;
// }

// interface Book {
//   quantity: number;
// }

//  it will merge both interfaces

// let book: Book = {
//   bname: "hacker",
//   price: 32,
//   quantity: 2,
// };

// console.log(book);

// ! unions

// let abc:string | number = "1212"
// let abc:string | number | boolean = "1212"

//!  literal

// type IName = "anshu" | "sharma";

// let anshu: "anshu" | "sharma" = "anshu";

// function printText(_s: string, _alignment: "left" | "right" | "center") {
//     // ...
//   }

//   printText("Hello, world", "left");
// printText("G'day, mate", "centre");

//! numberic literals

// function compare(a: string, b: string): -1 | 0 | 1 {
//     return a === b ? 0 : a > b ? 1 : -1;
//   }

// interface Options {
//   width: number;
// }
// function configure(x: Options | "auto") {
//   // ...
// }
// configure({ width: 100 });
// configure("auto");
// configure("automatic");

// Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.

//? multiples types of values in a array

//? let a: (number | string)[] = ["anshu", 12, 3];

//? let arr:Array<number | string> = [1,3,4,"Asda","asd"]

//! tuples

// let tup:[number,string]  =[1,"as"]
//  now we can not add more values the order will be  [number,string]
// let tup:[number,string]  =[1,"as","sad"]
//  but push or pop or slice method  can change that array

//! enums
// enums are a set of value

// enum StatusCodes {
//   NotFound = 404,
//   Success = 200,
//   Accepted = 202,
//   BadRequest = 400,
// }
// logs 404
// console.log(StatusCodes.Success);
// logs 200
// console.log(StatusCodes.Success);

// enum Days {
//   mon = "mon",
//   tue = "tue",
//   wed = "wed",
//   thu = 1,
//   fri,
// }

// let WhichDay: Days = 1
// console.log(WhichDay);

// function whichDat(day: Days) {
//   return day;
// }

// console.log(whichDat(Days.mon));

//! generics

// function createPair<typeX, typeY>(x: typeX, y: typeY): [typeX, typeY] {
//   return [x, y];
// }
// console.log(createPair<string, number>("Meaning", 42));

// const arr: Array<number> = [1, 2, 3, 4];
// const arr2: Array<string> = ["a", "b"];
// function something<T, W>(arg: T, arg2: W): object {
//   return { arg2, arg };
// }

// console.log(something("a", "ss"));

//! readonly in interface or type alias

// interface User {
//   name: string;
//   readonly id: number;
// }

// let user: User = {
//   name: "anshu",
//   id: 23,
// };
//  we can not change the id now
// user.id =2132

// type User = {
//   name: string[];
//   id: number[];
// };

// let user: User = {
//   name: ["a", "b"],
//   id: [1, 3, 4],
// };
// //  for array read only willnot work
// user.id.push(12);

// console.log(user);

//! class

// class Main {
//   name;
//   constructor(name: string) {
//     this.name = name;
//   }
//   printName(): void {
//     console.log(this.name);
//   }
// }

// let obj1 = new Main("anshu");
// obj1.printName();

//! inheritance in classes

// class Child extends Main {

// }

// let childObj = new Child("sharma ji");

// childObj.printName();

//! name space or modules

// enum Surname {
//   sharma = "sharma",
//   parashar = "parashar",
// }

// console.log(Surname.parashar);

// //!  generics

// interface HasAge {
//   age: number;
// }

// interface Players {
//   age: number;
//   name: string;
// }
// interface Users {
//   age: number;
//   name: string;
//   phn: number;
// }

// const players: Players[] = [
//   {
//     name: "anshu",
//     age: 12,
//   },
//   {
//     name: "sharma",
//     age: 22,
//   },
//   {
//     name: "chinu",
//     age: 8,
//   },
// ];

// let obj: HasAge[] = [{ age: 12 }, { age: 31 }, { age: 92 }];

// function getOldest<T extends HasAge>(people: T[]): T {
//   return people.sort((a, b) => b.age - a.age)[0];
// }

// console.log(getOldest(obj));

// console.log(getOldest(players));

// //  Generic function for  api call

// const fetchUsers = async <T>(url: string): Promise<T> => {
//   const data = await fetch("anshusharm/url");
//   const res = await data.json();
//   return res;
// };

// (async () => {
//   let d = await fetchUsers<Players[]>("assd");
//   let e = await fetchUsers<Users[]>("assd");
//   let f = await fetchUsers<Users>("assd");

//   d[0].age;
//   e[0].phn;
//   f.age;
// })();

//   generic function

// type User = {
//   name: string;
//   age: number;
//   phn: number;
// };

// let fechdata = async <T>(url: string): Promise<T> => {
//   let data = await fetch("https://anshusharma.me" + url);
//   return await data.json();
// };

// (async () => {
//   let user = await fechdata<User>("/user");
//   let users = await fechdata<User[]>("/users");
// })();

//  utlity function in typescript

// type Person = {
//   name: string;
//   age: number;
// };

// interface Todo {
//   title: string;
//   description: string;
// }

// take name from person
// type User1 = Pick<Person, "name">;

// take all except name
// type User2 = Omit<Person, "name">;

// make all field optional
// type User3 = Partial<Todo>;

// make all field required
// type User4 = Required<Todo>;

// type User5 = Readonly<Todo>;

// let user4: User4 = {
//   description: "",
//   title: "",
// };

// let user5: User5 = {
//   description: "",
//   title: "",
// };

// can not be changed -- readonly
// user5.description=""

//  Record keyword
// Record<Keys, Type>

//  it can be also use for dynamic object

// const obj = {}

// obj["name"] = "anshu"
// now typescript will throw an error here

//  this is how we can fix it

// type Tobj = Record<string, string>;
// const obj:Tobj = {};

// obj["name"] = "anshu"

// Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.

// type CatName = "miffy" | "puffy";

// type Colors = "red" | "green" | "blue";

// let cat: Record<CatName, string> = {
//   miffy: "Asd",
//   puffy: "sad",
// };

// let cat2: Record<CatName, Colors> = {
//   miffy: "blue",
//   puffy: "green",
// };

// type Tperson = {
//   miffy: string;
//   puffy: string;
// };

// let person: Tperson = {
//   miffy: "",
//   puffy: "",
// };

// The satisfies  Operator;

// const palette = {
//   red: [255, 0, 0],
//   green: "#00ff00",
//   bleu: [0, 0, 255],
//   //  ^^^^ sacrebleu - we've made a typo!
// };
// // We want to be able to use array methods on 'red'...
// const redComponent = palette.red.at(0);
// // or string methods on 'green'...
// const greenNormalized = palette.green.toUpperCase();

// type Colors = "red" | "green" | "blue";
// type RGB = [red: number, green: number, blue: number];
// const palette: Record<Colors, string | RGB> = {
//   red: [255, 0, 0],
//   green: "#00ff00",
//   blue: [0, 0, 255],
//   //  ~~~~ The typo is now correctly detected
// };
// But we now have an undesirable error here - 'palette.red' "could" be a string.
// const redComponent = palette.red.at(0);

// type RGB = [red: number, green: number, blue: number];
// type CatName = "name" | "phn";

// let cat2: Record<CatName, RGB> = {
//   name: [1, 2, 4],
//   phn: [2, 2, 4],
// };

//  satisfies operator

//  can be used when we are overwriting types
// type Color =
//   | string
//   | {
//       color: string;
//     };

// let green: Color = "green";

// green.charAt(0)

// let blue = "blue" as Color;
//  the type of blue is Color

// let red = "red" satisfies Color;

//  now the type of red is string

//  instanceof with try and catch block

// (function fetchData() {
//   let data = [1, 2, 4, 2, 2];
//   try {
//     if (data) {
//       throw new Error("an error occured");
//     }
//   } catch (error) {
//     if (error instanceof Error) {
//       console.log("i am a error");
//       console.log(error.cause);
//       console.log(error.message);
//       // console.log(error.name);
//       // console.log(error.stack);

//     }
//     //  first aaproach
//     // return (error as Error).name

//   }
// })();

