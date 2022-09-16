fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    
     const total = json.reduce((total,todo,index,array ) => {
        if(todo.completed){
          total.push(todo.userId, todo.title)
        }
        return total

     },([]) )// Complete this code
     console.log(total)
     
     
  })
  .catch(function(err) { 
    console.log(err);
  });