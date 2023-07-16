import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Products from './products/Products';
import Customers from './customers/Customers';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>

      {/* <Navbar /> */}
    </div>
  );
}

export default App;
