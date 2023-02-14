// generics with interface

/* 

interface User<T> {
  name: string;
  dob: T;
}

let user1: User<number> = {
  dob: 12,
  name: "anshu",
};

let user2: User<Date> = {
  dob: new Date(),
  name: "anshu",
};


*/

// generics with type

/* 

type User<T> = {
  name: string;
  dob: T;
};

let user1: User<number> = {
  dob: 12,
  name: "anshu",
};

let user2: User<Date> = {
  dob: new Date(),
  name: "anshu",
};


*/

// generic function

/*

interface Person {
  name: string;
  age: number;
}

async function fetchData<T>(url: string): Promise<T> {
  const data = await fetch("anshusharma" + url);
  return await data.json();
}

fetchData<Person>("/user");

fetchData<Person[]>("/users");

*/
