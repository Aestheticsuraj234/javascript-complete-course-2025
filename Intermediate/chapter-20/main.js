// const myPromise = new Promise()

// const myPromise = new Promise(()=>{
//     console.log("Hello world")
// })

// // console.log(myPromise)

// Creating Promises
// const myPromise = new Promise((resolve , reject)=>{
//     // *Resolve
//     // *Reject
// })

// // Consuming promises

// myPromise.then(()=>{}).catch(()=>{}).finally(()=>{})

// const myPromise = new Promise((resolve, reject) => {
//   //   resolve({name:"Suraj" , age:21,isProgrammer:true});
//   reject({ error: "Something went wrong" });
// });

// // .then ----> resolve()

// // .catch ---> reject()

// // .finally ---> humesha execute hoga

// myPromise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(()=>{
//     console.log("Always run🔥")
//   })


// promise if the age > 18 resolve other wise reject

const agePromise = new Promise((resolve , reject)=>{
    let age = 10;
    if(age >=18){
        resolve("Yes You can do whatever u want")
    }
    else{
        reject("No! Beta you cannot do without my permission")
    }
})


agePromise.then((value)=>{
    console.log(value)
}).catch((err)=>{
    console.error(err)
}).finally(()=>{
    console.log("Always run")
})