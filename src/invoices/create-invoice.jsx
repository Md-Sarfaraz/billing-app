import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import CustomerDetails from '../customers/customer-details';
import OrderDetailes from './order-detailes';
import { CalculateInvoice, CalculateSum, CalculateTax } from '../utility/calculation';


const CreateInvoice = () => {
  const [startDate, setStartDate] = useState(new Date());

  const productTemp = { id: "", name: "", desc: "", quantity: "", type: "", price: "", discount: "", subTotal: "" };
  const customerTemp = { id: "", name: "", email: "", address1: "", address2: "", city: "", pincode: "", phone: "" };
  const shippingTemp = { id: "", name: "", address1: "", address2: "", city: "", pincode: "" };

  const [isTaxable, setIsTaxable] = useState(true)

  const [invoice, setInvoice] = useState({
    invoiceId: "",
    invoiceNo: "",
    invoiceDate: "",
    type: "",
    notes: "",
    subTotal: 0.0,
    discount: 0.0,
    tax: 0.0,
    total: 0.0,
    shippingCharge: 0.0,
    customer: customerTemp,
    shipping: shippingTemp,
    products: [productTemp],
  }
  )

  useEffect(() => {
    let [stotal, discount, tax, total] = [0, 0, 0, 0]
    if (isTaxable) {
      discount = CalculateSum(invoice.products, 'discount')
      stotal = CalculateSum(invoice.products, 'subTotal')
      let taxableAmount = (stotal - discount) + isNaN(invoice.shippingCharge) ? invoice.shippingCharge : 0
      tax = CalculateTax(taxableAmount, 18);
      total = taxableAmount + tax
    } else {
      discount = CalculateSum(invoice.products, 'discount')
      stotal = CalculateSum(invoice.products, 'subTotal')
      total = (stotal - discount) + isNaN(invoice.shippingCharge) ? invoice.shippingCharge : 0
    }
    //const { subtotal, discount, tax, total } = CalculateInvoice(isTaxable, invoice)
    console.log("UE ", [stotal, discount, tax, total])
    setInvoice({
      ...invoice,
      subTotal: stotal,
      discount: discount,
      tax: tax,
      total: total,
    })
  }, [isTaxable])

  const calculateAll = ({ charges }) => {
    let [stotal, discount, tax, total] = [0.0, 0.0, 0.0, 0.0]
    if (isTaxable) {
      discount = CalculateSum(invoice.products, 'discount')
      stotal = CalculateSum(invoice.products, 'subTotal')
      let taxableAmount = (stotal) + (isNaN(charges) ? charges : 0)
      tax = CalculateTax(taxableAmount, 18);
      total = parseFloat(taxableAmount) + parseFloat(tax)
    } else {
      discount = CalculateSum(invoice.products, 'discount')
      stotal = CalculateSum(invoice.products, 'subTotal')
      total = stotal + isNaN(charges) ? charges : 0
    }
  }


  const handleShipping = (e) => {
    if ("shippingCharge".includes(e.target.name)) {
      var charges = e.target.value;
      let [stotal, discount, tax, total] = [0.0, 0.0, 0.0, 0.0]
      let newProduct = [...invoice.products]
      if (isTaxable) {
        discount = CalculateSum(invoice.products, 'discount')
        stotal = CalculateSum(invoice.products, 'subTotal')
        let taxableAmount = parseFloat(stotal) + + (isNaN(charges) ? 0.0 : parseFloat(charges))
        tax = CalculateTax(taxableAmount, 18);
        total = parseFloat(taxableAmount) + parseFloat(tax)
      } else {
        discount = CalculateSum(invoice.products, 'discount')
        stotal = CalculateSum(invoice.products, 'subTotal')
        total = parseFloat(stotal) + (isNaN(charges) ? 0.0 : parseFloat(charges))
        console.log("Remove ", [total, discount, stotal])
      }
      console.log("HandleShipping ", [charges, tax, total])
      setInvoice({
        ...invoice,
        products: newProduct,
        shippingCharge: charges,
        subTotal: stotal,
        discount: isNaN(discount) ? "" : discount,
        tax: tax,
        total: total.toFixed(2),
      })
    }

  }


  const handleInputs = (e) => {
    let newProduct = [...invoice.products]

    // if ("shippingCharge".includes(e.target.name)) {
    //   var val = e.target.value;
    //   console.log("ship :", invoice.shippingCharge, ": ", val)
    //   // setInvoice({ ...invoice, shippingCharge: e.target.value })
    //   setInvoice({ ...invoice, shippingCharge: val })

    // }

    if (Object.keys(productTemp).includes(e.target.name)) {
      if ('subTotal'.includes(e.target.name)) return
      let pid = e.target.dataset.id
      newProduct[pid][e.target.name] = e.target.value;
      newProduct[pid].subTotal = (newProduct[pid].quantity * newProduct[pid].price)
      if ('discount'.includes(e.target.name))
        newProduct[pid].subTotal = newProduct[pid].subTotal - + newProduct[pid].discount
    }

    let [stotal, discount, tax, total] = [0.0, 0.0, 0.0, 0.0]
    if (isTaxable) {
      discount = CalculateSum(invoice.products, 'discount')
      stotal = CalculateSum(invoice.products, 'subTotal')
      let taxableAmount = (stotal) + (isNaN(invoice.shippingCharge) ? invoice.shippingCharge : 0)
      tax = CalculateTax(taxableAmount, 18);
      total = parseFloat(taxableAmount) + parseFloat(tax)
    } else {
      discount = CalculateSum(invoice.products, 'discount')
      stotal = CalculateSum(invoice.products, 'subTotal')
      total = (stotal - discount) + isNaN(invoice.shippingCharge) ? invoice.shippingCharge : 0
    }
    console.log("Handle ", [stotal, discount, tax, total, invoice.shippingCharge])
    setInvoice({
      ...invoice,
      products: newProduct,
      subTotal: stotal,
      discount: isNaN(discount) ? "" : discount,
      tax: tax,
      total: total,
    })

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
            handleItem={handleInputs} products={invoice.products} />
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
          <div className="row align-items-center">
            <div className="col-6 col-md-8  "><p className='mb-1 fw-bold float-end'>Sub Total :</p></div>
            <div className="col-6 col-md-4  pe-4"><p className='mb-1  float-end'> {invoice.subTotal}</p></div>
            <div className="col-6 col-md-8  "><p className='mb-1 fw-bold float-end'>Discount :</p></div>
            <div className="col-6 col-md-4  pe-4"><p className='mb-1  float-end'> {invoice.discount}</p></div>
            <div className="col-6 col-md-8  "><p className='mb-1 fw-bold float-end'>Shipping :</p></div>
            <div className="col-6 col-md-4  ">
              <input type="number" className="form-control form-control-sm" name='shippingCharge'
                value={invoice.shippingCharge} onChange={handleShipping}
                placeholder="Shipping" aria-label="Shipping" />
            </div>
            <div className="col-6 col-md-8  "><p className='mb-1 fw-bold float-end'>TAX/VAT 18% :</p></div>
            <div className="col-6 col-md-4  pe-4"><p className='mb-1  float-end'>{invoice.tax}</p></div>
            <div className="col-6 col-md-8  ">
              <div className="form-check form-check-reverse float-end">
                <label className="form-check-label fw-semibold" htmlFor="removeTax">
                  Remove TAX/VAT
                </label>
                <input className="form-check-input " type="checkbox" name='removeTax' id="removeTax"
                  onChange={() => { setIsTaxable(!isTaxable) }} value={isTaxable} />
              </div>
            </div>
            <div className="col-6 col-md-8  "><p className='mb-1 fw-bold float-end'>Total :</p></div>
            <div className="col-6 col-md-4 pe-4"><p className='mb-1  float-end'>{invoice.total}</p></div>
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