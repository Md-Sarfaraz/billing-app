import React from 'react'


const ProductDetails = ({ selectExisting }) => {


    return (
        <div className="row justify-content-center">
            <div className="col-md-10 col-12">
                <div className="card shadow">
                    <div className="card-header bg-indigo-50">
                        <p className='h5'>Product Information</p>
                        <a href='/#' className={(selectExisting ? "" : "d-none ") +
                            " m-0 text-black link-underline link-underline-opacity-0 link-underline-opacity-75-hover"}>
                            <span className='fw-bold'>OR </span> Select An Existing Product</a>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-12 mb-3">
                                <input type="text" className="form-control"
                                    placeholder="Product Name" aria-label="Full Name" />
                            </div>
                            <div className="col-lg-6 col-sm-12 mb-3">
                                <select className="form-select" aria-label="Default select example">
                                    <option defaultValue>Select Type</option>
                                    <option value="1">Tools</option>
                                    <option value="2">Machine</option>
                                    <option value="3">General</option>
                                </select>
                            </div>
                            <div className="col-lg-6 col-sm-12 mb-3">
                                <input type="number" className="form-control"
                                    placeholder="Price" aria-label="Address 2" />
                            </div>
                            <div className="col-12 mb-3">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Product Description"
                                        id="floatingTextarea2" style={{ "height": "12rem" }}></textarea>
                                    <label htmlFor="floatingTextarea2">Product Description</label>
                                </div>
                            </div>
                            <div className="col-12 mb-3 d-flex justify-content-between">
                                <button type="button" className="btn btn-outline-secondary">Cancel</button>
                                <button type="button" className="btn btn-primary">Add Product</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails