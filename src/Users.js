import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Users() {
    let[loading,setloading]=useState(false)
    let[data,setdata] =useState([])
    useEffect(()=>{
        loaddata();
    },[])

    let loaddata=async()=>{
        setloading(true)
       let users= await axios.get('https://62e0f951fa8ed271c48b3f82.mockapi.io/Users')
       setdata(users.data);
       setloading(false)
    }
    let deleteuser=async(id)=>{
        try{
       let ask=window.confirm("Confirm delete")     
       if(ask){
        await axios.delete(`https://62e0f951fa8ed271c48b3f82.mockapi.io/Users/${id}`)
        let index=data.findIndex((ele)=>ele.id===id)
        data.splice(index,1)
        setdata([...data])
       }
       }catch(error){
            
        }
    }
  return (

    <div className="container-fluid">

    {/* <!-- Page Heading --> */}
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Users</h1>
                        <Link to="/create-user" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i>Create User</Link>
                    </div>
    {/* <!-- DataTales Example --> */}
    {
        loading ? <div style={{height:"400px"}} className="d-flex justify-content-center align-items-center">
        <div  className="spinner-border text-primary" role="status">
        </div>
      </div> :
       <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        
                        </tr>
                    </tfoot>
                    <tbody>
                        {
                        data.map((user,index)=>{
                           return <tr>
                            <td>{index+1}</td>
                            <td>{user.name}</td>
                            <td>{user.position}</td>
                            <td>{user.office}</td>
                            <td>{user.age}</td>
                            <td>{user.startdate}</td>
                            <td>{user.salary}</td>
                            <td>
                                <Link to={`/users/${user.id}`} className='btn btn-primary mr-2'>View</Link>
                                <Link to={`/edit/${user.id}`} className='btn btn-warning mr-2'>Edit</Link>
                                <button onClick={()=>deleteuser(user.id)} className='btn btn-danger mr-2'>Delete</button>
                            </td>
                        </tr>
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

export default Users