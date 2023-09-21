import React, { useEffect, useState } from 'react'
import Select from 'react-select'
//import { Button, Modal } from 'react-bootstrap';
import { productTemp } from '../utility/template';
//import AsyncSelect from 'react-select/dist/declarations/src/Async';

const ProductDetails = ({ selectExisting, handleSelectExisting, cancel, save, product, handleProduct }) => {

    const [show, setShow] = useState(false);
    const [selectProduct, setSelectProduct] = useState(productTemp);
    //const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);

    const productTypes = [
        { value: 'tools', label: 'Tools' },
        { value: 'machine', label: 'Machine' },
        { value: 'general', label: 'General' },
    ]

    useEffect(() => {
        console.log("detail>  > ", product)
        console.log("detail>> ", productTypes.find(obj => obj.value == product.type))
    }, [])

    const handleSelectProduct = () => {
        setShow(false);
        handleSelectExisting(selectProduct)
    }

    return (<>
        {/* <Modal backdrop="static" dialogClassName="modal-90w" centered
            aria-labelledby="example-custom-modal-styling-title" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Select Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AsyncSelect cacheOptions loadOptions={loadOptions} defaultValue={""} isSearchable={false}
                    onChange={(e) => getOptions(e)} //onMenuClose={(e) => console.log(e)}
                    defaultOptions />
                <div className="row mt-3">
                    <div className=" col-12 mb-3">
                        <input type="text" className="form-control" placeholder="Full Name"
                            aria-label="Full Name" name="fullName" value={selectProduct.name} disabled />
                        <input type="text" className="d-none" disabled
                            value={selectProduct.id} />
                    </div>
                    <div className="col-12 mb-3">
                        <div className="input-group">
                            <input type="text" name="email" className="form-control" disabled
                                placeholder="Email" value={selectProduct.email} />
                        </div>
                    </div>
                    <div className="col--12 mb-3">
                        <input type="text" className="form-control" name="city" disabled
                            placeholder="City" aria-label="city"
                            value={selectProduct.city} />
                    </div>
                    <div className="col-12 mb-3">
                        <input type="text" className="form-control" name="phone"
                            placeholder="Phone Number" aria-label="Phone Number"
                            value={selectProduct.phone} disabled />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleSelectCustomer}>Select</Button>
            </Modal.Footer>
        </Modal> */}

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
                            <div className="col-lg-6 col-sm-12 mb-3" >{product.type}
                                <Select className="" placeholder="Select Product Type"
                                    defaultValue={productTypes.find(obj => obj.value == product.type)}
                                    options={productTypes} onChange={(e) => handleProduct(e, { type: true })} />
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
    </>)
}

export default ProductDetails