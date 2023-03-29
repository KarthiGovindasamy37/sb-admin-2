import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function Userview() {
    let params=useParams()
    let[user,setuser]=useState({})
    const [loading,setLoading] = useState(false)
    // reference
    // let[searchparams,setsearchparams] = useSearchParams();
    // console.log(...searchparams);
    useEffect(()=>{
      userdata();
    },[])

    let userdata=async()=>{
      setLoading(true)
      let userdata = await axios.get(`https://62e0f951fa8ed271c48b3f82.mockapi.io/Users/${params.id}`)
      setuser(userdata.data)
      setLoading(false)
    }
  return (
    loading ?
      <div  style={{height:"400px"}} className="d-flex justify-content-center align-items-center">
      <div  className="spinner-border text-primary" role="status">
      </div>
    </div>
     :      
    <div>
    <h1>{`Id : ${user.id}`}</h1>
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