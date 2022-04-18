import React,{useState}from 'react'

const StateTutrial = () => {
  const [counter,setCounter]=useState(0);
  const [counterr,setCounterr]=useState(40); 
  const [inputValue,setInputValue]=useState("");
const Increment=()=>{
    setCounter(counter+1);
}
const Decrement=()=>{
    setCounterr(counterr-1);
}
const  onChange=(e)=>{
const newValue=e.target.value;
setInputValue(newValue);
}
  return (
   <div>
   {counter}<button onClick={Increment}>Increment</button>
   {counterr}<button onClick={Decrement}>Decrement</button>
   <input onChange={onChange}  placeholder='Enter your something Belong in'/>
   {inputValue}
   </div>
  )
}

export default StateTutrial;