import React ,{useRef}from 'react'

const RefTutrial = () => {
  const inputRef=useRef(null);
  const onClick=()=>{
  
inputRef.current.value="";
  }
    return (
    <div>
    <h1>Omnia</h1>
    <input type="text" placeholder="Enter your Email" ref={inputRef} />
    <button onClick={onClick}>Change Name</button>
    </div>
  )
}

export default RefTutrial