const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('list');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let item = input.value.trim();
  if (item !== '' && !Array.from(list.children).some(li => li.querySelector('.item-label').textContent === item)) {
    addItem(item);
    input.value = '';
  }
});
function addItem(item) {
  let li = document.createElement('li');
  li.innerHTML = `
    <input type="checkbox" class="item-checkbox">
    <label class="item-label">${item}</label>
    <button class="delete">X</button>
  `;
  list.appendChild(li);
  let deleteBtn = li.querySelector('.delete');
  deleteBtn.addEventListener('click', () => {
    li.remove();
    saveItems();
  });
  saveItems();
}
function saveItems() {
  let items = Array.from(list.children).map((li) => li.querySelector('.item-label').textContent);
  localStorage.setItem('items', JSON.stringify(items));
}
function loadItems() {
  let items = JSON.parse(localStorage.getItem('items')) || [];
  items.forEach((item) => addItem(item));
}
window.addEventListener('load', loadItems);




















// let todoList = document.querySelector('[class="todolist"]')
// let addBtn = document.querySelector('[addBtn]')


// addBtn.addEventListener('click', function(){
//     todoList.innerHTML += createToDo();


//     let todoItem =document.querySelectorAll('[class="todoitem"]')
   
//     for(let item in [...todoItem]){
//         let todotask = [...todoItem][item]
//         let InputElem = todotask.children[1]

//         InputElem.value = todotask.getAttribute('holdValue')
        
//         InputElem.oninput = function(){
//             console.log('input is working')
//             todotask.setAttribute('holdValue', InputElem.value )
            
//         }
//     }
// })

// function createToDo(){
//     let item =`<li class="item">
//     <input type="checkbox">
//     <input type="text">
// </li>`
//     return item
// }








console.log(todoList)


