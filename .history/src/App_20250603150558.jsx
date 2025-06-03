import React from 'react'
import { Navbar } from './components/navbar'

const App = () => {
  let x = 0;
  const btnclick=()=>{
    console.log("clicked");
    x++;
  }

  return (
    <div>
      <Navbar/>
        {x}
        <button onClick={()=>{btnclick()}}>Click me</button>
    </div>
  )
}

export default App
