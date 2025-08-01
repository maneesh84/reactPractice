import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>This is my tailwind component</h1>
      <Card item="Monkey 1" price="10" />
      <Card  item="Monkey 2"/>

    </>
  )
}

export default App
