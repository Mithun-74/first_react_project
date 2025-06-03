import React from 'react'
import { Navbar } from './components/navbar'

const App = () => {
  let x = "hello world";
  let array = ["ueser1,ueser2,ueser3,ueser4,ueser5"]
  return (
    <div>
      <Navbar/>
        {x}
        {Array.map((user)=>{return <h2>{user}</h2>})}
    </div>
  )
}

export default App
