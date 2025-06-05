import React from 'react'
import './CSS/Todoitem.css'
import  tick from './Assets/tick.png'
import wrong from './Assets/wrong.png'

export const Todoitem = ({no,display,text}) => {
  return (
    <div className='todoitems'>
      <div className="todo-item-container">
        <img src={wrong} alt="" />
        <div className="todoitems-text">{text}</div>
      </div>
        <img src={tick} alt="" />
    </div>
  )
}
