//Immediately Invoked Funtion Expression (IIFE)

(function chai(){  //(named IIFE)
    console.log(`DB connected`)
})(); // ; \for contest end


// ()() // 1:defination of function 2:execution

// ( function aurcode() {
//     console.log(`DB connected two`)
// })();
( (name) => { // name abstract (simple IIFE)
    console.log(`DB connected two ${name}` /**variable */)
})('shivam') // passing the name (see as a function)
