const name = "vedika" //string
const age = 20 //integer
const city = "prayagraj" //string
//console.log(name + " is " + age + " years old. She lives in " + city + ".")
//string interpolation
console.log(`my name is ${name} 
    and i am ${age} years old. 
    I live in ${city}.`)
    const gameName = new String("cricket-game")
    console.log(gameName[0]);
    console.log(gameName.__proto__);
    console.log(gameName.length);
    console.log(gameName.toUpperCase());
    console.log(gameName.charAt(2));
    console.log(gameName.indexOf("c"));

const newString = gameName.substring(0, 7)
console.log(newString);

const newString2 = gameName.slice(0, 7)
console.log(newString2);

const newString3 = gameName.slice(-4, -1)
console.log(newString3);

const newStringOne = " cricket "
console.log(newStringOne.trim());

const url = "https://www.google.com/search?q=javascript"
console.log(url.replace("javascript", "python"));
console.log(url.includes("javascript"));
console.log(url.startsWith("https"));
console.log(url.endsWith("python"));
console.log(url.split("/"));