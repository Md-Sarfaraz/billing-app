import React, { useState } from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { BiSolidDashboard } from 'react-icons/bi'
import { FaFileInvoice } from 'react-icons/fa'
import { BsFillBoxFill } from 'react-icons/bs'
import { IoIosPeople } from 'react-icons/io'
import { RiAdminFill } from 'react-icons/ri'


const Sidebar = () => {
    const [IsOpen, setIsOpen] = useState(true)
    const toggle = () => { setIsOpen(!IsOpen); console.log("Clock") }

    const menuItem = [
        {
            path: '/',
            name: "Dasboard",
            icon: <BiSolidDashboard />
        },
        {
            path: '/invoices',
            name: "Invoices",
            icon: <FaFileInvoice />
        }, {
            path: '/product',
            name: "Products",
            icon: <BsFillBoxFill />
        }, {
            path: '/profile',
            name: "Customers",
            icon: <IoIosPeople />
        }, {
            path: '/sysuser',
            name: "System User",
            icon: <RiAdminFill />
        },

    ]


    return (<nav id="sidebar" className="sidebar">
        <div className="simplebar-content-wrapper"
            tabindex="0" role="region" aria-label="scrollable content"
            style={{ height: "100%", overflow: "hidden scroll" }}>
            <a className="sidebar-brand" href="index.html">
                <span className="align-middle">AdminKit</span>
            </a>
            <div className="simplebar-content d-flex" style={{ padding: 0 }}>

                <ul className="sidebar-nav">
                    <li className="sidebar-header">
                        MAIN
                    </li>
                    <li className="sidebar-item active">
                        <a className="sidebar-link" href="index.html">
                            <span className="align-middle">Dashboard</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-link" href="pages-profile.html">
                            <span className="align-middle">Profile</span>
                        </a>
                    </li>
                    <li className="sidebar-header">
                        INVOICE
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="ui-buttons.html">
                            <span className="align-middle">Create New Invoice</span>
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
                            <span className="align-middle">Product List</span>
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
                            <span className="align-middle">Manage Customers</span>
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
                            <span className="align-middle">Manage Users</span>
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