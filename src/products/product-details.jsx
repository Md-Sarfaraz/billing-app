import React from 'react'
import Select from 'react-select'

const ProductDetails = ({ selectExisting, cancel, save, product, handleProduct }) => {

    const productTypes = [
        { value: 'tools', label: 'Tools' },
        { value: 'machine', label: 'Machine' },
        { value: 'general', label: 'General' },
    ]


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
                                    name='name' value={product.name} onChange={(e) => handleProduct(e)}
                                    placeholder="Product Name" aria-label="Product Name" />
                                <input type="hidden" name='id'
                                    value={product.id} onChange={(e) => handleProduct(e)} />
                            </div>
                            <div className="col-lg-6 col-sm-12 mb-3">
                                <input type="number" className="form-control"
                                    placeholder="Price" aria-label="Address 2"
                                    name='price' value={product.price} onChange={(e) => handleProduct(e)} />
                            </div>
                            <div className="col-lg-6 col-sm-12 mb-3" >
                                <Select className=""
                                    options={productTypes} defaultValue={productTypes[2]}
                                    onChange={(e) => handleProduct(e, { type: true })} />
                            </div>
                            <div className="col-12 mb-3">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Product Description"
                                        id="floatingTextarea2" style={{ "height": "12rem" }}
                                        name='description' value={product.description} onChange={(e) => handleProduct(e)}></textarea>
                                    <label htmlFor="floatingTextarea2">Product Description</label>
                                </div>
                            </div>
                            <div className="col-12 mb-3 d-flex justify-content-between">
                                <button type="button" className="btn btn-outline-secondary"
                                    onClick={() => { cancel() }}>Cancel</button>
                                <button type="button" className="btn btn-primary"
                                    onClick={() => { save() }}>Add Product</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails