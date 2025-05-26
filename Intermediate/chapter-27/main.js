// let myObj = {
//     name: "Alice",
//   greet: function (age) {
//     console.log(`Hello, my name is ${this.name} and I am ${age} years old.`);
//   }
// }

// let myObj2 = {
//     name:"Bob"
// }

// // CAll

// // Apply
// myObj.greet.apply(myObj2 , [21])


const person = {
  name: "Charlie",
  introduce: function () {
    console.log(`Hi, I'm ${this.name}!`);
  }
};

const introducePerson = person.introduce.bind(person)

introducePerson()