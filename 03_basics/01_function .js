function Myname(){
    console.log("samarth pandey");
}
// Myname is refrence 
// Myname() is executation 
//  Myname()

function add(number1 , number2){ // these are parameter
  console.log( number1 + number2);
  

}

function add(number1 , number2){ // these are parameter
    // let result = number1 + number2
    // return result
    return number1 + number2
  }

const result = add(12,12) // value pass karna : arguments:


// console.log( result )

function loginusermessage(name = "sam" ){// defalut value 
    if(name == undefined){
        console.log("define the user:")
        
    }
    else{
        return `${name} just loged in `
    }
   
}

// console.log(loginusermessage("samarht pandey"))// over worte the value to samart on sam

function calculateCartPrice(...num1){// (...)is consider as spread and rest operator to add the multiple value in the form of array
    return num1
}

console.log(calculateCartPrice(200,500,600,5454))

const user ={
    usernmae : "samrth pandey",
    price : 199
}

function handleObject(anyobj){
    console.log(`user is ${anyobj.usernmae} and price is ${anyobj.price}`);
    
}

handleObject(user)

handleObject({
    usernmae : "sam" ,
    price : 900
})


let arr = [200,400,600,200]

function returnsecondvalue(get_array){
    return get_array[2]
}

console.log(returnsecondvalue(arr))

console.log(returnsecondvalue([20,50,60,70,80]))

