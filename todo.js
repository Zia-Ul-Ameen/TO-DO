let input = document.getElementById("input");
let button = document.getElementById("add");
let added = document.getElementById("listadded");
let edit = document.getElementById('edit');


let todos = JSON.parse(localStorage.getItem('todosArray'));
let currentEditedId = null;

const domRendering = () => {
    localStorage.setItem('todosArray', JSON.stringify(todos));

    for(let i = 0; i < todos.length; i++){

        let newNode = document.createElement('div')
        newNode.id='list';
    
        let todoText = document.createElement('p');
        todoText.className = 'p';
        todoText.innerText = todos[i];
        todoText.onclick = lineThrough;
    
        let cancel = document.createElement('p');
        cancel.innerText ="Clear";
        cancel.className = 'cancelBtn';
        cancel.id= i;
        cancel.onclick = onDelete;

        let edit = document.createElement('p');
        edit.innerText = 'Edit';
        edit.className = 'edit';
        edit.onclick = onEdit;
        edit.id= i;
        
        newNode.appendChild(todoText);
        newNode.appendChild(edit)
        newNode.appendChild(cancel);
        added.appendChild(newNode);
        }
}

const onEdit = (e) => {
    button.style.display='none';
    edit.style.display='block';

    let edited = todos[e.target.id];
    input.value = edited;
    currentEditedId = e.target.id;

}
const onDelete = (e) => {
        const selectedId = e.target.id;
        if(todos.length != 1){
            todos.splice(selectedId, 1);
        }else{
            todos.splice(0, 1);
        }
        console.log(todos);
        added.innerHTML = '';
        domRendering();
}

button.addEventListener("click",()=>{
    if(input.value != ''){
    added.innerHTML = '';
    todos.push(input.value);

    domRendering();

   input.value = '';
    } else {
        alert('enter some text');
    }
});


input.addEventListener('keyup', (e)=>{
    if(e.key === 'Enter'){
        added.innerHTML='';
        todos.push(e.target.value);
        domRendering();
        input.value = '';
    }
})

const onEdited = (e) =>{
    const editedValue = input.value;
    todos[currentEditedId] = editedValue;
    button.style.display='block';
    edit.style.display='none';
    added.innerHTML = '';
    domRendering();
    input.value = '';
}
const lineThrough = (e) => {
    // if(Array.from(e.target.classList).includes('lineThrough')){
    //     e.target.classList.remove('lineThrough');
    // }else{
    //     e.target.classList.add('lineThrough');
    // }

    e.target.classList.toggle('lineThrough');
}
edit.addEventListener('click', onEdited);
domRendering();
// let tt = () => 'ameen';
// function mm () {};
// let gg = function () {

// }    github     storage
