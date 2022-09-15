fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const finalResult = json.filter(todo => todo.completed === false).map(todo => [todo.title, todo.userId])   // Complete this code

     console.log(finalResult)
     
    })
  
  .catch(function(err) { 
    console.log(err);
  });