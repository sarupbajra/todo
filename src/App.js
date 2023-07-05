import React from 'react';
import  { useState } from 'react';
//  import List from "./component/List";
function App () {
  const [value,setValue] =useState();
  const [todo,setTodo] = useState([]);
  const handleClick = () => {
    if (value !== "" && todo !== "" ) {
    setTodo([...todo,value]);
    setValue("");
  }
    };
    
    return(
      <div className='App'>
        <div>
        <input onChange ={(e) => setValue(e.target.value)}value ={value}/>
        <button onClick ={handleClick}>Submit</button>
        </div>
        <div>
          <ol>
            {todo.map((todos)=> (
              <li>{todos}</li>
            ))}
          </ol>
        </div>
      </div>  
    );
        

}
export default App;



