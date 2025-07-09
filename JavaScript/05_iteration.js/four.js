const myObject = {
    js:'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple" 
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`) // myObject[key] is for values pair
}

const programming = ['js','rb','py','java','cpp']

for (const key in programming) {
    console.log(key) // it key the array key like 0 1 2 3 4 
}