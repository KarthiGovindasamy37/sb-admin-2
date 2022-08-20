import { useFormik } from 'formik'
import React from 'react'
import "./App.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  let navigate=useNavigate()
  let formik=useFormik({
    initialValues:{
      name:"",
      position:"",
      office:"",
      age:"",
      startdate:"",
      salary:""
    },
    validate:(values)=>{
      let errors={};
      if(values.name==""){
        errors.name="Please enter name"
      }
      if(values.position==""){
        errors.position="Please enter position"
      }
      if(values.age<18){
        errors.age="Age should be 18 and above"
      }
      return errors;
    },
    onSubmit :async(values)=>{
      await axios .post("https://62ff703934344b6431f96fea.mockapi.io/users",values)
      alert("User created")
      navigate("/portal/users")
    }
    
  })
  
  return (
    
    <div className='container'>
      <form onSubmit={formik.handleSubmit}>
      <div className='row'>
        <div className='col-lg-6 '>
        <label>Name</label>
        <input className={`form-control ${formik.errors.name ? `` : ``}`} type="text"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        />
        <span style={{color:"red"}}>{formik.errors.name}</span>
        </div>
        <div className='col-lg-6 '>
        <label>Position</label>
        <input className={`form-control ${formik.errors.position ? `` : ``}`} type="text"
        name="position"
        onChange={formik.handleChange}
        value={formik.values.position}/>
        <span style={{color:"red"}}>{formik.errors.position}</span>
        </div>
        
        <div className='col-lg-6 '>
        <label>Office</label>
        <input className='form-control' type="text"
        name="office"
        onChange={formik.handleChange}
        value={formik.values.office}/>
        </div>
        <div className='col-lg-6 '>
        <label>Age</label>
        <input className='form-control' type="text"
        name="age"
        onChange={formik.handleChange}
        value={formik.values.age}/>
        <span style={{color:"red"}}>{formik.errors.age}</span>
        </div>
        <div className='col-lg-6 '>
        <label>Startdate</label>
        <input className='form-control' type="text"
        name="startdate"
        onChange={formik.handleChange}
        value={formik.values.startdate}/>
        </div>
        <div className='col-lg-6 '>
        <label>Salary</label>
        <input className='form-control' type="text"
        name="salary"
        onChange={formik.handleChange}
        value={formik.values.salary}/>
        </div>
        <div className='col-lg-6 '>
        <input className='btn btn-primary mt-2' type="submit" value="submit"
        disabled={!formik.isValid}/>
        </div>
      </div>
      </form>
    </div>
    
  )
}

export default CreateUser