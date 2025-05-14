// // const myNewObj = new Object()

// // myNewObj.name  = "Suraj";
// // myNewObj.location = "Noida";
// // myNewObj.biecepsSize = 10;

// // console.log(myNewObj)

// // const proto = { greet() { console.log("Hi"); } };
// // const obj = Object.create(proto);
// // obj.greet(); // Hi

// // let myPerson = {
// //     name:"Suraj",
// //     age:21,
// //     isInCollege:true,
// //     address:{
// //         city:"Noida",
// //         nearBy:"Metro Station"
// //     },
// //     hobbies:["Gym" , "Walking" , "Coffee"],
// //     greet:function(){
// //         console.log("Hello world")
// //     }
// // }

// // myPerson.diet = ["Meggie" , "Fast-food" , "momos" , "noodles" , "pizza"]

// // console.log(myPerson.greet())

// // // console.log(myPerson.address.nearBy) this is the one way of access object

// // console.log(myPerson["hobbies"])


const TeddyBear = (function () {
  let onlyOneBear;

  function createTeddy() {
    return { name: "Fluffy" };
  }

  return {
    getBear: function () {
      if (!onlyOneBear) {
        onlyOneBear = createTeddy(); // make it once
      }
      return onlyOneBear; // always return the same one
    }
  };
})();

const myBear1 = TeddyBear.getBear();
const myBear2 = TeddyBear.getBear();

console.log(myBear1); // true ✅ It's the same teddy bear!
