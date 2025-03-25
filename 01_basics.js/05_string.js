const name = 'samath pandey'
const repo = 50

console.log(name+" and the count of " + repo);// out dated 


//  THis is string Interpolatin in js 
// wher we use backticks => ( ` ` ) and the this operator => (${variable}) 
console.log(`Hello my name is ${name} and my reop count is ${repo}`)


//anothr way of declare string using objects
const gamename = new String ("hitesh");

// string is object using key value pare with indeces:

console.log(gamename[0]);
console.log(gamename.__proto__);

//Method in string
console.log(gamename.toUpperCase())

const newstring = gamename .substring(0 , 4)// to to divide the sub string: no negative value can pass
console.log(newstring);

console.log(gamename.slice(-8,4)) //

const newstring1 = "  samarthpandey  ";

console.log(newstring1)
console.log(newstring1.trim())

console.log(newstring1.replace('sam' , 'mas'))

//convert in array
console.log(newstring1.split)