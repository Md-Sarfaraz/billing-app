import React, { useEffect } from 'react'
import { PiMinusSquareFill } from 'react-icons/pi'

const OrderDetailes = ({ productList, handleItem, addRow, deleteRow }) => {

  // console.log("OrderList Comp :: ", productList)



  return (
    <div>
      {
        productList.products.map((val, idx) => {
          return (<div className="" key={idx}>
            <div className="row mx-auto" >
              <div className="col-md-4 p-1 d-flex align-items-center">
                <button type="button" className="btn  me-3 hover" onClick={() => deleteRow(idx)}>
                  <PiMinusSquareFill className='text-danger fs-5  '
                    style={{ height: "26px", width: "26px" }} />
                </button>

                {/* <input type="text" className="form-control" name='product' data-id={idx}
                  value={val.product} onChange={handleItem}
                  placeholder="Item Name" aria-label="Full Name" /> */}
                <input type="text" className="d-none" name='id'
                  value={val.id} onChange={handleItem} />

                <div className="input-group mb-3">
                <input type="text" className="form-control" name='product' data-id={idx}
                  value={val.product} onChange={handleItem}
                  placeholder="Item Name" aria-label="Full Name" />
                    <span className="input-group-text" id="basic-addon2">or Select Existing</span>
                </div>
              </div>
              <div className="col-md-2  p-1">
                <input type="number" className="form-control" name='quantity' data-id={idx}
                  value={val.quantity} onChange={handleItem}
                  placeholder="Quantity" aria-label="Quantity" />
              </div>
              <div className="col-md-2  p-1">
                <input type="number" className="form-control" name='price' data-id={idx}
                  value={val.price} onChange={handleItem}
                  placeholder="Price" aria-label="Price" />
              </div>

              <div className="col-md-2  p-1">
                <input type="number" className="form-control" name='discount' data-id={idx}
                  value={val.discount} onChange={handleItem}
                  placeholder="Discount" aria-label="Discount" />
              </div>
              <div className="col-md-2  p-1">
                <input type="number" className="form-control" name='subtotal' data-id={idx}
                  value={val.subtotal} onChange={handleItem}
                  placeholder="SubTotal" aria-label="Subtotal" />
              </div>
            </div>
          </div>)
        })

      }
    </div>
  )
}

export default OrderDetailes