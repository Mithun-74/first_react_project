import React from 'react'
import { Navbar } from './components/navbar'

const App = () => {
  let x = "hello world";
  return (
    <div>
      <Navbar/>
        {x}
        {Array.map((user)=>{return <h2>{user}</h2>})}
    </div>
  )
}

export default App
