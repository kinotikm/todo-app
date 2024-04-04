document.addEventListener('DOMContentLoaded',() => {
  const baseURL="http://localhost:3000/todos"

let todoList = document.getElementById('t-list');
let todoForm = document.querySelector('form');

fetch(baseURL)
.then((response)=> response.json())
.then((todos) =>todos.forEach((todo) => addTodo(todo.title)));



//add event listener to form
todoForm.addEventListener('submit',(e)=> {
    e.preventDefault();
  //  console.log(todoForm.querySelector("#new-todo").value);

  let newTodo = todoForm.querySelector('#new-todo').value

  let todoObj={
    title:newTodo,
    completed:"false"
  }

  //make a post request
  fetch(baseURL,{
    method:"POST",
    headers:{
      "content-Type":"application/json",
      "Accept":"application/jsn"
    },
    body:JSON.stringify(todoObj)

  })
  .then(res => res.json())
  .then(newTodo => addTodo(newTodo.title))
    todoForm.reset()
    addTodo(newTodo)
    
})

function addTodo (title){
    let li = document.createElement('li')
    li.innerHTML = title;
    todoList.appendChild(li);
 }
 //addTodo('swimming')
 })
