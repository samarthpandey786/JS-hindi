// Immediatley Invoke Function Expressins(IIFE)

// works in every type of funciton :

(function chat(){// Named IFFE
    console.log("DB connected")
})();

(()=>{
    console.log(
        "DB connected 2"
    )
})();

((name)=>{
    console.log(
        `DB connected 3 of name ${name}`
    )
})("MySql");

// we use iffe to prevent emmideate run the function we want and prevent it from the global polutions

// we have to terminate the IFFE to provide it the stopage of the function :