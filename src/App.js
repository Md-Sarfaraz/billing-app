import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import Invoices from './invoices/Invoices';
import CreateInvoice from './invoices/CreateInvoice';
import Products from './products/Products';
import AddProduct from './products/AddProduct';
import Customers from './customers/Customers';
import AddCustomer from './customers/AddCustomer'
import Navbar from './components/Navbar';

function App() {
  const [IsOpen, setIsOpen] = useState(true)
  const toggle = () => { setIsOpen(!IsOpen); console.log("Clock") }


  return (<div className="App justify-content-between">
    <Sidebar IsOpen={IsOpen}/>
    <div className='main'>
      <Navbar IsOpen={IsOpen} setToggle={setIsOpen}/>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/invoice/list" element={<Invoices />} />
        <Route path="/invoice/createinvoice" element={<CreateInvoice />} />
        <Route path="/product/list" element={<Products />} />
        <Route path="/product/addproduct" element={<AddProduct />} />
        <Route path="/customer/addcustomer" element={<AddCustomer />} />
        <Route path="/customer/list" element={<Customers />} />
        <Route path="/system" element={<Customers />} />
      </Routes>

    </div>
  </div>);
}

export default App;
