import React, { useState } from 'react';
import { Message } from './Message'
import logo from './logo.svg';
import './App.css'

function App() {
  let [count,setCount] = useState(1)
  let [isMorning, setMorning] = useState(true)
  return (
    <div className={`box ${isMorning ? 'dayLight': ''}`}>
      <h2>Have a Good {isMorning ? 'Morning':'Night'}</h2>

      <Message counter={count}/>
      <h1>This is THE TEST </h1>
      <br></br>
      <button onClick={
         ()=>setCount(++count)
        }>
          Update counter
          </button>
          <button onClick={()=>setMorning(!isMorning)}>Update Data </button>
    </div>
  );
}

export default App;
