import React from 'react';
import  { useState } from 'react';
//  import List from "./component/List";
function App () {
  const [value,setValue] = useState("");
  const [todo,setTodo] = useState([]);

  const handleClick = () => {
    if (value !== "" && todo !== "" ) {
    setTodo([...todo,value]);
    setValue("");
  }
    };

    const handleRemove = async (index) => {
      // await setTodo(todo.splice(index,1));
      let a = todo.map( (data, i) => {
        if(i !== index) return data;
        return null;
      })
      // let arr = [...todo];
      // arr = arr.splice(index, 1);
      setTodo(a);
      console.log(a);
    }
        
    return(
      <div className='App'>
        <div>
        {/* <input onChange ={(e) => setValue(e.target.value)}  value = {value}/> */}
        <input onChange ={(e) => setValue(e.target.value)}  value = {value}/>
        <button onClick ={handleClick}>Submit</button>
        </div>
        <div>
          <ol>
            {todo && todo.map((todos,index)=> (
              <div key={index}>
              <div >{todos}</div>
              <button type="button" onClick={()=>handleRemove(index)}>
                Remove
              </button>
              </div>
            ))}
          </ol>
          <div> 
          </div>
        </div>
        <div>
         
        </div>
      </div>  
    );
        

}
export default App;



