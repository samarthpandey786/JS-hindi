let arr = [1,2,3,4,5]

// for(let i = 0 ; i<arr.length ; i++){
//     if(arr.length == 5){
//         // arr.length + 1 
//         arr.push(6)
        
//     }
//     console.log(arr[i])

// }

// console.log(`lenght of arry is = ${arr.length}`)

// nested loop

let i 
for(i = 0 ; i <= 5 ;i++){
    console.log(`outter loop value ${i}`)
    for(let j = 0 ; j <=5; j++){
        console.log(`inner loop value ${j} and outer loop value ${i}`)
    }
}

