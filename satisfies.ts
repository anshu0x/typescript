/*
type User = {
  name: number | string;
};

//   let user: User = {
//     name: 23,
//   };

//  in union type always prefer to use satisfies so that typscript automatically can infer the type
//    the another sol. may be using typeof operator or condionally rendering that
// narrowing down the union type

let user: User = {
  name: "anshu",
};

// narrrowing down the union type

if (typeof user.name == "string") {
    //  now the autcomplete is also working fine here and all fucntion related to string are also available 
  console.log(user.name);
} else {
  console.log(user);
}



dont use this eveywhere only with literal's or unions 

*/