// for of
// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greeting = "hello world!"

for (const greet of greeting) {
    // console.log(`Each char is ${greet}`)
}

//Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

// for (const key in map) {
//     console.log(key)
// }

// console.log(map) // map function give unique value (Key and value pair)

// for (const key of map) { 
//     console.log(key)
// }
for (const [key,value] of map) { 
    // console.log(key, ':-',value)
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// for (const [key,value] of myObject) { // maps are iteratable not object
//     console.log(key,':=',value)
// }