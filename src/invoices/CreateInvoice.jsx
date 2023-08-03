import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import CustomerDetails from '../customers/customer-details';
import OrderDetailes from './OrderDetailes';
import { CalculateSum, GetSum } from '../utility/calculation';


const CreateInvoice = () => {
  const [startDate, setStartDate] = useState(new Date());
  const productTemp = { id: "", name: "", desc: "", quantity: "", type: "", price: "", subTotal: "" };
  const customerTemp = { id: "", name: "", email: "", address1: "", address2: "", city: "", pincode: "", phone: "" };
  const shippingTemp = { id: "", name: "", address1: "", address2: "", city: "", pincode: "" };

  const [invoice, setInvoice] = useState({
    invoiceId: "",
    invoiceNo: "",
    invoiceDate: "",
    customer: customerTemp,
    shipping: shippingTemp,
    products: [productTemp],
    subTotal: "",
    discount: "",
    tax: "",
    total: ""
  }
  )

  const handleItem = (e) => {
    if (Object.keys(productTemp).includes(e.target.name)) {
      if ('subTotal'.includes(e.target.name)) return


      let pid = e.target.dataset.id
      let newProduct = [...invoice.products]
      newProduct[pid][e.target.name] = e.target.value;
      newProduct[pid].subTotal = (newProduct[pid].quantity * newProduct[pid].price)
      //newProduct[pid].subTotal = newProduct[pid].subTotal - newProduct[pid].discount


      let stotal = CalculateSum(invoice.products, 'subTotal')
      let discount = CalculateSum(invoice.products, 'discount')

      setInvoice({
        ...invoice,
        products: newProduct,
        subTotal: stotal,
        discount: discount,
      })
    }
  }

  const handleCustomer = (e) => {
    if (Object.keys(customerTemp).includes(e.target.name)) {
      let newCustomer = { ...invoice.customer }
      newCustomer[e.target.name] = e.target.value;
      setInvoice({ ...invoice, customer: newCustomer })
    }

  }

  const addProductRow = () => {
    let productRow = { ...productTemp, id: Math.random(), }
    setInvoice({ ...invoice, products: [...invoice.products, productRow] })
  }

  const deleteItemRow = (index) => {
    if (index > -1) {
      if (invoice.products.length > 1) {
        let filteredProducts = invoice.products.filter((s, sindex) => index !== sindex)
        setInvoice({ ...invoice, products: filteredProducts })
      } else {
        setInvoice({ ...invoice, products: [productTemp] })
      }
    }
  }

  return (
    <div className='p-5'>
      <h1 className='h3 mb-3 text-secondary'>Create New Invoice</h1>
      <div className="d-flex justify-content-end w-100">
        <div className="d-flex flex-column">

          <div className="d-flex gap-3 justify-content-end">
            <div className="w-25 ">
              <h5 className="h5 ">Select Type: </h5>
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
        <CustomerDetails selectExisting={true} customer={invoice.customer} handleCustomer={handleCustomer} />
        <div className="mt-3 col-12 ">
          <OrderDetailes addRow={addProductRow} deleteRow={deleteItemRow}
            handleItem={handleItem} products={invoice.products} />
        </div>
      </div>


      <div className="row mt-4">
        <div className="col-md-6 col-12 ">
          <div className="form-floating">
            <textarea className="form-control" style={{ "height": "10rem" }}
              placeholder="Additional Notes" id="additionalnotes"></textarea>
            <label htmlFor="floatingTextarea">Additional Notes</label>
          </div>
        </div>
        <div className="col-md-6 col-12 ">
          <div className="row">
            <div className="col-6 col-md-8  "><p className='mb-1 fw-bold float-end'>Sub Total :</p></div>
            <div className="col-6 col-md-4  pe-4"><p className='mb-1  float-end'> {invoice.subTotal}</p></div>
            <div className="col-6 col-md-8  "><p className='mb-1 fw-bold float-end'>Discount :</p></div>
            <div className="col-6 col-md-4  pe-4"><p className='mb-1  float-end'> {2000.00}</p></div>
            <div className="col-6 col-md-8  "><p className='mb-1 fw-bold float-end'>Shipping :</p></div>

            <div className="col-6 col-md-8  "><p className='mb-1 fw-bold float-end'>TAX/VAT 18% :</p></div>
            <div className="col-6 col-md-4  pe-4"><p className='mb-1  float-end'> 2000.00</p></div>
            <div className="col-6 col-md-8  ">
              <div className="form-check form-check-reverse float-end">
                <label className="form-check-label fw-semibold" htmlFor="flexCheckDefault">
                  Remove TAX/VAT
                </label>
                <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
              </div>
            </div>
            <div className="col-6 col-md-8  "><p className='mb-1 fw-bold float-end'>Total :</p></div>
            <div className="col-6 col-md-4 pe-4"><p className='mb-1  float-end'> 2000.00</p></div>
          </div>

        </div>
        <div className="col-12 mt-4">
          <button type="button" className="btn btn-success float-end">Create Invoice</button>
        </div>
      </div>
    </div>
  )
}

export default CreateInvoice