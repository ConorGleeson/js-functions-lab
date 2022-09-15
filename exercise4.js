fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    
     const total = json.reduce((total,todo,index,array ) => {
        return total + todo.completed 

     },0 )// Complete this code
     console.log(total)
     
     
  })
  .catch(function(err) { 
    console.log(err);
  });