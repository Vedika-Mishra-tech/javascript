console.log("hey i am vedika")
//variables- const-cannot be changed, let-can be changed, var-can be changed
//prefer not to use var because of issue in block scope and functional scope
let name = "vedika"
let age = 20
let city = "prayagraj"
let country = "india"
let isStudent = true
let hobbies = "reading"
console.table([name, age, city, country, isStudent, hobbies])
console.log(`my name is ${name} and i am ${age} years old. 
I live in ${city}, ${country}. I am a student: ${isStudent}.
 My hobbies include ${hobbies}.`)