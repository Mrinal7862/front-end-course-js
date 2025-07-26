// for(let i = 0; i<10; i++){
//     console.log(i);
// }

// Print Numbers: Use a for loop to print numbers from 1 to 10.
// Even Numbers: Use a for loop to print all even numbers up to a given number n.
// Reverse Order: Use a for loop to print the elements of an array in reverse order.
// Sum of Array Elements: Calculate the sum of all elements in an array using a for loop.
// Countdown: Use a while loop to count down from a given number to 1. 

// 3 2 1 

// Use a for loop to print numbers from 1 to 10.
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Use a for loop to print all even numbers up to a given number n
// let number = 20; 

// for (let i = 1; i <= number; i++) {
//     if(i%2!=0){
//         console.log(i);
//     }
// }

// sum of numbers

// let sum = 0; 

// let number = 10; 
// for(let i = 1; i<=number; i++){
//     sum += i;
//     return 0;
// }

// console.log(sum)

// let countdown = 10; 

// while(countdown>0){
//     console.log(countdown); 
//     if(countdown == 5){
//         console.log("We are good to go...I repeat we are good to go!!");
//     }

//     if(countdown == 3){
//         console.log("blasting off ");
//     }
//     countdown--;
// }

// count down 

let countdown = 10; 

let launch = setInterval(()=>{
    if(countdown > 0){
        console.log(`Launching in ${countdown} seconds...`);
    }

    if(countdown == 5){
        console.log("Launching in 5 seconds!!!!")
    }
    else if(countdown == 0){
        console.log("Space craft launched!!!!");
    }
    else if(countdown < 0){
        console.log(`Space craft is launched...... ${countdown} seconds`)
    }
    if(countdown === -10){
        console.log(`space craft launched`);
        clearInterval(launch);
    }
    countdown--;
}, 2000)