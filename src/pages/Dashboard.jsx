import React from 'react'
import {LiaFileInvoiceDollarSolid} from "react-icons/lia"

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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-truck align-middle"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
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
                   <LiaFileInvoiceDollarSolid style={{width: "24px", height: "24px"}}/>
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
                  <div class="stat text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart align-middle"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
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
                  <div class="stat text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users align-middle"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
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