// singleton or with the help of constructor

// const tinderUser = new Object() // that is a singleton object
const tinderUser = {} // this is non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "shivam",
            lastname: "kori" // nesting object
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1,obj2) // the all the source object (obj1,obj2,etc,) are stored in the targeted object which is {}
// const obj3 = Object.assign( obj1,obj2) // otherwise all the object array are stored in the first object which is obj1

const obj3 = {...obj1,...obj2} // speard operator
// console.log(obj3)

const users = [ //form database value (array of object)
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser)

// console.log(Object.values(tinderUser)) //both we can access keys(.keys) values(.values) from the object 
// console.log(Object.entries(tinderUser)) // key and values are stored in array and in array

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // for checking the property that is existing is or not


// *************

const course = {
    coursename: "js in hindi",
    price: "000",
    courseInstructor: "hitest"
}

// course.courseInstructor // if you have access all the value the ?? them...

const {courseInstructor: instructor /*for changing the name (that is destructure)*/} = course //course se value abstract karni hai aur courseInstructor value abstract kar rhe hai 

console.log(instructor) // then you can directly right courseInstructor instead of course.courseInstructor

