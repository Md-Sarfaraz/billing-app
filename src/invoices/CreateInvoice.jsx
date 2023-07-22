import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import CustomerDetails from './Customer-details';
import OrderDetailes from './OrderDetailes';
import { BsPlusSquareFill } from 'react-icons/bs'


const CreateInvoice = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [productList, setProductList] = useState({
    customer: { id: "", name: "", address: "", address2: "", city: "", country: "", pincode: "", phone: "" },
    products: [{ id: Math.random(), product: "", quantity: "", price: "", discount: "220", subtotal: "" }],
    invoiceNo: "",
    invoiceDate: ""
  }
  )

  const handleItem = (e) => {

    if (['id', 'product', 'quantity', 'price', 'discount', 'subtotal'].includes(e.target.name)) {
      let newproduct = [...productList.products]
      newproduct[e.target.dataset.id][e.target.name] = e.target.value;
      setProductList({ ...productList, products: newproduct })
    } else {
      setProductList({ [e.target.name]: e.target.value })
    }

  }

  const addProductRow = () => {
    let productRow = { id: Math.random(), product: "", quantity: "", price: "", discount: "", subtotal: "" }
    const test = { ...productList, products: [...productList.products, productRow] }
    setProductList({ ...productList, products: [...productList.products, productRow] })

  }

  const deleteItemRow = (index) => {
    if (index === 0) return
    console.log("filter ::")
    let filteredProducts = productList.products.filter((s, sindex) => index !== sindex)
    setProductList({ ...productList, products: filteredProducts })
  }


  return (
    <div className='p-4'>
      <h1 className='h3 mb-3 text-secondary'>Create New Invoice</h1>
      <div className="d-flex justify-content-end w-100">
        <div className="d-flex flex-column">
          <div className="d-flex gap-3 pb-3 justify-content-end">
            <div className="">
              <h5 className="h5">Select Type: </h5>
            </div>
            <div className="form-group w-25">
              <div className="input-group input-group-sm ">
                <select name="invoice_type" id="invoice_type" className="form-select ">
                  <option value="invoice" defaultValue={""}>Invoice</option>
                  <option value="quote">Quote</option>
                  <option value="receipt">Receipt</option>
                </select>
              </div>
            </div>
            <div className="form-group w-25">
              <div className="input-group input-group-sm ">
                <select name="invoice_status" id="invoice_status" className="form-select">
                  <option value="open" defaultValue={""}>Open</option>
                  <option value="paid">Paid</option>
                </select>
              </div>
            </div>
          </div>
          <div className="d-flex gap-3 justify-content-end">
            <div className="form-group">
              <div className="input-group mb-3">
                <DatePicker className='border rounded' selected={startDate} onChange={(date) => setStartDate(date)}
                  dateFormat="dd-MM-yyyy" showIcon isClearable placeholderText="Invoice Date" />
              </div>
            </ div>
            <div className="form-group ">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">#MD</span>
                <input type="text" className="form-control" placeholder="Invoice Number" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <CustomerDetails />
        <div className="row mx-auto mt-3">
          <div className="col-md-4 d-flex ps-0">
            <button type="button" className="btn me-3 px-3 hover" onClick={() => { addProductRow() }}>
              <BsPlusSquareFill className='text-primary hover' style={{ height: "26px", width: "26px" }} />
            </button>
            <p className='ms-3'>Product Name</p>
          </div>
          <div className="col-md-2">
            <p>Quantity</p>
          </div>
          <div className="col-md-2">
            <p>Price</p>
          </div>
          <div className="col-md-2">
            <p>Discount</p>
          </div>
          <div className="col-md-2">
            <p>Sub Total</p>
          </div>
        </div>
        <OrderDetailes addRow={addProductRow} deleteRow={deleteItemRow}
          handleItem={handleItem} productList={productList} />
      </div>
    </div>
  )
}

export default CreateInvoice