let myPerson = {
    name:"Suraj",
    age:21,
    isInCollege:true,
    address:{
        city:"Noida",
        nearBy:"Metro Station"
    },
    hobbies:["Gym" , "Walking" , "Coffee"],
    greet:function(){
        console.log("Hello world")
    }
}

// *Object.Keys

// console.log(Object.keys(myPerson))


// *Object.Values

// console.log(Object.values(myPerson))

// *Object.entries

console.log(Object.entries(myPerson))


// *Object.assign

// let a  = {x:1}

// let b = {y:2}

// let c = Object.assign({} , a , b)

// console.log(c)


// *Object.freeze
// const settings = { theme: "dark" };
// Object.freeze(settings);

// settings.theme = "light"; // ❌ Won’t work
// console.log(settings.theme); // Output: "dark"

const user = {name:"JhonDoe"}

console.log(Object.hasOwn(user , "age"))