/* 
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
 */

/* 
function loadData() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((data) => console.log(data));
}
*/

/* 
function lodeUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => displayData(data));
}
 */

/* 
function lodePosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => console.log(data));
}
 */

/* 
function displayData(data) {
  const ul = document.getElementById('users');
  for (const user of data) {
    const li = document.createElement('li');
    li.innerText = `Name: ${user.name}, Email: ${user.email}`;
    ul.appendChild(li);
  }
}
 */

function lodeUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => displayData(data));
}

function displayData(data) {
  //   console.log(data);
  const ul = document.getElementById('users');
  for (const user of data) {
    const li = document.createElement('li');
    li.innerText = `Name: ${user.name}`;
    ul.appendChild(li);
    const li2 = document.createElement('li');
    li2.innerText = `Email: ${user.email}`;
    ul.appendChild(li2);
  }
}
