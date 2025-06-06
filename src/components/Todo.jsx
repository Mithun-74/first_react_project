import React, { useEffect, useRef, useState } from 'react'
import './CSS/Todo.css'
import { Todoitem } from './Todoitem';

let count = 0;
export const Todo = () => {
   
   const[todos,setTodos] = useState(() => JSON.parse(localStorage.getItem("todos") || "[]"));
   const inputRef = useRef(null);

   const add=()=>{
          setTodos([...todos, {no:count++,text:inputRef.current.value,display:""}]);
          inputRef.current.value = "";
          localStorage.setItem("todos_count",count);
   }

 useEffect(()=>{
  const savedCount = localStorage.getItem("todos_count");
  if (savedCount) count = parseInt(savedCount);
},[])

   useEffect(() => {
        console.log(todos);
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

  return (
    <div className='todo'>
        <div className="todo-header">To-Do List</div>
        <div className="todo-add">
            <input ref={inputRef} type='Text' placeholder='Add your Task' className='todo-input'/>
            <div onClick={()=>{add()}} className="todo-add-btn">ADD</div>
        </div>
        <div className="todo-list">
            {todos.map((item,index)=>{
              return <Todoitem key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text} />
            })}
        </div>
    </div>
  )
}
