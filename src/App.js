import './admin.css'
import React from 'react';
import Dashboard from './Dashboard';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Users from './Users';
import CreateUser from './CreateUser';
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
        
        <Route path="/" element={<Portal/>}>
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
