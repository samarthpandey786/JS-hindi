// const tinder =  new object () this is a singleton object
const tinder = {} //non singleton object

tinder.id = "123"
tinder.name = 'sam'
tinder.isloggedin = false

// console.log(tinder)
// nesting object can be done 
const regularuser = {
    emial:"some@gamil.com",
    fulName : {
        userfullname:{
            fiestname: "samarth",
            lastname: "pandey"
        }
    }
}

// console.log(regularuser.fulName?.userfullname.fiestname);// to access the nested object in JS (?) is used to if it is available or not :

// merging of object:

const boj1 = {
    1 : "a",
    2 : "b"
}
const boj2 = {
    3 : 'c',
    4 : 'd'
}
const boj3 = {
    5 : 'e',
    6 : 'f'
}

// const boj4 = {...boj1 , ...boj2}// to merge object correctly:

// const obj4 = Object.assign({} ,boj1 , boj2 , boj3)// best practice to do :
// console.log(obj4);

// value comes from database onjecti inside the array

const user2 =[
    {
        id: 1,
        emial : "samop@12.com",
    },
    {
        id: 2,
        emial : "samop@17.com",
    },
    {
        id: 3,
        emial : "samop@126.com",
    },
]

console.log(user2)