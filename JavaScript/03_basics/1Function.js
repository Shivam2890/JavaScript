// function addTwoNumbers(number1,number2) {
//     console.log(number1+number2)
// }
function addTwoNumbers(number1,number2) {
    
    // let result = number1 + number2
    // return result
    return number1 + number2
    
}

const result = addTwoNumbers(3,5)

// console.log("Result", result)

function loginUserMessage(username = "sam") { // we never go one first block bc the min value is sam and if it not(pass the value) then it will be override
    if (!username) { // username === undefined
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Shivam"))
// console.log(loginUserMessage("shivam")) // passing the value

function calculateCartPrice(val1,val2, ...num1/*first 2 value are in val1 & val2 and the rest are in num1 thats by it called rest operator */){ // rest or speard operator
    return num1
}

// console.log(calculateCartPrice(200,330,942,23))

const user = {
    username: "shivma",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({ // we can direct pass the object
    username: "sam",
    price: 300
})

const myNewArray = [202,339,133,749]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,500,10000]))