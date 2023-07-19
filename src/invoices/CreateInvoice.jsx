import React, { useState } from 'react'
import { SlCalender } from 'react-icons/sl'
import Form from 'react-bootstrap/Form'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


const CreateInvoice = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className='p-5'>
      <h1 className='h3 mb-3'>Create New Invoice</h1>
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
    </div>
  )
}

export default CreateInvoice