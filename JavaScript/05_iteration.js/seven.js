const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNumss = myNumbers.map((nums) => { return nums+10})

const newNumss = myNumbers //chaining
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter( (num) => num >= 40) 

console.log(newNumss)