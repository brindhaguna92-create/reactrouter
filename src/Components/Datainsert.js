import React from 'react'
import { useNavigate } from 'react-router-dom'

const Datainsert = () => {
  const navigate=useNavigate()
  return (
    <div>
      <h1>This is Datainsert components</h1>
      <br></br>
      <button onClick={()=>navigate('/View')}>Goto View Components</button>
    </div>
  )
}

export default Datainsert
