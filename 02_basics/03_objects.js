
// another way to create objec
// Object.create // constructore method :


// object litreals 
const symb = Symbol("key1")// to cerate symbol
let user ={
    name : "samarth pandey",
    "full_name" : 'sam',// to user string key using object:
    [symb] : "mykey1",// to use the symbol in objec to refer symbol : // main 
    age : 21,
    isloggedin : false,
    lastlogindays:["mond"]
}// object 

// to acces the object 

// console.log(user.name)
// console.log(user.full_name = "samarthpandey")
// console.log(user["name"]) // better use to access the object using 
// // [brackets] 
// console.log(user[symb])// without using qoute to access the symbol value 


// user.name = "sam";
// Object.freeze(user)// to freeez the object
// user.name = "sama";
// console.log(user)

user.greet = function(){
    console.log("hello user");
}

user.greet_2 = function(){
    console.log(`hello user,${this.name}`);// string interpolation
    // using this to access the key you want :
}
console.log(user.greet())
console.log(user.greet_2());// function execure hua he 
