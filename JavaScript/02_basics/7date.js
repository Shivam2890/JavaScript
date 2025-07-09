// Dates

let myDate = new Date()
console.log(myDate.toString())

console.log(typeof myDate)

// let myCreatedDate = new Date(2024,0,23)
// console.log(myCreatedDate.toDateString()) // month start from 0 indexing 0 for jan


let myCreatedDate = new Date("01-13-2032")
// console.log(myCreatedDate.toLocaleString())
let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getDay())
console.log(newDate.getMonth() + 1)

// `${newDate.getDay()} and the time`

newDate.toLocaleDateString('default',{
    weekday:"long"
})

