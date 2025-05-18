let myObj = {
    name: "John",
    age: 30,
    isAdmin: true,
    isLiker: false,
    address:{
        city: "Noida",
        nearBy: "Metro Station"
    }
}

// Object -----> JSON ( JSON.stringify())
let strObj = JSON.stringify(myObj);
console.log(typeof strObj);



// JSON ----> Object ( JSON.parse())
let MyJSON = `[{
    "name":"Suraj",
    "age":21,
    "isMarried":null,
    "address":{
        "city":"Noida",
        "nearBy":"Metro Station"
    },
    "hobbies":["Gym" , "Walking" , "Coffee"]
  
},
{
    "name":"Rohit",
    "age":22,
    "isMarried":null,
    "address":{
        "city":"Noida",
        "nearBy":"Metro Station"
    },
    "hobbies":["Gym" , "Walking" , "Coffee"]
}
]`

let myNewObj = JSON.parse(MyJSON);
console.log(typeof myNewObj);