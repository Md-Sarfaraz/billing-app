import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import CustomerDetails from './customer-details'
import { customerTemp, shippingTemp } from '../utility/template';

const AddCustomer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [customer, setCustomer] = useState(customerTemp)
  const [shipping, setShipping] = useState(shippingTemp)

  useEffect(() => {
    if (location.state && location.state.customer) {
      setCustomer(location.state.customer)
      console.log(customer)
    } 
    if(location.state === null)setCustomer(customerTemp)
    
  }, [location.state])


  const handleCustomer = (e) => {
    const name = e.target.name;
    const val = e.target.value
    //console.log(name," :cust: ", val,customer)
    setCustomer({ ...customer, [name]: val });
    if (Object.keys(shipping).includes(name)) {
      setShipping({ ...shipping, [name]: val });
    }

  }

  const handleShipping = (e) => {
    const name = e.target.name;
    const val = e.target.value
    //console.log(name, " :ship: ", val, shipping)
    setShipping({ ...shipping, [name]: val });

  }

  const handleAddCustomer = (e) => {
    console.log(customer, shipping)
  }

  return (
    <div className='p-5  '>
      <h1 className='h3 mb-4 text-secondary'>{location.state != null ? "Edit Customer" : "Add New Customer"}</h1>
      <div className=" d-flex justify-content-center" >
        <CustomerDetails customer={customer} handleCustomer={handleCustomer} />
      </div>
      <div className=" d-flex justify-content-between mt-3 px-2" >
        <button type="button" className="btn btn-secondary float-end"
          onClick={() => navigate(-1)}>Cancel</button>
        <button type="button" className="btn btn-success float-end"
          onClick={handleAddCustomer}>Save</button>
      </div>
    </div>
  )
}

export default AddCustomer