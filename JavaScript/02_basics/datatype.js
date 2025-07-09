// primitive

// 7 type: String , number , boolean , null , undefined, symbol , BigInt
// const score = 100



// Reference ( nOn primitive)
// Array , object, funtion

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId)

// const bigNumber = 234324342342342343423423434n // now this is bigInt

// const heros = ["shaktiman" , "naagraj", "doga"];

// {
//     name:"shivam",
//     age: 22, // this is object
// }
// let myObj = {
//     name:"shivam",
//     age: 22, // this is object is now stored in variable
// }

// const myFunction = function(){
//     console.log("heeee")
// } // functiion is stored in the myFucntion Variable

// console.log(typeof myFunction) // it return object function

//+++++++++++++++++++++++++++++++++

//Stack (primitive) , Heap (Heap-primitive)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "blabla@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
