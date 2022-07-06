import {useState} from 'react'
import './App.css';


function App() {
  const [calc, setCalc] = useState('')
  const [results, setResults] = useState('')

  const ops = ['-', '/', '+' , '*']

const calculate = () => {
  setCalc(eval(calc).toString())
}

const updateCalc = value => {
  if((ops.includes(value) && calc === '')||
  (ops.includes(value) && ops.includes(calc.slice(-1))) )
  return;

  if(!ops.includes(value)){setResults (eval(calc + value).toString())}
  {setCalc(calc + value)}
  
}

const deleteCalc = () => {
  if(calc === ''){
    return;
  }
  const value = calc.slice(0,-1);
    setCalc(value)
}

  const createDigits = () => {
     const digits = [];

    for(let i=1;i<10; i++){
      digits.push(
        <button onClick={()=>updateCalc(`${i}`)}
        key={i}>{i}</button>
      )
    }
    return digits;
  }
  
  return (
    <div className='App'>
    <div className='calculator'>
      <div className='display'>
        {results ? <span>({results})</span> : ''}
      {calc || '0'}
      </div>

      <div className='operators'>
        <button onClick={()=>updateCalc('/')}>/</button>
        <button onClick={()=>updateCalc('*')}>*</button>
        <button onClick={()=>updateCalc('-')}>-</button>
        <button onClick={()=>updateCalc('+')}>+</button>

        <button onClick={()=> deleteCalc() }>DEL</button>
      </div>

      <div className='digits'>
        {createDigits()}
        <button onClick={()=>updateCalc('.')}>.</button>
        <button onClick={()=>updateCalc('0')}>0</button>
        <button onClick={()=> calculate() }>=</button>
      </div>
    </div>
    </div>
  )
}

export default App;
