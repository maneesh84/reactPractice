import { useState } from 'react'
import './App.css'

function App() {
  // let counter =15;
  let [counter,setcount]=useState(0);

  let add=()=>{
    counter++;
    if(counter>20){
      counter=20;
    }
    // console.log({counter});
    setcount(counter);
  }
  let remove=()=>{
    counter--;
    if(counter<0){
      counter=0;
    }
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
