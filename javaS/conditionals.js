// if & else  
// if >> tab execute hota hai jab condition satisfies ya True ho 
// else >> tab execute hota hai jab condition False ho "or" if statement does not satifies.

// if(false){ // true
//     console.log("bhai bahut padhe likhe lagte ho tum");
// }
// else{
//     console.log("anpadh hai kya ?");
// }


// if else-if and else
// 10 bache hai 1 | 2 | 3 | 
// 10 me se jin bacho ka score 70 > 1st category me daalo  
// 10 me se jin bacho ka score 50 > lekin 70 se kam hai 2nd category me daalo  
// 10 me se jin bacho ka score 50 <  kam hai 3rd category me daalo  

// let bacha1 = 83.33
// let bacha2 = 67
// let bacha3 = 45

// // first bacha

// if(bacha3 > 70){
//     console.log("1st category");
// }

// else if(bacha3 < 70 && bacha3 >= 50){
//     console.log("2nd category");
// }

// else{
//     console.log("3rd Category");
// }



// switch statements

num = "Mrinal";

switch (num) {
    case "Sachin":
        console.log("guess right 1")
        break;

    case "Kajal": 
        console.log("guess right 2");
        break;

    case "Shamshad": 
        console.log("guess right 3");
        break; 

    case "Mrinal": 
        console.log("guess right 4");
        break;

    case "Ajmat":
        console.log("guess right 5");
        break

    case "Suresh":
        console.log("guess correct 6");
        
        
    default:
        break;
}