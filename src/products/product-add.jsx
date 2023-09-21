import React, { useState, useEffect } from 'react'
import ProductDetails from './product-details'
import { useLocation, useNavigate } from 'react-router-dom'
import { productTemp } from '../utility/template';

const ProductAdd = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [product, setProduct] = useState(productTemp)

  useEffect(() => {
    if (location.state && location.state.product) {
      setProduct(location.state.product)
      console.log(product)
    }
    if (location.state === null) setProduct(productTemp)


  }, [])

  const handleProduct = (e, type) => {
    if (type) {
      setProduct({ ...product, type: e.value });
    } else {

      const name = e.target.name;
      const val = e.target.value
      //console.log(name," :cust: ", val,product)
      setProduct({ ...product, [name]: val });
    }
    console.log(product)

  }

  const saveProduct = () => {
    console.log(product)

  }



  return (
    <div className='p-5 '>
      <h1 className='h3 mb-4 text-secondary'>Add New Product</h1>
      <div className=" d-flex justify-content-center" >
        <ProductDetails selectExisting={false} product={product}
          cancel={() => navigate(-1)} save={saveProduct} handleProduct={handleProduct} />
      </div>

    </div>
  )
}

export default ProductAdd