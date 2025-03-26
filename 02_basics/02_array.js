const marvel = ["Hulk" , 
    "thor" , "spiderman"
]

const dc = ['supermam' , 'flash' , 
    'batman'
]

// marvel.push(dc);// problem array inside array: it merges the array but the second array inside like this => [ 'Hulk', 'thor', 'spiderman', [ 'supermam', 'flash', 'batman' ] ]
console.log(marvel)

// let sam = prompt("enter the number boe :");
// let cam = prompt("enter the number boe :");
// let tam = prompt("enter the number boe :");

// const arr = [sam , tam , cam ];

// console.log(arr); // side quest :

let arr = marvel.concat(dc); // concat return us the new array in JS
//[ 'Hulk', 'thor', 'spiderman', 'supermam', 'flash', 'batman' ]

console.log(arr);

// spread another method to 

// const arr2 = [...marvel ,...dc] add muliple values 

// console.log(arr2);
//[ 'Hulk', 'thor', 'spiderman', 'supermam', 'flash', 'batman' ]

// to solve these type of situtaions we use => flat
const arr3 = [1,2,3,[4,5,6] , 7,[6,7,[4,5]]]

const real = arr3.flat(Infinity)// falt or concatinate the sub array in a array  we can asign the range but if you dont know the depth just use infinity or other funciton 

console.log(real)


console.log(Array.isArray("hitesh"))// to check the arry or not :

// to conver it we use => from 

console.log(Array.from("hitesh"));
// case 
console.log(Array.from({name : "samarth"}));// interesting: give us empty array





 