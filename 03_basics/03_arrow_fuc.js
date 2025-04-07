// arrow function

const user = {
    username : "samarth",
    prince : 999,

    welcome : function(){
        console.log(`${this.username} welcome to website`)
        console.log(this);
        
    }
}

// this is used to refer current context/ values  kiske baare me baat hori he only work on object:
user.welcome()
user.username = "sam"
user.welcome()

// console.log(this)// refreing the global constext so returning empty object:

function chai(){
    console.log(this)
}

chai()

const number = (num , num1) => {// with the currly bracces we have to use return (explicit return )
    return num + num1
}
number() 

const chara = (num1 ,num2) => num1 + num2 // implicit return function :

const num = (n1 , n2 ) => (n1 + n2)// in this type we don't have to user return well use in react

