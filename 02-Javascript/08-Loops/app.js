// console.log("hello world");

// var num = 76;
// console.log(num + ' * 1 = ' + num * 1);
// console.log(num + ' * 2 = ' + num * 2);
// console.log(num + ' * 3 = ' + num * 3);
// console.log(num + ' * 4 = ' + num * 4);
// console.log(num + ' * 5 = ' + num * 5);
// console.log(num + ' * 6 = ' + num * 6);
// console.log(num + ' * 7 = ' + num * 7);
// console.log(num + ' * 8 = ' + num * 8);
// console.log(num + ' * 9 = ' + num * 9);
// console.log(num + ' * 10 = ' + num * 10);








// for loop
// while loop
// dowhile loop

// var num = +prompt('enter table number')

// for (var i = 1; i <= 10; i++) {
//     console.log(num + ' * ' + i + ' = ' + num * i)
// }





// var input = document.querySelector('#tableNum');
// var div = document.querySelector('#container');

// function createTable() {
//     console.log(typeof input.value);
//     div.innerHTML = ""

//     for (var i = 1; i <= 10; i++) {
//         console.log(input.value + " * " + i + " = " + +input.value * i);
//         div.innerHTML += input.value + " * " + i + " = " + +input.value * i + "<br/>"

//     }
// }



// var container = "abdullah";
// console.log(container);

// var heading = document.querySelector('#head');

// function greetUser(){
//     console.log("hello world");
//     heading.innerHTML = "changed through javascript"
// }




// var age = 21


// if(age >= 18){
//     console.log("gym ma admission miljayega");

// }else {
//     console.log("admission nahi milaiga");

// }


// var input = document.querySelector('#age');
// var para = document.querySelector('#container');
// function gymAdmission(){
//     var age = +input.value
//     if(age >= 18){
//         para.innerHTML = "Admission miljayega"
//     }else if(age >= 15){
//         para.innerHTML = "Admission miljayega liken 5000 zyada dena prhainga"
//     }else{
//         para.innerHTML = "Chalo shaba kato"
//     }
// }










// var arr = ['abdullah' , 'usman']


// arr.push('ammar')
// arr.pop()
// console.log(arr);

// var arr = ['abdullah' , ['usman']]
// console.log(arr[1][0]);




// backtick string ,  template literals

// your name is username with email email and your age is age

// var username = "Abdullah";
// var email = "mabdullah2037@gmail.com"
// var age = 21;

// console.log('your name is ' + username + ' with email ' + email + ' and your age is ' + age + " " + username);

// console.log(`your name is ${username} with ${20 * 20} email ${email} and your age is ${age}`);



// var num = 20123
// console.log(`${num} * 1 = ${num * 1}`);
// console.log(`${num} * 2 = ${num * 2}`);
// console.log(`${num} * 3 = ${num * 3}`);
// console.log(`${num} * 4 = ${num * 4}`);
// console.log(`${num} * 5 = ${num * 5}`);
// console.log(`${num} * 6 = ${num * 6}`);
// console.log(`${num} * 7 = ${num * 7}`);
// console.log(`${num} * 8 = ${num * 8}`);
// console.log(`${num} * 9 = ${num * 9}`);
// console.log(`${num} * 10 = ${num * 10}`);






// var num = +prompt('enter number')

// // (initialization , condition , increment)
// for(var i = 1; i <= 10; i++){
//     console.log(`${num} * ${i} = ${num * i}`);  
// }




// nested loop


// for(var i = 1; i <= 10; i++){
//     console.log(`outer loop ${i}`);

//     for(var j = 1; j <= 5; j++){
//         console.log(`inner loop ${j}`);
//     }
// }


// console.log("console after loop");




// for (var i = 1; i <= 1000; i++) {
//     console.log(`outer loop ${i}`);

//     for (var j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }

//     console.log('-------------');


// }


// infinite loop









// var fruits = ['watermelon', 'banana', 'apple', 'grapes', 'orange', 'mango', 'strawberry', 'pineapple', 'kiwi', 'cherry']

// var div = document.querySelector('#container');


// for(var i = 0; i < fruits.length; i++){
//     console.log(`${fruits[i]} index ${i}`);
//     div.innerHTML += `<p>${fruits[i]}</p>`

// }





// const names = [
//     "Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah", "Ivy", "Jack",
//     "Kathy", "Liam", "Mia", "Noah", "Olivia", "Paul", "Quincy", "Rachel", "Sam", "Tina",
//     "Ursula", "Victor", "Wendy", "Xander", "Yara", "Zach", "Amelia", "Benjamin", "Clara", "Daniel", 
//     "Ella"];

// var ol = document.querySelector('ol');

// for(var i = 0; i < names.length; i++){
//     console.log(names[i]);
//     ol.innerHTML += `<li>${names[i]}</li>`

// }




// loop
// function
// DOM manipulation 











// function greetUser() {
//   console.log('hello world 1');
//   console.log('hello world 2');
//   console.log('hello world 3');
//   console.log('hello world 4');
//   console.log('---------');
// }

// greetUser()



// argument
// parameter
// return



// function greetuser(username , age){
//   console.log(`your name is ${username} and your age is ${age}`);
  
// }

// greetuser('mabdullah' , 21)
// greetuser('Usman' , 18)










// function sum(num1 , num2){
//   console.log(num1 + num2);
//   return num1 + num2
// }

// var total = sum(20 , 30)
// console.log(total);



// var username = prompt('enter your username')
// console.log(username);





// function userDetail(fullName , email , age){
//   return `your name is ${fullName} and your email is ${email} with age ${age}`
// }

// var user = userDetail('Muhammad Abdullah' , 'mabdullah2037@gmail.com' , 21);

// console.log(user);

// var head = document.querySelector('#head');
// head.innerHTML = "change through javascript"
// console.log(head.innerHTML);



// var ol = document.querySelector('#ordered-list');


// function clearList(){
//   ol.innerHTML = `<li>Sab laa aaya</li>`
//   console.log('clear list');
  
// }

// input banana haa. jo value user input ma daiga wohi value ol ka undar show krwni ha.




// var input = document.querySelector('#input');
// var ol = document.querySelector('#ordered-list');

// function addTask(){
//   console.log(input.value);
//   ol.innerHTML += `<li>${input.value}</li>`
//   input.value = ""
// }


// function clearList(){
//   ol.innerHTML = ""
// }




// initialization , condition , increment


for(var i = 0; i < 10; i++){
  console.log(i)
}

 













