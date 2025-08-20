// Primitive -> call by value 
// 7 types -> string , number , boolean , null , undefined , symbol , BigInt 

// reference type -> non primitive 
// array , objects , functions 

// js is dynamically typed language  -> const num = 100 -> js itself consider num as a number 

// null means empty not zero 

// use of symbol 
// const id = Symbol('133')
// const anotherid = Symbol('133') 
// console.log(id === anotherid); // return false   


// stack and heap memory 
// stack -> primitive data types and heap consist of non primitive 
// stack we have copy but in heap we have reference 
let myname = "nitesh dayma"
let anothername = myname
anothername="nitesh sharma" 
// therefore if we print myname we get nitesh dayma because we have copy of myname in stack 
console.log(myname);
console.log(anothername);
// now move on to the heap 
let unitone={
    chap1:"algebra",
    chap2:"geometry"
    
}
let unittwo=unitone
unittwo.chap1="complex"
console.log(unitone.chap1);
console.log(unittwo.chap1);
// this will return complex because we have refrence and if we chamge something the whole object changes 







