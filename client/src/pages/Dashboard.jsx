import React from 'react'
import { LiaFileInvoiceDollarSolid } from "react-icons/lia"
import { FiTruck } from 'react-icons/fi'
import { BiCart } from 'react-icons/bi'
import {LuUsers} from 'react-icons/lu'

const Dashboard = () => {
  return (
    <div className='p-5'>
      <h1 className='h3 mb-3'>Heading</h1>
      <div className='row'>
        <div className='col-xl-3 col-lg-6 mb-4'>
          <div className="card border border-0 shadow-sm">
            <div className="card-body">
              <div className="row">
                <div className="col mt-0">
                  <h5 className="card-title">Sales Amount</h5>
                </div>
                <div className="col-auto">
                  <div className="stat text-primary">
                    <FiTruck />
                  </div>
                </div>
              </div>
              <h1 className="mt-1 mb-3 cursor-d">2.382</h1>
              <div className="mb-0">
                <span className="text-danger"> <i className="mdi mdi-arrow-bottom-right"></i> -3.65% </span>
                <span className="text-muted">Since last week</span>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-3 col-lg-6 mb-4'>
          <div className="card border border-0 shadow-sm">
            <div className="card-body">
              <div className="row">
                <div className="col mt-0">
                  <h5 className="card-title">Total Invoices</h5>
                </div>
                <div className="col-auto">
                  <div className="stat text-primary">
                    <LiaFileInvoiceDollarSolid style={{ width: "24px", height: "24px" }} />
                  </div>
                </div>
              </div>
              <h1 className="mt-1 mb-3">2.382</h1>
              <div className="mb-0">
                <span className="text-danger"> <i className="mdi mdi-arrow-bottom-right"></i> -3.65% </span>
                <span className="text-muted">Since last week</span>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-3 col-lg-6 mb-4'>
          <div className="card border border-0 shadow-sm">
            <div className="card-body">
              <div className="row">
                <div className="col mt-0">
                  <h5 className="card-title">Total Products</h5>
                </div>
                <div className="col-auto">
                  <div className="stat text-primary">
                    <BiCart />
                  </div>
                </div>
              </div>
              <h1 className="mt-1 mb-3">2.382</h1>
              <div className="mb-0">
                <span className="text-danger"> <i className="mdi mdi-arrow-bottom-right"></i> -3.65% </span>
                <span className="text-muted">Since last week</span>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-3 col-lg-6 mb-4'>
          <div className="card border border-0 shadow-sm">
            <div className="card-body">
              <div className="row">
                <div className="col mt-0">
                  <h5 className="card-title">Total Customers</h5>
                </div>
                <div className="col-auto">
                  <div className="stat text-primary">
                    <LuUsers />
                  </div>
                </div>
              </div>
              <h1 className="mt-1 mb-3">2.382</h1>
              <div className="mb-0">
                <span className="text-danger"> <i className="mdi mdi-arrow-bottom-right"></i> -3.65% </span>
                <span className="text-muted">Since last week</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Dashboard