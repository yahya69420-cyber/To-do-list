const STORAGE_KEY = 'todoListArray';

let array = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let msg = document.querySelector('.msg'); 


function saveToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(array));
}

function printArray() {
  msg.innerHTML = '';
  for (let i = 0; i < array.length; i++){
    const todoObject = array[i]; 
    msg.innerHTML += ` <div>${todoObject.name}</div> <div>${todoObject.time}</div> <button class = 'delete' onclick="removeItem(${i})">delete</button> `;
  }
}

function removeItem(index) {
  array.splice(index,1);
  msg.innerHTML = '';

  saveToStorage();

  printArray()
}

function toDo() {
  let inputElement = document.querySelectorAll(".To-do")
  let input = inputElement[0].value;
  let date = inputElement[1].value;
  
  array.push({
    name : input,
    time : date
  });
  
  inputElement[0].value = '';
  inputElement[1].value = '';

  saveToStorage();
  
  msg.innerHTML = ''
  
  printArray()
}

printArray()