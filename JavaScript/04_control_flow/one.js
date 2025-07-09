// // if
// const isUserloggedIn = true
// const temperature = 43
// if (temperature === 43) {
//     console.log("less then 50")
// } else {
//     console.log("temperature is greater then 50")
// }
// console.log("execute")

// const score = 200
 
// if (score>100) {
//     const power = "fly"
//     console.log(`user power : ${power}`)
// }

// console.log(`userp power: ${power}`)

const balance = 1000

// if (balance > 500) console.log("test"); //emplycit scope

// if (balance > 500) {
//     console.log("less then 600");
    
// }else if (balance < 750) {
//     console.log("less then 750")
// }else if (balance<900) {
//     console.log("less then 900");
    
// } else {
//     console.log("less then 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("allow to buy course")
}

if (loggedInFromGoogle || loggedInFromEmail ) {
    console.log("user logged in")
}