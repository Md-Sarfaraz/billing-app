import React, { useState } from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import { BiSolidDashboard, BiUser } from 'react-icons/bi'
import { FaFileInvoice } from 'react-icons/fa'
import { BsFillBoxFill } from 'react-icons/bs'
import { IoIosPeople } from 'react-icons/io'
import { RiAdminFill } from 'react-icons/ri'


const Sidebar = () => {
    const [IsOpen, setIsOpen] = useState(true)
    const toggle = () => { setIsOpen(!IsOpen); console.log("Clock") }




    return (<nav id="sidebar" className="sidebar">
        <div className="d-flex flex-column"          
            style={{ height: "100%", overflow: "hidden" }}>
            <a className="sidebar-brand fs-4 text-white p-3 fw-semibold" href="index.html">
                <span className="align-middle">AdminKit</span>
            </a>
            <div className="d-flex flex-column overflow-auto" style={{ padding: 0 }}>
                <ul className="sidebar-nav">
                    <li className="sidebar-header">
                        MAIN
                    </li>
                    <li className="sidebar-item active">
                        <a className="sidebar-link" href="index.html">
                        <BiSolidDashboard />      <span className="align-middle">Dashboard</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-link" href="pages-profile.html">
                          <BiUser/>  <span className="align-middle">Profile</span>
                        </a>
                    </li>
                    <li className="sidebar-header">
                        INVOICE
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="ui-buttons.html">
                        <FaFileInvoice /> <span className="align-middle">Create New Invoice</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="ui-forms.html">
                            <span className="align-middle">Invoice List</span>
                        </a>
                    </li>
                    <li className="sidebar-header">
                        PRODUCT
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="charts-chartjs.html">
                            <span className="align-middle">Add Product</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="maps-google.html">
                        <BsFillBoxFill />  <span className="align-middle">Product List</span>
                        </a>
                    </li>
                    <li className="sidebar-header">
                        CUSTOMER
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="charts-chartjs.html">
                            <span className="align-middle">Add New Customer</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="maps-google.html">
                        <IoIosPeople />    <span className="align-middle">Manage Customers</span>
                        </a>
                    </li>
                    <li className="sidebar-header">
                        SYSTEM MANAGEMENT
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="charts-chartjs.html">
                            <span className="align-middle">Add User</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="maps-google.html">
                        <RiAdminFill />  <span className="align-middle">Manage Users</span>
                        </a>
                    </li>
                </ul>

                <div className="sidebar-bottom">
                    <div className="sidebar-bottom-content">

                    </div>
                </div>

            </div>
            {/* Scroll */}
            {/* <div class="simplebar-track simplebar-horizontal" style={{visibility: "hidden"}}>
                <div class="simplebar-scrollbar" style={{width: 0, display: "none"}}>
                </div>
            </div>
            <div class="simplebar-track simplebar-vertical" style={{visibility: "visible"}}>
                <div class="simplebar-scrollbar" style={{height: "408px", transform: "translate3d(0px, 0px, 0px)", display: "block"}}>
                </div>
            </div> */}
            {/* Scroll */}
        </div>

    </nav>
    )
}

export default Sidebar