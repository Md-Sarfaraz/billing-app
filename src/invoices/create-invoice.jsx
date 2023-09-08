import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css";
import CustomerDetails from '../customers/customer-details';
import OrderDetailes from './order-detailes';
import { CalculateSum, CalculateTax } from '../utility/calculation';
import { customerTemp, shippingTemp, productTemp } from '../utility/template';


const CreateInvoice = () => {
  //const [startDate, setStartDate] = useState(new Date());
  const [isTaxable, setIsTaxable] = useState(true)
  const invoiceTypes = [
    { value: 'invoice', label: 'Invoice', color: '#00875A' },
    { value: 'qoute', label: 'Quote', color: '#253858' },
    { value: 'receipt', label: 'Receipt', color: '#666666' },
  ]

  
  
  const [invoice, setInvoice] = useState({
    id: "",
    invoiceNo: "",
    invoiceDate: new Date(),
    type: "",
    notes: "",
    subTotal: 0.0,
    tax: 0.0,
    total: 0.0,
    shippingCharge: 0.0,
    customer: customerTemp,
    shipping: shippingTemp,
    products: [productTemp],
  }
  )

  useEffect(() => {
    const [stotal, tax, total] = calculateAll(invoice.shippingCharge)
    console.log("UE ", [stotal, tax, total])
    var today = new Date();
    today.getUTCDate()
    console.log("UE Date : ", today.getUTCDate())
    console.log("UE Date : ", today.toLocaleDateString())
    setInvoice({
      ...invoice,
      subTotal: stotal,
      tax: tax,
      total: total,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTaxable])

  const calculateAll = (charges) => {
    let [subtotal, tax, total] = [0.0, 0.0, 0.0]
    if (isTaxable) {
      subtotal = CalculateSum(invoice.products, 'subTotal')
      let taxableAmount = parseFloat(subtotal) + + (isNaN(charges) ? 0.0 : parseFloat(charges))
      tax = CalculateTax(taxableAmount);
      total = parseFloat(taxableAmount) + parseFloat(tax)
      let ship = invoice.shippingCharge;
      console.log("taxable: ", { subtotal, taxableAmount, ship, tax, total })
    } else {
      subtotal = CalculateSum(invoice.products, 'subTotal')
      total = parseFloat(subtotal) + + (isNaN(charges) ? 0.0 : parseFloat(charges))
      let ship = invoice.shippingCharge;
      console.log("WithoutTax ", { total, subtotal, ship })
    }
    return [subtotal, tax, total];
  }

  const handleShippingCharges = (e) => {
    if ("shippingCharge".includes(e.target.name)) {
      var charges = e.target.value;
      let newProduct = [...invoice.products]
      const [stotal, tax, total] = calculateAll(charges)
      console.log("HandleShipping ", { charges, tax, total })
      setInvoice({
        ...invoice,
        products: newProduct,
        shippingCharge: charges,
        subTotal: stotal,
        tax: tax,
        total: total.toFixed(2),
      })
    }

  }

  const handleInputs = (e) => {
    let newProduct = [...invoice.products]

    if (Object.keys(productTemp).includes(e.target.name)) {
      if ('subTotal'.includes(e.target.name)) return
      let pid = e.target.dataset.id
      newProduct[pid][e.target.name] = e.target.value;
      newProduct[pid].subTotal = (newProduct[pid].quantity * newProduct[pid].price)
    }

    const [subtotal, tax, total] = calculateAll(0)
    setInvoice({
      ...invoice,
      products: newProduct,
      subTotal: subtotal,
      tax: tax,
      total: total,
    })
  }
  const handleCreateInvoice = (e) => {
    console.log(invoice)
  }

  const handleCustomer = (e) => {

    if (Object.keys(customerTemp).includes(e.target.name)) {
      const name = e.target.name;
      const val = e.target.value
      let newCustomer = { ...invoice.customer }
      newCustomer[name] = val;
      if (Object.keys(shippingTemp).includes(name)) {
        let newShipping = { ...invoice.shipping }
        newShipping[e.target.name] = e.target.value;

        setInvoice({ ...invoice, shipping: newShipping, customer: newCustomer })
      } else {
        setInvoice({ ...invoice, customer: newCustomer })
      }
    }
  }

  const handleSelectExisting = (obj) => {
    Object.keys(obj).forEach(key => {
      if (obj[key] === null) obj[key] = ""
    });
    setInvoice({
      ...invoice, customer: obj, shipping: {
        id: obj.id,
        fullName: obj.fullName,
        address1: obj.address1,
        address2: obj.address2,
        city: obj.city,
        pincode: obj.pincode
      }
    })
    console.log("Select Existing : ", obj)
  }

  const handleShipping = (e) => {
    if (Object.keys(shippingTemp).includes(e.target.name)) {
      let newShipping = { ...invoice.shipping }
      newShipping[e.target.name] = e.target.value;
      setInvoice({ ...invoice, shipping: newShipping })
    }
  }

  const addProductRow = () => {
    let productRow = { ...productTemp, id: Date.now(), }
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
      <div className="d-flex justify-content-between">
        <h3 className='h3 mb-3 text-secondary'>Create New Invoice</h3>
        <h3 className='h5  text-secondary'>Last Invoice Number : MD-5945</h3>
      </div>
      <div className="d-flex justify-content-end w-100">
        <div className="d-flex flex-column">
          <div className="d-flex gap-3 justify-content-end">
            <div className="w-25 ">
              <h5 className="h5 ">Select Type: </h5>
            </div>
            <div className="form-group w-25">
              <div className="input-group ">
                {/* //input-group input-group-sm
                <select name="invoice_type" id="invoice_type" className="form-select "
                  onChange={(type) => setInvoice({ ...invoice, type: type })}  >
                  <option value="invoice" defaultValue={""}>Invoice</option>
                  <option value="quote">Quote</option>
                  <option value="receipt">Receipt</option>
                </select> 
                */}
                <Select className=" "
                  options={invoiceTypes} defaultValue={invoiceTypes[1]}
                //onChange={(e) => setInvoice({ ...invoice, type: e })}
                //onMenuClose={(e) => console.log(e)}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group mb-3">
                <DatePicker className='border rounded' placeholderText="Invoice Date"
                  selected={invoice.invoiceDate} onChange={(date) => setInvoice({ ...invoice, invoiceDate: date })}
                  dateFormat="dd-MM-yyyy" showIcon isClearable />
              </div>
            </ div>
            <div className="form-group ">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">#MD</span>
                <input type="text" className="form-control" placeholder="Invoice Number"
                  value={invoice.invoiceNo} onChange={(num) => setInvoice({ ...invoice, invoiceNo: num })} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <CustomerDetails selectExisting={true} handleSelectExisting={handleSelectExisting}
          customer={invoice.customer} handleCustomer={handleCustomer}
          shipping={invoice.shipping} handleShipping={handleShipping} />
        <div className="mt-3 col-12 ">
          <OrderDetailes addRow={addProductRow} deleteRow={deleteItemRow}
            handleItem={handleInputs} products={invoice.products} />
        </div>
      </div>


      <div className="row mt-4">
        <div className="col-md-6 col-12 ">
          <div className="form-floating">
            <textarea className="form-control" style={{ "height": "8rem" }} name={invoice.notes}
              onChange={(e) => setInvoice({ ...invoice, notes: e.target.value })}
              placeholder="Additional Notes" id="additionalnotes"></textarea>
            <label htmlFor="floatingTextarea">Additional Notes</label>
          </div>
        </div>
        <div className="col-md-6 col-12 ">
          <div className="row align-items-center">
            <div className="col-6 col-md-8  "><p className='mb-1 fw-bold float-end'>Sub Total :</p></div>
            <div className="col-6 col-md-4  pe-4"><p className='mb-1  float-end'> {invoice.subTotal}</p></div>

            <div className="col-6 col-md-8  "><p className='mb-1 fw-bold float-end'>Shipping :</p></div>
            <div className="col-6 col-md-4  ">
              <input type="number" className="form-control form-control-sm" name='shippingCharge'
                value={invoice.shippingCharge} onChange={handleShippingCharges}
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
          <button type="button" className="btn btn-success float-end"
            onClick={handleCreateInvoice}>Create Invoice</button>
        </div>
      </div>
    </div>
  )
}

export default CreateInvoice