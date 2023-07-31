import React from 'react'
import { MdEmail } from 'react-icons/md'

const CustomerDetails = ({ selectExisting }) => {
    return (
        <div className="row">
            <div className="col-md-6 col-12">
                <div className="card shadow">
                    <div className="card-header d-flex justify-content-between bg-indigo-50">
                        <p className='h5'>Customer Information</p>
                        <a href='/#' className={(selectExisting ? "" : "d-none ") +
                            " m-0 text-black link-underline link-underline-opacity-0 link-underline-opacity-75-hover"}>
                            <span className='fw-bold'>OR </span> Select An Existing Customer</a>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className=" col-12 mb-3">
                                <input type="text" className="form-control"
                                    placeholder="Full Name" aria-label="Full Name" />
                            </div>
                            <div className="col-lg-6 col-sm-12 mb-3">
                                <div className="input-group">
                                    <span className="input-group-text" ><MdEmail /></span>
                                    <input type="text" className="form-control" placeholder="Email" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 mb-3">
                                <input type="text" className="form-control"
                                    placeholder="Address 1" aria-label="Address 1" />
                            </div>
                            <div className="col-lg-6 col-sm-12 mb-3">
                                <input type="text" className="form-control"
                                    placeholder="Address 2" aria-label="Address 2" />
                            </div>
                       
                            <div className="col-lg-6 col-sm-12 mb-3">
                                <input type="text" className="form-control"
                                    placeholder="City" aria-label="city" />
                            </div>

                            <div className="col-lg-6 col-sm-12 mb-3">
                                <input type="text" className="form-control"
                                    placeholder="Pincode" aria-label="pincode" />
                            </div>
                            <div className="col-lg-6 col-sm-12 mb-3">
                                <input type="text" className="form-control"
                                    placeholder="Phone Number" aria-label="Phone Number" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="col-md-6 col-12"> {/* Shipping Address */}
                <div className="card shadow">
                    <div className="card-header bg-indigo-50">
                        <p className='h5'>Shipping Information</p>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12 mb-3">
                                <input type="text" className="form-control"
                                    placeholder="Full Name" aria-label="Full Name" />
                            </div>

                            <div className="col-lg-6 col-sm-12 mb-3">
                                <input type="text" className="form-control"
                                    placeholder="Address 1" aria-label="Address 1" />
                            </div>
                            <div className="col-lg-6 col-sm-12 mb-3">
                                <input type="text" className="form-control"
                                    placeholder="Address 2" aria-label="Address 2" />
                            </div>

                            <div className="col-lg-6 col-sm-12 mb-3">
                                <input type="text" className="form-control"
                                    placeholder="City" aria-label="city" />
                            </div>

                            <div className="col-lg-6 col-sm-12 mb-3">
                                <input type="text" className="form-control"
                                    placeholder="Pincode" aria-label="pincode" />
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerDetails