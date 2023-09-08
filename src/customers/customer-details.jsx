import React, { useState, useEffect } from 'react'
import { MdEmail } from 'react-icons/md'
import { Button, Modal } from 'react-bootstrap';
import AsyncSelect from 'react-select/async';
import { customerData } from '../test-data/table-data';
import { customerTemp } from "../utility/template"


const CustomerDetails = ({ selectExisting, handleSelectExisting, customer, shipping, handleShipping, handleCustomer }) => {
    const [show, setShow] = useState(false);

    const [selectCustomer, setSelectCustomer] = useState(customerTemp);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const options = customerData.reduce((res, item) => {
        res.push({ value: item.id, label: item.fullName })
        return res
    }, [])

    useEffect(() => {
        //console.log("Select Options ", options)

    }, [])

    const filterCustomers = (inputValue) => {
        return options.filter((i) =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    };

    const loadOptions = (inputValue, callback) => {
        setTimeout(() => {
            callback(filterCustomers(inputValue))
        }, 500)
    }
    const getOptions = (e) => {
        var val = customerData.find(item => item.id === e.value)
        setSelectCustomer({ ...val })
    }

    const handleSelectCustomer = () => {
        setShow(false);
        handleSelectExisting(selectCustomer)
    }




    return (<>
        <Modal backdrop="static" dialogClassName="modal-90w" centered
            aria-labelledby="example-custom-modal-styling-title" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Select Customer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AsyncSelect cacheOptions loadOptions={loadOptions} defaultValue={""} isSearchable={false}
                    onChange={(e) => getOptions(e)} //onMenuClose={(e) => console.log(e)}
                    defaultOptions />
                <div className="row mt-3">
                    <div className=" col-12 mb-3">
                        <input type="text" className="form-control" placeholder="Full Name"
                            aria-label="Full Name" name="fullName" value={selectCustomer.fullName} disabled />
                        <input type="text" className="d-none" disabled
                            value={selectCustomer.id} />
                    </div>
                    <div className="col-12 mb-3">
                        <div className="input-group">
                            <input type="text" name="email" className="form-control" disabled
                                placeholder="Email" value={selectCustomer.email} />
                        </div>
                    </div>
                    <div className="col--12 mb-3">
                        <input type="text" className="form-control" name="city" disabled
                            placeholder="City" aria-label="city"
                            value={selectCustomer.city} />
                    </div>
                    <div className="col-12 mb-3">
                        <input type="text" className="form-control" name="phone"
                            placeholder="Phone Number" aria-label="Phone Number"
                            value={selectCustomer.phone} disabled />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleSelectCustomer}>Select</Button>
            </Modal.Footer>
        </Modal>
        <div className="row">
            <div className="col-md-6 col-12">
                <div className="card shadow">
                    <div className="card-header d-flex justify-content-between bg-indigo-50">
                        <p className='h5 align-self-center'>Customer Information</p>
                        <button onClick={handleShow} className={(selectExisting ? "" : "d-none ") +
                            "btn hover  m-0 text-black link-underline link-underline-opacity-0 link-underline-opacity-75-hover"}>
                            <span className='fw-bold'>OR </span> Select An Existing Customer</button>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className=" col-12 mb-3">
                                <input type="text" className="form-control" placeholder="Full Name" aria-label="Full Name"
                                    name="fullName" value={customer.fullName} onChange={handleCustomer} />
                                <input type="text" className="d-none"
                                    value={customer.id} onChange={handleCustomer} />
                            </div>
                            <div className="col-lg-6 col-sm-12 mb-3">
                                <div className="input-group">
                                    <span className="input-group-text" ><MdEmail /></span>
                                    <input type="text" name="email" className="form-control" placeholder="Email"
                                        value={customer.email} onChange={handleCustomer} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 mb-3">
                                <input type="text" className="form-control"
                                    placeholder="Address 1" aria-label="Address 1"
                                    name="address1" value={customer.address1} onChange={handleCustomer} />
                            </div>
                            <div className="col-lg-6 col-sm-12 mb-3">
                                <input type="text" className="form-control" name="address2"
                                    placeholder="Address 2" aria-label="Address 2"
                                    value={customer.address2} onChange={handleCustomer} />
                            </div>

                            <div className="col-lg-6 col-sm-12 mb-3">
                                <input type="text" className="form-control" name="city"
                                    placeholder="City" aria-label="city"
                                    value={customer.city} onChange={handleCustomer} />
                            </div>

                            <div className="col-lg-6 col-sm-12 mb-3">
                                <input type="text" className="form-control" name="pincode"
                                    placeholder="Pincode" aria-label="pincode"
                                    value={customer.pincode} onChange={handleCustomer} />
                            </div>
                            <div className="col-lg-6 col-sm-12 mb-3">
                                <input type="text" className="form-control" name="phone"
                                    placeholder="Phone Number" aria-label="Phone Number"
                                    value={customer.phone} onChange={handleCustomer} />
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
        </div>
    </>)
}

export default CustomerDetails