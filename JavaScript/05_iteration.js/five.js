const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){ // the callbackfn does't have the name
//     console.log(val)
// })

// coding.forEach( (val) => { //by arrow function
//     console.log(val)
// })

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe) // by passing the function refrence

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr)
// })

//[{},{}<{}] object in array
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})