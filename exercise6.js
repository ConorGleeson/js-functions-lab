fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {

    
     const total = json.reduce((total,todo,index,array ) => {
      if(todo.completed){
   
        let ID = todo.userId 

        if(total[ID] != null){
        
        total[ID] +=1 
        
      } else total[ID] = 1

      

      }

      return total
     },([]) )// Complete this code
     console.log(total)
     
     
  })
  .catch(function(err) { 
    console.log(err);
  });