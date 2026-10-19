"use strict";// treat all JS code as newer version
//alert(3 + 3) //we are using nodejs, not browser
console.log(3+3);//code readability it should be high
console.log("vedika mishra");
//Ecma script is standard to write js code
//documentation- tc39, mdn.
let name = "vedika" //string
let age = 20 //integer
let city = "prayagraj" //string
let country = "india" //string
let isStudent = true //boolean
let percentage = 90.5 //float
//number => 2 to power 53
//bigint
//string => ""
//boolean => true/false
//null => empty value,standalone value
//undefined => value is not assigned
//symbol => unique value
//object => collection of key value pair
console.log(typeof name);
console.log(typeof age);
console.log(typeof city);
console.log(typeof country);
console.log(typeof isStudent);
console.log(typeof percentage);
console.log(typeof null);
console.log(typeof undefined);
console.table([name, age, city, country, isStudent, percentage, null, undefined])
// data types- primitives and non-primitives
//primitives => 7 types:
// 1.number
//2.string
//3.boolean
//4.null
//5.undefined
//6.symbol
//7.bigint

const score = 100
const scorevalue = 100.3

const isloggedIn = true
const outsideTemp = null
let userEmail; //undefined

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId);

const bigNumber = 3454637865n// type -undefined

//reference (non-primitives) => 3 types:
// 1.object
// 2.array
// 3.function

const heros = ["shaktiman", "naagraj", "doga"] //array

let user = { // object
    name: "vedika",
    age: 20,
    isStudent: true
}

const myFunction = function() { //function
    console.log("hello world");
}//function is a block of code which performs a specific task
console.log(typeof heros);
console.log(typeof user);
console.log(typeof myFunction);

// +++++++++++++++++++++++++++++++++++++++++++++++

// stack-> used in primitive.
// heap memory-> used in non-primitives

let myYoutubename = "vedika mishra"
let anothername = myYoutubename
anothername = "vedika mishra 2.0"
console.log(myYoutubename);
console.log(anothername);

let userone = {
    email:"user@example.com",
    upiId:"user@upi"
}

let usertwo = userone