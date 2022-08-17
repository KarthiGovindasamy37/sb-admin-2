import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    let navigate=useNavigate()
    let getin=()=>{
      navigate("/portal")
    }
  return (
    <button onClick={getin}>click</button>
  )
}

export default Login