// // // array

// const myArr = [0,1,2,3,4,5] // array sharing the shallow copy

// // const myHeros = ["shaktiman","naagraj"]

// // const myArr2 = new Array(2,3,4,2,4)
// // console.log(myArr2[3])

// // // myArr.push(6)
// // // myArr.pop()

// // // myArr.unshift(9)
// // // myArr.shift()
// // // console.log(myArr.includes(8))
// // // console.log(myArr.indexOf(13))

// // const newArr = myArr.join()

// // console.log(myArr)
// // console.log(newArr) // converted intp string

// // slice , splice

// console.log("A " , myArr)

// const myn1 = myArr.slice(1,3)

// console.log(myn1)
// console.log("B ", myArr)

// const myn2 = myArr.splice(1,3)
// console.log(myn1)
// console.log(myn2)

//**************Array 2 *****************/

const marvel_heros = ["thor", "ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Shivam"))
console.log(Array.from("Shivam"))
console.log(Array.from({name:"shivam"})) //interesting in which one is take key or value that why it give empty array

let score1 = 100 
let score2 = 200 
let score3 = 300

console.log(Array.of(score1,score2,score3)) // .of converted object into array

