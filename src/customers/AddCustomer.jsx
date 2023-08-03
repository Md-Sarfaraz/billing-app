import React, { useState } from 'react'
import CustomerDetails from './customer-details'

const AddCustomer = () => {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    pincode: "",
    phone: "",
  })

  const handleCustomer = (e) => {
    const name = e.target.value;
    const val = e.target.value
    console.log(name," :: ", val)
    //setCustomer({ ...customer, [name]: val });
  
  }

  return (
    <div className='p-5  '>
      <h1 className='h3 mb-4 text-secondary'>Add New Customer</h1>
      <div className=" d-flex justify-content-center" style={{ width: "90%" }}>
        <CustomerDetails selectExisting={false} customer={customer} handleCustomer={handleCustomer} />
      </div>

    </div>
  )
}

export default AddCustomer