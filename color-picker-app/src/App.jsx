import { useState } from 'react'

import './App.css'
export function ColorPicker(){
  const [colorValue, setColorValue] = useState("#ffffff")
  function handleColorChange(event){
    setColorValue(event.target.value)
  }
  return <div id="color-container" style={{backgroundColor: colorValue}}>
    <label htmlFor="color-picker">Select Color</label>
    <input type="color" id='color-picker' onChange={handleColorChange}/>

  </div>
}

function App() {
  return (
    <ColorPicker/>
  )
  
}

export default App
