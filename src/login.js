import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { env } from './config'

function Login() {

//    let login=async()=>{
//      await axios.post(`${env.api}/login`)
//    }
    let navigate=useNavigate()
//     let username="karthi"
//     let password=3753
//     let getin=()=>{
//        if(username=="karthi"&&password==3753){
//          navigate("/portal")
//        }else{
//          alert("Wrong credentials")
//     }
//   }

let formik=useFormik({
    initialValues:{
        email:"",
        password:""
    },
    onSubmit:async(values)=>{
        try {
           let logindata= await axios.post(`${env.api}/login`,values) 
           if(logindata.status===200){
           window.localStorage.setItem("app-token",logindata.data.token)
           navigate("/portal/products")
           } 
        } catch (error) {
            console.log(error)
            alert(error.response.data.message)
        }
       
    }
})
  return (
    <div class="container">

    {/* <!-- Outer Row --> */}
    <div class="row justify-content-center">

        <div class="col-xl-10 col-lg-12 col-md-9">

            <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                    {/* <!-- Nested Row within Card Body --> */}
                    <div class="row">
                        <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                        <div class="col-lg-6">
                            <div class="p-5">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                </div>
                                <form class="user"onSubmit={formik.handleSubmit}>
                                    <div class="form-group">
                                        <input type="email" class="form-control form-control-user"
                                            id="exampleInputEmail" aria-describedby="emailHelp"
                                            placeholder="Enter Email Address..."
                                            name="email"
                                            onChange={formik.handleChange}
                                            value={formik.values.email}
                                            />
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control form-control-user"
                                            id="exampleInputPassword" placeholder="Password"
                                            name='password'
                                            onChange={formik.handleChange}
                                            value={formik.values.password}/>
                                    </div>
                                    <div class="form-group">
                                        <div class="custom-control custom-checkbox small">
                                            <input type="checkbox" class="custom-control-input" id="customCheck"/>
                                            <label class="custom-control-label" for="customCheck">Remember
                                                Me</label>
                                        </div>
                                    </div>
                                    <button type='submit' class="btn btn-primary btn-user btn-block">
                                        Login
                                    </button>
                                    <hr/>
                                    <a href="index.html" class="btn btn-google btn-user btn-block">
                                        <i class="fab fa-google fa-fw"></i> Login with Google
                                    </a>
                                    <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                        <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                    </a>
                                </form>
                                <hr/>
                                <div class="text-center">
                                    <a class="small" href="forgot-password.html">Forgot Password?</a>
                                </div>
                                <div class="text-center">
                                    <a class="small" href="register.html">Create an Account!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

</div>
  )
}

export default Login