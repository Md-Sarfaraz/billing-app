import React, { useState } from 'react'
import CustomerDetails from './customer-details'
import { customerTemp, shippingTemp } from '../utility/template';

const AddCustomer = () => {
  const [customer, setCustomer] = useState(customerTemp)
  const [shipping, setShipping] = useState(shippingTemp)

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

  const handleAddCustomer = () => {
    console.log(customer, shipping)
  }


  return (
    <div className='p-5  '>
      <h1 className='h3 mb-4 text-secondary'>Add New Customer</h1>
      <div className=" d-flex justify-content-center" >
        <CustomerDetails selectExisting={false} edit={false}
          customer={customer} handleCustomer={handleCustomer}
          shipping={shipping} handleShipping={handleShipping} />
      </div>
      <div className=" d-flex justify-content-end mt-3" >
        <button type="button" className="btn btn-success float-end"
          onClick={handleAddCustomer}>Add Customer</button>
      </div>
    </div>
  )
}

export default AddCustomer