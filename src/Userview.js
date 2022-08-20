import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios'
function Userview() {
    let params=useParams()
    let[user,setuser]=useState({})
    // reference
    // let[searchparams,setsearchparams] = useSearchParams();
    // console.log(...searchparams);
    useEffect(()=>{
      userdata();
    },[])

    let userdata=async()=>{
      let userdata = await axios.get(`https://62ff703934344b6431f96fea.mockapi.io/users/${params.id}`)
      setuser(userdata.data)
    }
  return (
    <div>
      <h1>{`Id : ${params.id}`}</h1>
      <h1>{`Name : ${user.name}`}</h1>
      <h1>{`Position : ${user.position}`}</h1>
      <h1>{`Office : ${user.office}`}</h1>
      <h1>{`Age : ${user.age}`}</h1>
      <h1>{`Startdate : ${user.startdate}`}</h1>
      <h1>{`Salary : ${user.salary}`}</h1>
    
    
    </div>
  )
}

export default Userview