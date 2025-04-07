// if 
if(true){

}

// < , > , <= , >= , == , ===(also check the type of data ) , !==(in negative format)

// if and else
// let temp = 34;
// if (temp>=30){
//     console.log(true);
// }
// else{
//     console.log(false)
// }

// const score = 200
// if (score > 100){
//     const power = "fly"
//     console.log(`user power ${power}`)
// }

const bal = 1000;
// implicit scope maan leta he scope define hogaya he
// if(bal>500) console.log("test");


// nesting in if and else

if (bal<500){
    console.log("less then 500");

}else if(bal < 750){
    console.log("less then 750");
}else if(bal < 900){
    console.log("less then 900");
}else{
    console.log("less then 1200")
}

const userLoggedIn = true
const debitCard = true 

if(userLoggedIn && debitCard){ // and 
    console.log("all the user")
}

if(userLoggedIn || debitCard){ // or
    console.log("user")
}


