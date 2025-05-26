// "use strict";

// // *Where are you using , How you are using this keyword

// // console.log("Welcome to chapter 25");

// // *THIS KEYWORD

// // console.log(this) //global object

// // *this keyword inside the function

// // function greet(){
// //     console.log(this)
// // }

// // greet()

// // this keyword substitution

// // *this keyword in object

// // let person1 = {
// //     name:"Suraj",
// //     printName:function(){
// //         console.log(this.name)
// //     }
// // }

// // person1.printName()

// // let person2 = {
// //     name:"Karan"
// // }

// // person1.printName.call(person2)

// // Call , Bind , Apply ()

// // function sayMyName(){
// //     console.log(this)
// // }

// // sayMyName()

// // Arrow function does not have this keyword
// // const Hello = ()=>{
// //     console.log(this)
// // }

// // Hello()

// const user = {
//   name: "Alice",
//   greet: () => {
//     const x = () => {
//       console.log(this);
//     };
//     x();
//   },
// };

// user.greet();

// // Lexically enclosed context

// console.log(this)
// const greet = () => {
// }

// Dom