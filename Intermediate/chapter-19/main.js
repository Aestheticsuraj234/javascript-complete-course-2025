// setTimeout(()=>{
//     console.log("Hello")
// },2000)


// function greet(username){
//     console.log(`Hello ${username}`)
// }

// setTimeout(greet , 2000 , "Alice")

// let id = setTimeout(() => console.log("Will not run"), 2000);
// console.log(id)
// clearTimeout(id);

// let count = 0;
// let id = setInterval(() => {
//   console.log(`Count: ${++count}`);
//   if (count === 5) clearInterval(id);
// }, 1000);


console.log("Start");
setTimeout(() => console.log("Timer"), 0); // Will still run after the current call stack
console.log("End");