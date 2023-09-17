import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import InvoiceList from './invoices/invoice-list';
import CreateInvoice from './invoices/create-invoice';
import Products from './products/Products';
import AddProduct from './products/AddProduct';
import CustomerList from './customers/customer-list';
import AddCustomer from './customers/customer-add'
import Navbar from './components/Navbar';

function App() {
  const [IsOpen, setIsOpen] = useState(true)
  // const toggle = () => { setIsOpen(!IsOpen); console.log("Clock") }


  return (<div className="App justify-content-between">
    <Sidebar IsOpen={IsOpen} />
    <div className='main'>
      <Navbar IsOpen={IsOpen} setToggle={setIsOpen} />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/invoice/list" element={<InvoiceList />} />
        <Route path="/invoice/createinvoice" element={<CreateInvoice />} />
        <Route path="/product/list" element={<Products />} />
        <Route path="/product/addproduct" element={<AddProduct />} />
        <Route path="/customer/addcustomer" element={<AddCustomer />} />
        <Route path="/customer/edit" element={<AddCustomer />} />
        <Route path="/customer/list" element={<CustomerList />} />
        <Route path="/system" element={<CustomerList />} />
      </Routes>

    </div>

  </div>);
}

export default App;
