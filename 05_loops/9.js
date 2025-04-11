const arr = [1,2,3]

// const mytotal = arr.reduce(// must watch dekhle :
//     function(acc,currval) {
//     console.log(`acc : ${acc} and curval: ${currval}`)
//     return acc + currval
// },3
// )
let initval = 0;
const mytotal = arr.reduce((acc,curval) => {
    console.log(`acc : ${acc} and curval: ${curval}`)
    return acc + curval 
},initval)
console.log(mytotal)

const shoppingcart = [
    {
        itemname: "js course",
        price : 2999
    },
    {
        itemname: "Python course",
        price : 999
    },
    {
        itemname: "mobile dev course",
        price : 2999
    },
    {
        itemname: "data science course",
        price : 31999
    },
]

const total = shoppingcart.reduce((acc , item) => {
    return acc + item.price
},0)

console.log(`total price of your courses are =${total}`)