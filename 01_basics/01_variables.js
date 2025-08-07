const accountID=14467;
let accountemail="xys@gmail.com"
var accountpass="12345"

accountcity = "jaipur" // it is also possible in js 

// console.table([accountID,accountemail,accountpass,accountcity]) to show all data in a particular table 
// const never be change once it declared 
// accountID=34567
// console.log(accountID);  this is not possible 

accountemail= "xxx@gmail.com"
accountpass= "34456"
accountcity="banglore"

console.table([accountID,accountemail,accountpass,accountcity])
// this thing is possible 
// prefer not to use var because of issue in block scope and functional scope 
 
let accountstate; // only declare will give us a undefined value 
console.table([accountID,accountemail,accountpass,accountcity,accountstate])



