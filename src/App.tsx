import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Junas Nazarito Gutib</h1>
      
        <p>
          BSIT 3A - SYSARCH
        </p>
        <label for="username">PLEASE ENTER YOUR USER NAME:  </label>
        <input type="text" id="username" name="username"></input>
        <p></p>
        <label for="password">PLEASE ENTER PASSWORD:  </label>
        <input type="*" id="password" name="password"></input>
        <p></p>
        <button>Click here to submit</button>


       
      
      <p className="read-the-docs">
        BOMBALABAP
      </p>
      
    </>
  )
}

export default App
