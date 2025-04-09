const userEmail = "h@.ai"

if(userEmail){
    console.log("got the sure emial")
}
else{
    console.log("not the user emial")
}

// falsy values 
// false, 0  , -0 , BigInt 0n, "" ,  null , undefined , NaN

// Truthy values
// "0" , "false" , " " , [] , {} , function(){}

if(userEmail.length === 0){
    console.log("Arr is empty:"); 
}

