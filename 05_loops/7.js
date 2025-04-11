const myNums = [1,2,4,5,6,7,8,9,10]

// const newnums = myNums.map((num) => {
//    return num + 10
// })
// console.log(newnums)
// let nums = [];
// const newnums = myNums.forEach((num) => {
//    return nums.push(num+10)
// })

// console.log(nums)

const newNums = myNums.map((num) =>{
    return num * 10// pass the result in the second map it is called chainging 
})
.map((num) => {
    return num + 1 
})
.filter((num) => {
    return num >= 30
})
console.log(newNums)
