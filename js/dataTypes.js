// typeof ==> for checking the type

// primitive data types 

// string => array/set of characters  

// A string (or a text string) is a series of characters like "John Doe".

// Strings are written with quotes. You can use single or double quotes:

console.log("My name is Mrinal"); 

// number 
// All JavaScript numbers are stored as decimal numbers (floating point).
console.log(99 + 9.9999999)
console.log(typeof(99 + 9.9999999))

// Boolean 
// 0 >> false 
// 1 >> true 

// let myName = "dulkar "; 
let friendName = 10; 

// console.log("The type of myName is ", typeof(myName));
// console.log("The type of friend is ", typeof(friendName));

// friendName = friendName + myName  ; 

// console.log("The type of myName is ", typeof(myName));
// console.log("The type of friend is ", typeof(friendName));
// console.log("The type of friendship is ", typeof();

// console.log(name);


// undefined 
let myName = null; 
console.log(typeof(myName))

// symbol 
let sym = Symbol(2)

console.log(typeof(2))
console.log(typeof(sym)==2)


// refrence data types
// [] array 
// An array is a special variable, which can hold more than one value:



let arr = new Array(1,2, 3, 4,5)

console.log(arr);

// 0 --> n-1


// console.log(array)
// functions 
let car = () => {
    let aarc_mobile_carList = ["volvo", "mazda", "McLane", "Prosche", "buggati"] 

    for(let i=0; i<aarc_mobile_carList.length; i++){
        console.log(`The car ${i+1} is ${aarc_mobile_carList[i]}`);
    }

    return aarc_mobile_carList;
}

car()

// objects


let cars = {
    "car1" : "maaro-deekro", 
    "car2" : "mazda", 
    "car3" : "buggati", 
    "car4" : "bmw", 
    "car5" : "bablu-dablu", 
    "car6" : "volvo" ,
    "car7" : "nil", 
    "car8" : "dhanno", 
    "car9" : "mazda", 
}

console.log("sachin: ", cars.car1)
console.log("Kajal: ", cars.car6)
console.log("ajmat: ", cars.car4)
console.log("business man")
console.log("ajmat: ", cars.car2)
console.log("ajmat", cars.car1)


let obj = new Object();

obj.firstName = "Mrinal";
obj.age = 20

console.log(obj.firstName, obj.age)

