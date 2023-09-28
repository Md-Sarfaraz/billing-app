import React from 'react'

const CustomerShipping = ({ selectExisting, handleSelectExisting,
    shipping, handleShipping, }) => {
    return (
        <div>
            <div className="card shadow">
                <div className="card-header bg-indigo-50">
                    <p className='h5'>Shipping Information</p>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12 mb-3">
                            <input type="text" className="form-control" placeholder="Full Name"
                                name='fullName' value={shipping.fullName} onChange={handleShipping} />
                        </div>
                        <div className="col-lg-6 col-sm-12 mb-3">
                            <input type="text" className="form-control" placeholder="Address 1"
                                name='address1' value={shipping.address1} onChange={handleShipping} />
                        </div>
                        <div className="col-lg-6 col-sm-12 mb-3">
                            <input type="text" className="form-control" placeholder="Address 2"
                                name='address2' value={shipping.address2} onChange={handleShipping} />
                        </div>
                        <div className="col-lg-6 col-sm-12 mb-3">
                            <input type="text" className="form-control" placeholder="City" aria-label="city"
                                name='city' value={shipping.city} onChange={handleShipping} />
                        </div>
                        <div className="col-lg-6 col-sm-12 mb-3">
                            <input type="text" className="form-control" placeholder="Pincode"
                                name='pincode' value={shipping.pincode} onChange={handleShipping} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerShipping