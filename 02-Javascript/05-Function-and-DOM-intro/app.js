// console.log('hello world');




// function myFunc() {
//     console.log('hello world 1');
//     console.log('hello world 2');
//     console.log('hello world 3');
//     console.log('hello world 4');
//     console.log('hello world 5');
// }

// myFunc()










// function greetUser(){
//     console.log('hello abdullah');

// }

// greetUser()
// greetUser()
// greetUser()
// greetUser()


// parameter
// argument

// undefined
// null

// var username = null;
// console.log(username);



// username = abdullah

// function greetUser (username){
//     console.log('hello ' + username)
// }

// greetUser('abdullah')
// greetUser('usman')
// greetUser('ammar')











// function sum(num1 , num2 , num3){
//     console.log(num1 + num2);
//     console.log(num3);

// }


// sum(20 , 30)
// sum(50 , 30)
// sum(90 , 30)






// function checkCity(cityName) {
//     if (cityName === 'karachi') {
//         console.log('you live in the cleanist city');

//     } else {
//         console.log('jindagi barbaad');

//     }
// }

// var userInput = prompt('enter city name');
// checkCity(userInput)





// return



// 2 * 1 = 2
// var num = 5
// console.log(num + " * 1 = " + num * 1);
// console.log(num + " * 2 = " + num * 2);
// console.log(num + " * 3 = " + num * 3);
// console.log(num + " * 4 = " + num * 4);
// console.log(num + " * 5 = " + num * 5);
// console.log(num + " * 6 = " + num * 6);
// console.log(num + " * 7 = " + num * 7);



// var num = 0;

// if (num < 0) {
//     console.log('negative number');

// } else if (num === 0) {
//     console.log('Zero');

// } else {
//     console.log('positive number');

// }





// function checkResult(username , marks){
//     if (marks < 50) {
//         console.log(username + ' tum rikshaw chalao');
//     } else {
//         console.log(username + ' tum mehran chalao');
//     }
// }

// var getUserMarks = +prompt('enter your marks')
// checkResult('abdullah' , getUserMarks)



// case sensative

// console.log('Abc' === 'abc');





// return keyword

// var username = prompt('enter your name');
// console.log(username);


// function hello(){
//     console.log('hello world');    
//     return 'wapsi krdia' 
// }

// console.log(hello());

// hello()


// var greeting = hello();
// console.log(greeting);





// function sum(num1 , num2){
//     return num1 + num2
// }

// var total = sum(20 , 40);
// console.log(total);



// function greet(username , age){
//     console.log('hello world');
//     return username + " and with age " + age
// }
// var userFullName = prompt('enter your name')
// var userAge = +prompt('enter your age')

// var userGreetings = greet(userFullName , userAge);
// console.log(userGreetings);




function greetUser(username){
    console.log('hello ' + username);
}

function secondFunc(){
    console.log('second function');
    greetUser('usman')
    
} 

secondFunc()