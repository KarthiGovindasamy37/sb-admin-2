import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Addproduct() {
    let navigate=useNavigate()

    let formik=useFormik({
        initialValues:{
            name:"",
            description:"",
            color:"",
            price:""
        },
        validate:(values)=>{
            let a={}
           if(values.name===""){
             a.name="Please enter product"
           }
           if(values.price===""){
            a.price="Please enter price"
          }
          if(values.description.length<5){
            a.description="Please enter atleast 5 letters description"
          }
          if(values.color===""){
            a.color="Please specify color"
          }
          return a;
        },
        onSubmit:async(values)=>{
          try {
            await axios.post("https://62ff703934344b6431f96fea.mockapi.io/Products",values)
            alert("Product created")
            navigate("/products")
        } catch (error) {
            
          }
        }
    })
  return (
    <div className='container'>
      <form onSubmit={formik.handleSubmit}>
      <div className='row'>
        <div className='col-lg-6 '>
        <label>Product Name</label>
        <input className="form-control" type="text"
        id="name"
        onChange={formik.handleChange}
        value={formik.values.name}/>
        <span style={{color:"red"}}>{formik.errors.name}</span>
        </div>
        <div className='col-lg-6 '>
        <label>Description</label>
        <input className="form-control" type="text"
        id="description"
        onChange={formik.handleChange}
        value={formik.values.description}/>
        <span style={{color:"red"}}>{formik.errors.description}</span>
        </div>
        <div className='col-lg-6 '>
        <label>Color</label>
        <input className="form-control" type="text"
        id="color"
        onChange={formik.handleChange}
        value={formik.values.color}/>
        <span style={{color:"red"}}>{formik.errors.color}</span>
        </div>
        <div className='col-lg-6 '>
        <label>Price</label>
        <input className="form-control" type="number"
        id="price"
        onChange={formik.handleChange}
        value={formik.values.price}/>
        <span style={{color:"red"}}>{formik.errors.price}</span>
        </div>
     </div>
      <div className='d-flex justify-content-center mt-3'>
        <button className='btn btn-warning ' type="submit" disabled={!formik.isValid}>Add</button>
      </div>
      </form>
    </div>
  )
}

export default Addproduct