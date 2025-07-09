function one(){
    const username = "shivma"

    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}

// one()
if (true) {
    const username = "shivam"
    if(username === "shivam") {
        const website = " Youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

// +++++++++ interesting +++++++++

addone(3) // using before decalaration
function addone(num){
    return num + 1
}

addTwo (5) // giving error
const addTwo = function (num){ //expression // it cant be used before decalaration this is hosting
    return num + 2
}
