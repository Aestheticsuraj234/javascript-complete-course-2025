// *Arrow Function

// const Greet = (username , name) => `Hello world ${username} and ${name}`


// console.log(Greet("codesnippet","Suraj"))


// Destructuring ( Array , Object)

// *Array
// let arr1 = ["Hello" , "World" , "Username"]

// const [firtvalue , secondValue , thirdValue] = arr1;

// console.log(firtvalue , secondValue , thirdValue)


// *Object


// let myObj = {name:"suraj" , age:21}

// let {name , age} = myObj;

// console.log(name , age)


// function greet(name = "Guest") {
//   console.log(`Hello, ${name}`);
// }
// greet('Suraj'); // Hello, Guest


// Rest and Spread Operators (...)


// *Rest Operator ( collect the values)

// function Add(a,b , c , d){
//     return a+b + c + d
// }

// // 1000 numbers (123,23434,325,4235,34645....1000)
// console.log(Add(12,34 , 56 , 89));

// function Add(...numbers){
//     return numbers.reduce((a, b) => a + b);
// }

// let res = Add(12321,4,45,566,76,7)

// console.log(res)

// *Spread Operator
// let myObj = {name:"Suraj" , age:21 , isCoder:true} 

// let myNewObj = {...myObj , newInfo:"Hello"}


// console.log(myNewObj)

// const arr1 = [1, 2];
// const arr2 = [...arr1, 3, 4];

// // Shallow Copy , Deep Copy

// console.log(arr2)

// *Map and Set

// const myMap = new Map()

// myMap.set("name" , "suraj")
// myMap.set("age" , 21)

// console.log(myMap)

// let myMap = new Map();
// let anotherMap = new Map([
//     ['name', 'GFG'],
//     ['age', 30],
//     ['city', 'Noida']
// ]);
// console.log(anotherMap);


const set = new Set([1, 2, 2, 3 , 4  , 5 , 6 , 4 , 5, 3]);
console.log(set); // Set {1, 2, 3}