import { useState } from 'react'
import './App.css'

function App() {
  // let counter =15;
  let [counter,setcount]=useState(0);

  let add=()=>{
    counter++;
    // console.log({counter});
    setcount(counter);
  }
  let remove=()=>{
    counter--;
    // console.log(counter);
    setcount(counter);

  }

  return (
    <>
      <h1>This is a counter</h1>
      <br />
      <h2>counter={counter}</h2>

      <button onClick={
        add
      }>increse</button>
      <button onClick={
        remove
      }>decrease</button>

    </>
  )
}

export default App
