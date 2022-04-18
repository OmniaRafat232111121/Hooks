import React,{useState,useMemo} from 'react'
function MemoryAdvanced ()  {
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [age,setAge]=useState("");
    const fullName= useMemo(()=> <div >{firstName} {lastName}</div>,
    [firstName,lastName]);
  return (
    <div>
    fullName:{fullName}
    <br />
    age:{age}
    <br />
      <input value={firstName} placeholder="enter your firstName" onChange={(e=>setFirstName(e.target.value))} />
      <input value={lastName}placeholder="enter your lastName" onChange={(e=>setLastName(e.target.value))} />
      <input type="number" value={age}placeholder="enter your age" onChange={(e=>setAge(e.target.value))} />
    </div>
  )
}

export default MemoryAdvanced ;
