const user = {
    username: "shivam",
    price: 990,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`) // this keyword is used for current contest // current contest ko reffer krta h
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this) // empty object bc it global

// function chai() {
//     let username = "shivam"
//     console.log(this.username) 
// }
// chai()

// const chai = () => {
//     let username = "shivam"
//     console.log(this)
// }
// chai()

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => { // when use curly barces then must use the return
//      return num1 + num2
// }
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "shivam"})

console.log(addTwo(4,2))