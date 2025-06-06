import React from 'react'
import './CSS/Todoitem.css'
import  tick from './Assets/tick.png'
import wrong from './Assets/wrong.png'
import not_tick from './Assets/not tick.png'

export const Todoitem = ({no,display,text,setTodos}) => {


  const deleteTodo = (no)=>{
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todos)=> todos.no!==no);
    setTodos(data);
  }

  const toogle = ()=>{
       let data = JSON.parse(localStorage.getItem("todos"));
       for(let i=0;i<data.length;i++){
        if(data[i].no===no){
          if(data[i].display===""){
             data[i].display = "line-through";
          }
          else{
            data[i].display = "";
          }
          break;
        }
       }
      setTodos(data);
  }
  return (
    <div className='todoitems'>
      <div className="todo-item-container" onClick={()=>{toogle(no)}}>
        {display===""? <img src={not_tick} alt="" />:<img src={tick} alt="" />}
        <div className="todoitems-text">{text}</div>
      </div>
        <img className='todo-cross-icon' onClick={()=>{deleteTodo(no)}} src={wrong} alt="" />
    </div>
  )
}
