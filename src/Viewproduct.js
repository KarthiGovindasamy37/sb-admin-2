import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Viewproduct() {
    let params=useParams()
    let[viewpr,setproduct]=useState({})
    let [loading,setloading]=useState(false)

    useEffect(()=>{
    viewproduct();
    },[])
   let viewproduct=async()=>{
    setloading(true)
    let pdata= await axios.get(`https://62ff703934344b6431f96fea.mockapi.io/Products/${params.id}`)
     setproduct(pdata.data)  
     setloading(false)
}
  return (
    <div>
        {
            loading?<div style={{height:"400px"}} className="d-flex justify-content-center align-items-center">
            <div className="spinner-border text-success" role="status"></div>
              
            </div>:<>
    <h1>{`Name : ${viewpr.name}`}</h1>
      <h1>{`Description : ${viewpr.description}`}</h1>
      <h1>{`Color : ${viewpr.color}`}</h1>
      <h1>{`Price : ${viewpr.price}`}</h1>
      </>
        }
    
      </div>
     
  )
}

export default Viewproduct