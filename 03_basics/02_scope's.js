


if(true){
    let a = 10;
    const b = 30 ;
    var c = 50 ;    
}

// console.log(a)// in a local scope so not working
// console.log(b)//  in a local scope so not working
// console.log(c)// working becaue var is not a block scope keyward

function one(){
    const username = "samarth pandey"

    function two(){
        const website = "YouTube"
        // console.log(username)
    }
    // console.log(website)

    two()
}

one()

// parent function or scope cannot access the child scope but the child can access the parent scope:

// 
addone(5);
function addone(num){
    return num + 1
}

// another method to perform function

addtwo(5)
const addtwo = function(num){// hoisting in fucntion of JS when declaring this type of funciton it is called hoisting and you can not access the fucntin before the code of function :
    return num + 2;
}



