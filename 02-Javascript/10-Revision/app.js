// console.log('hello world');

var input = document.querySelector('#input');
var ol = document.querySelector('ol');

var allTodo = []

function addTodo(){
    allTodo.push(input.value);

    ol.innerHTML = ""
    for(var i = 0; i < allTodo.length; i++){
        ol.innerHTML += `<li>${allTodo[i]}
        <button onclick="deleteTodo(${i})">delete</button>
        <button onclick="editTodo(${i})">edit</button>
        </li>`
    }
    
}


function deleteTodo(index){
    allTodo.splice(index , 1);

    ol.innerHTML = ""
    for(var i = 0; i < allTodo.length; i++){
        ol.innerHTML += `<li>${allTodo[i]}
        <button onclick="deleteTodo(${i})">delete</button>
        <button onclick="editTodo(${i})">edit</button>
        </li>`
    }
    

}
function editTodo(index){
    console.log('todo edited' , index)
}


