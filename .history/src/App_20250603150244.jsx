import React from 'react'
import { Navbar } from './components/navbar'

const App = () => {
  let x = 0;
  let array = ["ueser1","ueser2","ueser3","ueser4","ueser5"]
  const btnclick=()=>{
    console.log
  }
  return (
    <div>
      <Navbar/>
        {x}
        {array.map((user)=>{return <h2>{user}</h2>})}
        <button onClick={()=>{btnclick()}}>Click me</button>
    </div>
  )
}

export default App
