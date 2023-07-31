import React from 'react'
import ProductDetails from './product-details'

const AddProduct = () => {
  return (
    <div className='p-5 '>
      <h1 className='h3 mb-4 text-secondary'>Add New Product</h1>
      <div className=" d-flex justify-content-center" style={{ width: "90%" }}>
        <ProductDetails selectExisting={false} />
      </div>

    </div>
  )
}

export default AddProduct