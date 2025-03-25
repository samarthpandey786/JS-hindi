//stack(Primitive) , Heap(non - primitive)

// stack
let myname = "samarthpandey";// work on stack

let myname2 = myname;
myname2 = "kannu";

console.log(myname2);
console.log(myname);


// Heap
let user1 = {
    emial:"samarthpandey@",// work on heap
    upi: 9311250731
}

let user2 = user1

user2.emial = "samathpandey2@"
console.log(user1);
console.log(user2);

// in stack we got copy of orignal value changes in the copy does not effect the orignal value

// in Heap we go the refrence of the orignal value which mean changes in the refrenced variable can change the value of origanl value 