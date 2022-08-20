import logo from './logo.svg';
import './admin.css'
import Card from './card';
import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Users from './Users';
import CreateUser from './CreateUser';
import Login from './login';
import Portal from './Portal';
import Product from './Product';
import Userview from './Userview';
import Edituser from './Edituser';
import './App.css'
import Addproduct from './Addproduct';
import Viewproduct from './Viewproduct';
import Editproduct from './Editproduct';
function App() {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/portal" element={<Portal/>}>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='users' element={<Users/>}/>
        <Route path="users/:id" element={<Userview/>} />
        <Route path="create-user" element={<CreateUser/>}/>
        <Route path="edit/:id" element={<Edituser/>}/>
        <Route path="products" element={<Product/>}/>
        <Route path='addproduct' element={<Addproduct/>}/>
        <Route path='viewproduct/:id' element={<Viewproduct/>} />
        <Route path='editproduct/:id' element={<Editproduct/>} />
        </Route>
      </Routes>
    
     </BrowserRouter>
  );
}

export default App;
