let addButton = document.getElementById('add-text');
let clearButton = document.getElementById('clear-btn');

 function addTextFunction(event){
    console.log('test');
    let item = document.getElementById('todo-input').value;
    let text = document.createTextNode(item);
    console.log(item);
    let newItem = document.createElement('li');
    newItem.appendChild(text);
    document.getElementById('todo-list').appendChild(newItem);

    event.preventDefault();
}
function clearFunction(){
    let item = document.getElementById('todo-input').value;
    item = ""
}



addButton.addEventListener('click', addTextFunction);
clearButton.addEventListener('click', clearFunction);


