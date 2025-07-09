// singleton => literal ki tark use krty hai to singleton nhi banta

// Object.create

const mySym = Symbol("key1")

// object literals
const JsUser = {
    name: "Shivam",
    "full name" : "Shivam Kori",
    [mySym]: "mykey1",
    age: 99,
    location:"Jaipur",
    email: "shivam@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])

// console.log(typeof JsUser.name) // by default the key is taken as string

JsUser.email = "shivam@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email ="Shivam@microsof.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("heeee")
}// object ka funtion bana diya and function we use like variable
JsUser.greetingTwo = function(){
    console.log(`heeee,${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())


