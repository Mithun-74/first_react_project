import React, { useState } from 'react'
import { Navbar } from './components/navbar'
import { FirstComponent } from './components/FirstComponent';

const App = () => {
  
  const[x,setx] = useState(0);

  const btnclick=()=>{
    console.log("clicked");
    setx(x+1);
  }

  return (
    <div>
      <Navbar/>
        {x}
        <button onClick={()=>{btnclick()}}>Click me</button>
        <FirstComponent data={x} fn={setx}/>
    </div>
  )
}

export default App
