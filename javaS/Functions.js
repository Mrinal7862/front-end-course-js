// function_keyword function_Name(){
    // instruction
// }

// function palakPaneer(){
//     console.log("palak ko saaf karke boil kare");
//     console.log("Step 2-> palak to mixer me mix karde");
//     console.log("Step 3-> mixer ginger, garlic aur green chilli ko bhi pees le.");
//     console.log("Step 4-> garam kadhai me tel daal , phir thoda sa tez patta, elaichi, ginger garlic ka paste daal ke dheemi aanch pe bhune.");
//     console.log("Step 5-> pisaa hua palak daale, aur kuch masale daale aur kuch der bhun ne de.");
//     console.log("Step 6-> paneer add kare, bhunne de usko bhi.");
//     console.log("Step 7-> AApka palak paneer taiyar hai.");

// }

// palakPaneer()

// In JavaScript, functions are fundamental building blocks of programs that encapsulate a block of code designed to perform a specific task or calculate a value. They are reusable units of code that can be called upon whenever needed, promoting code organization, reusability, and maintainability.

// Functions are typically defined using the function keyword, followed by a name (optional for anonymous functions), parentheses () which may contain parameters, and curly braces {} enclosing the function's code block.

// function Name(){
//     return "Mrinal";
// }

// function Name2(){
//     console.log("Mrinal")
// }

// // console.log(Name())
// console.log(Name2())

// Functions can optionally return a value using the return keyword. If no return statement is present or if return; is used without a value, the function implicitly returns undefined.

// function Kajal(){
//     return 10;
// }

// console.log(Kajal())

// Parameters and Arguments:
// Functions can accept input values called parameters, specified within the parentheses during definition. When the function is called, actual values called arguments are passed to these parameters.

// let parameter = user Defined

// // function greetings(parameters){
//     return `Hello ${parameters}`;
// }



// console.log(greetings(2));




// function greetings(parameters = value){ 
//     return "Hello, ", parameters;
// }

// console.log(greetings(value));


// Call by value and call by reference

// Call by Value:
// When a variable containing a primitive data type (e.g., number, string, boolean, null, undefined, symbol) is passed to a function, its value is copied into the function's local parameter.
// Any modifications made to this parameter inside the function do not affect the original variable outside the function, as they are working on separate copies. 

// let num = 10;

// function increment(value) {
//   value = value + 1; // Modifies the local copy
//   console.log("Inside function:", value); // Output: Inside function: 11
// }

// increment(num);
// console.log("Outside function:", num); // Output: Outside function: 10 (original remains unchanged)

// function ajmat() {
//   return "good evening sir ji";
// }

// ajmat();


// Types of function 

// Anonymous Function 

// let Name = function(n){
//     return `Hello My name is ${n}` ; 

// }



// console.log(Name("Mrinal"))
// console.log(greeting("shamshad"))

// Arrow Function 

// General term
// function add(m, n){
//     return m + n; 
// }

// console.log(add(2,6))

// //Anonymous Function 
// let plus = function(m, n){
//     return m + n;
// }


// console.log(plus(3,7))


// // Arrow Function 

// let jodo = (m, n) => m + n; 

// console.log(jodo(4,5))


// iife (imideatiely Invoked function)

// let func = (function (){
//     let sqr = 8*8
//     return sqr
// })();

// console.log(func)

// let phonk = ((m,n) => m + n)(2,3)

// console.log(phonk)

