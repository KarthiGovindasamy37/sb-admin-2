import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Product() {
  let [loading,setloading]=useState(false)
  let[pdata,setdata]=useState([])


  useEffect(()=>{
    productdata();
  },[])

  let productdata=async()=>{
    try {
      setloading(true)
      let data=await axios.get("https://62ff703934344b6431f96fea.mockapi.io/Products")
      setdata(data.data)
      setloading(false)
    } catch (error) {
      
    }
  }

  let deleteproduct=async(id)=>{
    try {
      let ask=window.confirm("Confirm to delete")
      if(ask){
        await axios.delete(`https://62ff703934344b6431f96fea.mockapi.io/Products/${id}`)
        let index=pdata.findIndex((ele)=>ele.id===id)
        pdata.splice(index,1);
        setdata([...pdata])
      }
      
    } catch (error) {
      
    }
  }
    
  return (
    
    <div className="container-fluid">

    {/* <!-- Page Heading --> */}
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Products</h1>
                        <Link to="/portal/addproduct" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i>Add Product</Link>
                    </div>
                    {/* <!-- DataTales Example --> */}
                    {
                      loading?<div style={{height:"400px"}} className="d-flex justify-content-center align-items-center">
                      <div className="spinner-border text-warning" role="status">
                        
                      </div>
                    </div>:
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Product List</h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>SI</th>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Color</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                    <tr>
                                            <th>SI</th>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Color</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                      {
                                        pdata.map((product,index)=>{
                                          return (
                                            <tr>
                                            <td>{index+1}</td>
                                            <td>{product.name}</td>
                                            <td>{product.description}</td>
                                            <td>{product.color}</td>
                                            <td>{product.price}</td>
                                            <td>
                                              <Link to={`/portal/viewproduct/${product.id}`} className='btn btn-success'>View</Link>
                                              <Link to={`/portal/editproduct/${product.id}`} className='btn btn-dark'>Edit</Link>
                                              <button onClick={()=>deleteproduct(product.id)} className='btn btn-danger'>Delete</button>

                                            </td>
                            
                                        </tr>
                                          )
                                        })
                                      }
                                        
                                        </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    }
  
  </div>
  )
}

export default Product