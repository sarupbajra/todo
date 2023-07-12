import React from 'react';
import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from './store';
import "./App.css"

//  import List from "./component/List";
function App () {
  const [value,setValue] = useState("");
  const todoList = useSelector ((state) => state.todo);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (value !== "" ) {
    dispatch(addTodo(value));
    setValue("");
  }
    };

    const handleRemove = (index) => {
      dispatch(removeTodo(index));
     };
        
    return(
      <div className='App'>
        <div className='text-input'>
        {/* <input onChange ={(e) => setValue(e.target.value)}  value = {value}/> */}
        <input onChange ={(e) => setValue(e.target.value)}  value = {value}/>
        <button onClick ={handleClick}>Submit</button>
        </div>
        <div>
          <ol>
            {todoList.map((todo,index)=> (
              <div key={index}>
              <div >{todo}</div>
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



