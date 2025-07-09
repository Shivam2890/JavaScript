// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async tast 
//         //DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async tast is complete')
//         resolve() // then() connected to resolve
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed")
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async tast 2")
//         resolve() //after completion of the function
//     }, 1000)
// }).then(function(){
//     console.log("Async 2 resloved")
// })

// const promiseThree = new Promise(function(resloved, reject){
//     setTimeout(function(){
//         resloved({username:"chai",email:"chai@example.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })

// const promiseFour = new promise(function(reslove,reject){
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             reslove({username:"shivam",password:"123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000);
// })

// const username = promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username
// })
// .then((user) => {
//     console.log(username)
// })
// .catch(function(error){
//     console.log(error)
// }).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function (reslove, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            reslove({ username: "javascript", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

async function consumePromiseFive () {
    const response = await promiseFive
    console.log(response)
}

consumePromiseFive()

async function getAllUsers(){
    const response = await fetch('')
    const data = response.json()
    console.log(data)
}