import React, { useEffect } from 'react'

const OrderDetailes = ({ addItem, deleteItem, itemlist }) => {


  useEffect(() => {
    console.log("OrderList :: ", typeof itemlist)
    console.log("OrderList :: ", itemlist)

  }, [])



  return (
    <div>
      {/* {
        itemlist.map((val, ind) => {
          return (<div className="" key={ind}>
            <div className="row">
              <div className="col-lg-6 col-sm-12 mb-3">
                <input type="text" className="form-control" value={val.id}
                  placeholder="Full Name" aria-label="Full Name" />
              </div>
              <div className="col-lg-6 col-sm-12 mb-3">
                <div className="col-lg-6 col-sm-12 mb-3">
                  <input type="text" className="form-control" value={val.item}
                    placeholder="Full Name" aria-label="Full Name" />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 mb-3">
                <input type="text" className="form-control" value={val.quantity}
                  placeholder="Address 1" aria-label="Address 1" />
              </div>
              <div className="col-lg-6 col-sm-12 mb-3">
                <input type="text" className="form-control" value={val.price}
                  placeholder="Address 2" aria-label="Address 2" />
              </div>

              <div className="col-lg-6 col-sm-12 mb-3">
                <input type="text" className="form-control" value={val.discount}
                  placeholder="City" aria-label="city" />
              </div>
              <div className="col-lg-6 col-sm-12 mb-3">
                <input type="text" className="form-control" value={val.subtotal}
                  placeholder="Country" aria-label="Country" />
              </div>
            </div>
          </div>)
        })

      } */}
    </div>
  )
}

export default OrderDetailes