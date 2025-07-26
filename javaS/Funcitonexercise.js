// Create a calculator using functions in that calculator there should be +, -, *, / 
// The calculator takes two inputs and evaluate's that

// Create a function that checks the number is odd or even


function add(a,b){
    return a + b
} 

function sub(a,b){
    return a - b
}

function mul(a,b){
    return a * b
}

function div(a,b){
    if(b==0){
        return "Denominator cannot be zero"
    }
    else{
        return a / b
    }
}

let num1 = 2;
let num2 = 4; 


console.log(add(num1,num2), sub(num1,num2), mul(num1,num2), div(num1,num2))

// console.log()
// console.log()
// console.log()
// console.log(add(num1,num2))

// function add(a,b){
//     return a + b
// }