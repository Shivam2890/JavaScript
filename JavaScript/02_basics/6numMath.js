// const score = 400 
// console.log(score)

// const balance = new Number(100)
// console.log(balance) // it specificaly cast Number:100

// console.log(balance.toString().length)
// console.log(balance.toFixed(2)) // after the decimal number (precision number)

// const otherNumber = 2323.5344

// console.log(otherNumber.toPrecision(3)) // 2.32e+3 yeh preicison hai baki e mein deta hu

// const hundreds = 1000000

// console.log(hundreds.toLocaleString("en-IN")) // for commas 

// **************Math************

// console.log(Math);
// console.log(Math.abs(-4))
// console.log(Math.round(52.4))
// console.log(Math.ceil(4.2)) // chosing top value
// console.log(Math.floor(4.7 )) // chosing lower value
// console.log(Math.min(5,3,42,5))
// console.log(Math.max(4.,5,5,2435,3))

console.log(Math.random()) // the value from 0 to 1
console.log((Math.random()*10) +1)// adding 1 for avoiding 0 thus the min value is 1 not zero
console.log(Math.floor(Math.random()*10) +1) // floor round off to lowest value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
