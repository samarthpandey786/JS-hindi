// how the code is execute in JS

// Javascript Execuation context:

//{} -> global EC(this) 


// globak execuation context 
// fucntion execuation context

// {JS code} -> memory creation phase 
//   ""      -> Execuation phase

let val = 10
let val2 = 4

function addNum(num1,num2){
    let total = num1 + num2 
    return total
}

let result = addNum(val , val2)
let result2 = addNum(10,4)

// step 1 = global Execuation (allocate in this hona hi hona he)

// step 2 = memory phase (gather all the variable and set them as undefiend
    // val   -> undefined
    // val 2 -> undefined
    //addnum -> defination 
    //result1 -> undefined
    // result2 -> undefined
//)

// sted 3 = Execuation phase ( assgnin the value in the variable 
    // val<-10
    //val2<-5
    //addNum-> [new variable environment + thread]
//)

// call stack 