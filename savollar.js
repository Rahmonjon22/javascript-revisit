 /** ====== 
  * 1 write a code to get array of names from given array of users
  * 2 get back only active users
  * 3 Sort users by age descending 
  * ====== */
const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 32
  },
  {
    id: 2,
    name: "Mona",
    isActive: false,
    age: 22
  },
  {
    id: 3,
    name: "Marks",
    isActive: true,
    age: 45
  },
  {
    id: 4,
    name: "Jackie",
    isActive: false,
    age: 18
  },
];



// 1 answer
// let names = []
// users.forEach(user =>{
// names.push(user.name);
// });
// console.log("names", names);


// 2 answer
// let names = [];
// for (let i = 0; i < users.length; i++) {
// names.push(users[i].name)
// }
// console.log("names", names);


// 3 answer
// const names = users.map((user) => user.name);
// console.log("names", names);

// 2/1 answer

// let names = [];
// for (let i = 0; i < users.length; i++) {
//     if(users[i].isActive){
//         names.push(users[i].name)
//     }
//  }
// console.log("names", names);

// 2/2 answer
// const names = users.filter((user) => user.isActive).map((user) => user.name);
// console.log("names", names);

// 3/1 answer
// users.sort((user1, user2) => user1.age < user2.age ? 1 : -1)
// let names = [];
// for (let i = 0; i < users.length; i++) {
//     if (users[i].isActive) {
//         names.push(users[i].name);
//     }
// }
// console.log(names);

// 3/2 answer
// const names = users
// .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
// .filter((user) => user.isActive)
// .map((user) => user.name);
// console.log(names);
/************************************************************** */


/** ====== what will be logged in first exaample and in second example ? ====== */ 

// let var1;
// console.log(var1); // undefined decleared but not assigned
// console.log(typeof var1); // undefined 

// let var2 = null;
// console.log(var2); // Null means an empty value or a blank value => object.
// console.log(typeof var2); // object 

/** ====== what will be logged in here ? ====== */ 

// 1 question ?
// console.log(foo); // => foo is not defined
// foo = 1; // this is hoisting so foo is not defined earlier the second foo is defined but still shows error

// 2 question

// console.log(foo); // => undefined because it is decleared earlier 
// var foo = 2; // => 

// 3 question
// foo = 3
// console.log(foo); // => 3
// var foo = 2; // => 

/* ======Create a counter function which has increment and getValue functionality */

// const privateCounter = () =>{
//     let count = 0;
//     return {
//         increment: (val = 1) =>{
//             count += val;
//         },
//         getValue: () => {
//             return count;
//         },
//     };
// };
// const counter = privateCounter();
// console.log(counter.getValue());
// counter.increment();
// console.log(counter.getValue());