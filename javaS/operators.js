// Types of JavaScript Operators
// There are different types of JavaScript operators:

// precedence
// Arithmetic Operators + - * /, %
// Increment & Decrement Op
// Assignment Operators =, +=, -=, *=, /=

// Comparison Operators >, <, >=, <=, !=, ==
// Logical Operators &&, ||, ~

// Bitwise Operators &, |
// Ternary Operators ? true : false
// Type Operators 
// String Operators

// precedence >> jis notation ko pehle follow karta ho 
// let eq = (2 + 9) * 10/2 

// console.log(eq)

// Arithmetic Operators  +, -, *, /, %

// console.log(10%3)

// console.log(2+3)
// console.log(2-3)
// console.log(2*3)
// console.log(20/4)

// // Increment & Decrement Op
// let value = 2

// // pre-increment +1
// ++value 

// // post 1+
// value++
// console.log(value)

// Assignment Operator

// let num = 3; 
// num += 17
// output: 20

// let num = 3; 
// num *= 7
// output: 21

// let num = 15; 
// num /= 3;
// output: 5

// let num = 3; 
// num %= 2;
// output: 1

// let num = 5; 
// num -= 2; 
// output: 3

//  (+, -, *, /, %) and (stores in given variable)




// logical  operators > 

// console.log(3 < 2 || 4 <  3) // 0 + 0 => 0 false
// console.log((3<4 && 2<1)) // 1 * 0 => 0 false
// console.log(!false)

// comparison operator 
// ==  ==== >= <= > < != 

// let num1 = 3; 
// let num2 = 3; 
// console.log(num1 == num2) // # opt
// console.log(num1 === num2) // # opt
// console.log(num1 !== num2)

// console.log(typeof(num1));
// console.log(typeof(num2))

// let g1 = 3; 
// let g2 = 4; 

// console.log(g1 >= g2)
// console.log(g1 <= g2)

// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// bitwise >> used for binary logical operations >> & | ~ ^ << >> >>> 

// console.log(5 & 1)

// 5  > 0101
// 1 > 0001

// 5 1 decimal

// 0 & 0 => 0 
// 1 & 0 => 0
// 0 & 0 => 0
// 1 & 1 => 1

// 1

// 8 4 2 1
// 0 0 0 1

// 7 and 10 

// 7 >> 0 1 1 1
// 10 >> 1 0 1 0

// 7 & 10 => output
// 0 & 1 => 0 8
// 1 & 0 => 0 4 
// 1 & 1 => 1 2
// 1 & 0 => 0 1

// console.log(7 & 10)

console.log(2 | 1)

// 2 1 
// 0 0 0 8 1 
// 0 0 0 4 1
// 1 0 1 2 0
// 0 1 1 1 0

// let binlog = 1 | 2
// console.log(~binlog)

// left shift 
// 5 >> 0101 << 001010000 = 10 

// 0101
// 5
// 8 4 2 1 
// 0 1 0 1 
// 2^n 
//0 + 2^2 + 0 + 2^0



console.log(5<<4)
