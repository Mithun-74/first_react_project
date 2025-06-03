import React from 'react'
import { Navbar } from './components/navbar'

const App = () => {
  let x = "hello world";
  return (
    <div>
      <Navbar/>
        {x}
        {Array.map((user)=>{})}
    </div>
  )
}

export default App
