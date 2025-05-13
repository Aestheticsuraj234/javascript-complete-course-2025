// let Num = [90,12,1,0,23423,1234];

// *join

// let data = Num.join("+")
// console.log(data)

// *indexOf
// let res = Num.indexOf(0.1)

// console.log(res)

// * includes

// let Num2 = [12,12,321,4,4,5,56,6]

// let transport = ["car" , "bike" , "train" , "airplane"];

// const data = transport.includes("cycle")

// console.log(data)

// *Concat
// let num3 = Num.concat(Num2)

// console.log(num3)

// *Slice Method

// let data = Num.slice(0,3)

// console.log(data)

// Num.reverse()

// console.log(Num)

// *sort
// Num.sort()

// console.log(Num)

// * splice (remove , replace , insert)

// !. Remove

// Num.splice(0 , 3)

// ?. Replace elements

// Num.splice(0 , 2 , 89,90)
// console.log(Num)

// *Adding Elements

// Num.splice(0 , 0 , 12,13)
// console.log(Num)

// Num.splice(3)

//  console.log(Num)
// console.log(Num)
// * unshift

// Num.unshift(12,34,5,6,7)
// console.log(Num)

// * Shift
// let res = Num.shift()

// console.log(res)
// console.log(Num)

// * Pop

// let res = Num.pop()

// console.log(res)
// console.log(Num)

// *. Push

// Num.push(8,"Suraj" , true)

// * forEach -

// let num = [1,2,3,4,5,6,7,8,9,10]

// num.forEach((value , index , array)=>{
//    console.log(`2 x ${index + 1} = ${value * 2}`)
// })

// *map method
// - new array return

//  let newArray = num.map((value , index , array)=>{
//     return value * 2
//  })

//  console.log(newArray)

// *filter
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//     let evenArray = num.filter((value , index , array)=>{
//         return value % 2 === 0;
//     })
// console.log(evenArray)

// *reduce

// let total = price.reduce((accumulator ,currentValue , index , array)=>{
//      return accumulator + currentValue;
// } , 0)

// console.log(total)

// *find
// let price = [1, 2, 3, 4, 5];

// const res = price.find((value)=>{
//     return value > 2
// })

// console.log(res)



// *some

// let fruits = [1,2,3,4,5,6,7,8,90]

// let res = fruits.some((value )=>{
//     return value >=100
// })

// console.log(res)

// *every

let nums = [23,45,67,8,9,0,0]

const res = nums.every((val)=>{
    return val >= 0
})

console.log(res)