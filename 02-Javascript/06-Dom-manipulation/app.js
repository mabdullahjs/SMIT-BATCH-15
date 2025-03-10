// console.log('hello world');


// var h1 = document.querySelector('#head');
// // console.log(h1.innerHTML);
// h1.innerHTML = "changed through js"



// var para = document.querySelector('#para')
// para.innerHTML = "change krdia ha bhai javascript ko use krta hua"

var h1 = document.querySelector('#head');


function greetUser(){

    // console.log(h1.innerHTML === "Hello DOM");
    
    
    if(h1.innerHTML === "Hello DOM"){
        h1.innerHTML = "changed through js"
    }else {
        h1.innerHTML = "Hello DOM"
    }
    
}

