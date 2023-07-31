import React from 'react'
import CustomerDetails from './customer-details'

const AddCustomer = () => {
  return (
    <div className='p-5  '>
      <h1 className='h3 mb-4 text-secondary'>Add New Customer</h1>
      <div className=" d-flex justify-content-center" style={{ width: "90%" }}>
        <CustomerDetails selectExisting={false}/>
      </div>

    </div>
  )
}

export default AddCustomer