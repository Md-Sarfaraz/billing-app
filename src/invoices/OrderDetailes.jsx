import React, { useEffect } from 'react'

const OrderDetailes = ({ itemList, addItem, deleteItem }) => {

  console.log("OrderList Comp :: ", itemList)
  const onChangeHandler = () => {

  }

  return (
    <div>
      {
        itemList.items.map((val, ind) => {
          return (<div className="" key={ind}>
            <div className="row">
              <div className="col-md-4 mb-3 p-1">
                <input type="text" className="d-none" value={val.id} onChange={onChangeHandler} />
                <input type="text" className="form-control"
                  value={val.item} onChange={onChangeHandler}
                  placeholder="Full Name" aria-label="Full Name" />

              </div>
              <div className="col-md-2 mb-3 p-1">
                <input type="number" className="form-control"
                  value={val.quantity} onChange={onChangeHandler}
                  placeholder="Quantity" aria-label="Quantity" />
              </div>
              <div className="col-md-2 mb-3 p-1">
                <input type="number" className="form-control"
                  value={val.price} onChange={onChangeHandler}
                  placeholder="Price" aria-label="Price" />
              </div>

              <div className="col-md-2 mb-3 p-1">
                <input type="number" className="form-control"
                  value={val.discount} onChange={onChangeHandler}
                  placeholder="Discount" aria-label="Discount" />
              </div>
              <div className="col-md-2 mb-3 p-1">
                <input type="number" className="form-control"
                  value={val.subtotal} onChange={onChangeHandler}
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