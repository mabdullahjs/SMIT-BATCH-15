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





var input = document.querySelector('#tableNum');
var div = document.querySelector('#container');

function createTable() {
    console.log(typeof input.value);
    div.innerHTML = ""

    for (var i = 1; i <= 10; i++) {
        console.log(input.value + " * " + i + " = " + +input.value * i);
        div.innerHTML += input.value + " * " + i + " = " + +input.value * i + "<br/>"

    }
}










