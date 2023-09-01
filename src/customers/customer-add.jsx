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
  const [shipping, setShipping] = useState({ name: "", address1: "", address2: "", city: "", pincode: "" })

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


  return (
    <div className='p-5  '>
      <h1 className='h3 mb-4 text-secondary'>Add New Customer</h1>
      <div className=" d-flex justify-content-center" >
        <CustomerDetails selectExisting={false} customer={customer} handleCustomer={handleCustomer}
          shipping={shipping} handleShipping={handleShipping} />
      </div>

    </div>
  )
}

export default AddCustomer