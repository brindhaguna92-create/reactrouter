import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Datainsert = () => {
  const navigate=useNavigate()
  const [rno,setRno]=useState("")
    const [sname,setSname]=useState("")
  const [mark,setMark]=useState("")
  const [rank,setRank]=useState("")
  const[finres,setFinres]=useState([])

  const dis=(event)=>{
    if(event.target.id==="rno")
      setRno(event.target.value)
    if(event.target.id==="sname")
      setSname(event.target.value)
    if(event.target.id==="mark")
      setMark(event.target.value)
    if(event.target.id==="rank")
      setRank(event.target.value)
 }
 const result=()=>{
const json={
  rno:rno,
  sname:sname,
  mark:mark,
  rank:rank
}
  console.log("myjson:",json)
  setFinres([json,...finres])
 }

  return (
    <div>
      <h1>Student Information -Insert/save Form</h1>
      <br></br>
      Roll no:<input type='text' id='rno' onChange={(ev)=>dis(ev)}placeholder='Enter your Roll no'value={rno}></input><br></br>
      Name:<input type='text'id='sname' onChange={(ev)=>dis(ev)} placeholder='Enter your name'value={sname}></input><br></br>
      Mark:<input type='text' id='mark' onChange={(ev)=>dis(ev)}placeholder='Enter your Mark'value={mark}></input><br></br>
     Rank :<input type='text' id='rank'onChange={(ev)=>dis(ev)}placeholder='Enter your Rank'value={rank}></input><br></br>
     <button onClick={result}>Check Data</button>
      <button onClick={()=>navigate('/View')}>Goto View Components</button><br></br>
      <h1>Student result</h1>
    <hr></hr>
      <br></br>

      
        {finres.map((item)=>
          <>
          Roll number:{item.rno}
          <br></br>
          Student Name:{item.sname}
          <br></br>
          Student Mark:{item.mark}
          <br></br>
          Student Rank:{item.rank}
          <br></br>
          <hr size="2" color='blue' width="20%" align="left"></hr>
          </>
        )}
    </div>
  
  )
}

export default Datainsert
