import { useState } from 'react'

import './App.css'
export function ToggleApp(){
  const [isNotValid, setIsNotValid] = useState(false)
  const handleToggleVisibility = () => {
    setIsNotValid(!isNotValid)
  }

  return (
    <div id="toggle-container">
      <button id="toggle-btn" onClick={handleToggleVisibility}>{isNotValid? "Hide Message" : "Show Message"}</button>
      {isNotValid && <p>I love freeCodeCamp!</p>}

    </div>
  )
}
function App() {

  return (
    <ToggleApp/>
  )
}

export default App
