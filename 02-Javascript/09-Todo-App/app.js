// crud

// create
// read
// update
// delete



var input = document.querySelector('#input');
var ol = document.querySelector('ol');

var arr = [];

function addTodo() {
    arr.push(input.value)
    renderTodo()
}
function deleteTodo(index) {
    arr.splice(index, 1)
    renderTodo()
}
function editTodo(index) {
    console.log('edit todo', index)
    var editvalue = prompt('Enter the Edit ')
    arr[index] = editvalue
    renderTodo()
}


function renderTodo() {
    ol.innerHTML = ""
    for (var i = 0; i < arr.length; i++) {
        ol.innerHTML += `<li>${arr[i]}
        <button onclick="deleteTodo(${i})">delete</button>
        <button onclick="editTodo(${i})">edit</button>
        </li>`
    }
}



