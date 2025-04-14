// console.log('hello world!');

// var
// let
// const

// var username = "abdullah"; // initialize, declare, assign
// username = "usman" // reassign
// var username = "ammar" // redeclare
// console.log(username);



// let username = "Abdullah";
// // username = 'Usman'; // reassign 
// // let username = "ammar"
// console.log(username);


// const username = "Abdullah";


// const arr = ['abdullah' , 'usman'];
// arr.push('ammar')
// console.log(arr);




// toLowerCase
// toUpperCase
// length
// charAt
// indexOf
// slice
// replace
// replaceall
// split
// join

// let username = "Muhammad Abdullah"


// console.log(username.toUpperCase());
// console.log(username.toLowerCase());
// console.log(username.length);
// console.log(username[4]);

// console.log(username.charAt(22));
// console.log(username.charAt(username.length - 1));
// console.log(username.indexOf('x'));
// console.log(username.lastIndexOf('h'));

// console.log(username.slice(0 , 8));



// var statement = "Azam is a good cricketer. He is a fittest player after virat kohli in the world. Azam is looking like a wow. He passed all the fitness test. He followed diet strictly."

// console.log(statement.split(' ').reverse().join(' '));
// console.log(statement.split('').reverse().join(''));


// console.log(statement.replace('Azam' , 'Abdullah'));
// console.log(statement.replaceAll('Azam' , 'Abdullah'));



const cities = ['karachi' , 'larkana' , 'sukkur' , 'Hyderabad' , 'mirpurkhas' , 'jamshoro' , 'nawabshah'];

const input = document.querySelector('#city-input');
const p = document.querySelector('#para');

function checkCity(){
    console.log(input.value);
    console.log(cities.includes(input.value.toLowerCase()));

    if(cities.includes(input.value.toLowerCase())){
        p.innerHTML = "You live in the safest and cleanest and most developed city"
    }else {
        p.innerHTML = "Bekaar ha tumhari zindagi"
    }
    
    
}




















