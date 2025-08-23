// Arrays 
const myarr= [ 1,2,3,4,5,'nitesh']
console.log(myarr[5]); 

// Array Method 
// myarr.push(6)
// myarr.push(7);
// console.log(myarr);
// myarr.pop()
// console.log(myarr);

// to remove and add element in the beg of array 
// myarr.unshift(9)
// // 9,1,2,3,4,5,'nitesh'
// // myarr.shift();
// console.log(myarr);

// console.log(myarr.includes(3))
// console.log(myarr.indexOf(5));

// const newarr = myarr.join() // add all the element to a string 
// console.log(myarr);
// console.log(typeof newarr);


// slice , splice 

console.log("A",myarr);
const myn1 = myarr.slice(1,3)
console.log(myn1);
console.log("b",myarr);

const myn2 = myarr.splice(1,3)
console.log("c",myarr);
console.log(myn2);

// diff is that splice manipulates the original array and it also includes the range 


