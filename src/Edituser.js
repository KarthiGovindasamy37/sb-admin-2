import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Edituser() {
  let params=useParams()
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
          await axios.put(`https://62e0f951fa8ed271c48b3f82.mockapi.io/Users/${params.id}`,values)
          alert("User details updated")
          navigate("/users")
        }
        
      })
      useEffect(()=>{
        userdata();
      },[])

      let userdata=async()=>{
        let user = await axios.get(`https://62e0f951fa8ed271c48b3f82.mockapi.io/Users/${params.id}`)
         formik.setValues({
          name:user.data.name,
          position:user.data.position,
          office:user.data.office,
          age:user.data.age,
          startdate:user.data.startdate,
          salary:user.data.salary

         })
      }
      return (
        
        <div className='container'>
          <form onSubmit={formik.handleSubmit}>
          <div className='row'>
            <div className='col-lg-6 '>
            <label>Name</label>
            <input className={`form-control ${formik.errors.name ? `` : ``}`} type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}/>
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

export default Edituser