import { useState } from 'react'
import './App.css'
function App() {
const[result,setResult]=useState("")

const handleClick=e=>setResult(result.concat(e.target.id))
const clear=()=>setResult("")
const del=()=>setResult(result.slice(0,-1))
const calculate=()=>{
  try {
    setResult(eval(result).toString())
  } catch (error) {
    setResult("Error")
  }
}

  return (
      <div className='calculator'>
      <input type='text' value={result} disabled />
      <div className='nums '>
      <button className='signs1 bg-red-600' onClick={clear}>C</button>
      <button className='signs1  bg-red-600' onClick={del}>Del</button>
      <button id='/' className='signs' onClick={handleClick}>/</button>
      <button id='.'className='signs' onClick={handleClick}>.</button>
      <button id='7' className='number' onClick={handleClick}>7</button>
      <button id='8' className='number' onClick={handleClick}>8</button>
      <button id='9' className='number' onClick={handleClick}>9</button>
      <button id='-' className='signs' onClick={handleClick}>-</button>
      <button id='4' className='number' onClick={handleClick}>4</button>
      <button id='5' className='number' onClick={handleClick}>5</button>
      <button id='6' className='number' onClick={handleClick}>6</button>
      <button id='*' className='signs' onClick={handleClick}>*</button>
      <button id='1' className='number' onClick={handleClick}>1</button>
      <button id='2' className='number' onClick={handleClick}>2</button>
      <button id='3' className='number' onClick={handleClick}>3</button>
      <button id='+' className='signs' onClick={handleClick}>+</button>
      <button id='0' className='number' onClick={handleClick}>0</button>
      <button id='00' className='number' onClick={handleClick}>00</button>
      <button id='=' className='signs' onClick={calculate}>=</button>
      </div>  
    </div>
  )
}

export default App
