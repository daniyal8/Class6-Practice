const name = 'Daniyal';

setTimeout(() => console.log('this is timeout'), 2000);

console.log(name);

fetch('https://jsonplaceholder.typicode.com/todos/2')
.then(Response => Response.json())
.then(data => console.log(data))
.catch(err => console.log(err.massage));