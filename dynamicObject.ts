//  how to create a dynamic object
//  the key of an object is always considered as a string it cannotbe an object or number or undefined

// type Obj = {
//   [id:string]: string;
// };

// let obj = {
//   123: "asdasd",
// };
// however we can assign an number as a key but it will be considered as a string
//  we can not acces that in such way  --- obj.123 we have to use obj[123]

// console.log(obj.123)

/*

type Obj = {
  [id: string]: number;
};

let obj1: Obj = {};

obj1.name = 1e3 + 2e3;

console.log(obj1);



*/
