// const name = "shivam"
// const repoCount = 50

// console.log(name+repoCount + " value")

// console.log(`hello my name is ${name} and my repoCount is ${repoCount}`) //backticks string interpolation make a placeholder

const gameName = new String('shivam-k')

console.log(gameName[0])

console.log(gameName.__proto__) // checking prototype

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf('i'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-4,6)
console.log(anotherString)

const newString1 = "    shivam  "
console.log(newString1)
console.log(newString1.trim())

const url = "https://shivam.com/shivam%20kori" //browser doest understand spaced 

console.log(url.replace('%20', '-'))

console.log(url.includes('shivam')) // true

console.log(gameName.split('-')) // split bases on '-'