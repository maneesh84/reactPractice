import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Btn from './btn.jsx'

function App() {
  const [color, setColor] = useState('magenta')

  function ChangeColor(color){
    console.log(color)
    setColor(color);
  }



  return (
    <>
     <div className='Bg' style={{backgroundColor: color}}>
     <div className='btnContainer'>
      <button className="btn" style={{backgroundColor:'red' }} onClick={()=>ChangeColor("red")}
          >Red</button>
      <button className="btn" style={{backgroundColor:'green' }} onClick={()=>ChangeColor("green")}
          >Green</button>
      <button className="btn" style={{backgroundColor:'blue' }} onClick={()=>ChangeColor("blue")}
          >Blue</button>
      <button className="btn" style={{backgroundColor:'darkorange' }} onClick={()=>ChangeColor("darkorange")}
          >darkorange</button>
      
     </div>
     </div>

    </>
  )
}

export default App
