const name = "nitesh"
const repocount = 50 
console.log(`hello my name is ${name} and my repo count is ${repocount}`); // this is right way to code not use cocatenation 
// another way to define 
const myname = new String('niteshdayma') // stores key value data 
console.log(myname[0]) // gives n 
console.log(myname.__proto__); // return object

// how to use object 

console.log(myname.length);
console.log(myname.toUpperCase());
console.log(myname) // it contains lowercase original string never change 
console.log(myname.charAt(2)) // return t

// const start ='B'
// const newstring = new String(start.toUpperCase())
// console.log(newstring);

const newString = myname.substring(0,4)
console.log(newString); // last 4-1 tak jayega 

// const anotherString = myname.slice(0,4) // also give nite but diff is that we can give negative number in this 
// console.log(anotherString); 
const anotherString = myname.slice(-6,4)
console.log(anotherString);


// trim and repalce 
const newStringone = "   nitesh   "
console.log(newStringone); // to renove space trim
console.log(newStringone.trim());


const url = "https://nitesh.com/hitesh%20dayma"

console.log(url.replace('%20','-')) // %20 ko - se repace karna chata hoon 
// console.log(url);

// split the string in array 
const splitString = "nitesh-dayma-is-a-good-boy"
console.log(splitString.split('-'))

