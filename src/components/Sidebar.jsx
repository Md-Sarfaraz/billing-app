import React, { useState } from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import { BiSolidDashboard, BiUser } from 'react-icons/bi'
import { FaFileInvoice } from 'react-icons/fa'
import { BsFillBoxFill } from 'react-icons/bs'
import { IoIosPeople } from 'react-icons/io'
import { RiAdminFill } from 'react-icons/ri'
import { FiLogOut } from 'react-icons/fi'


const Sidebar = ({ IsOpen }) => {


    return (<nav id="sidebar" className={(IsOpen ? " " : "d-none") + " sidebar "} style={{ transition: "0.7s" }} >
        <div className="d-flex flex-column"
            style={{ height: "100%", overflow: "hidden" }}>
            <Link className="sidebar-brand fs-4 text-white px-3 py-2 fw-semibold shadow-lg" to="/">
                <span className="align-middle">AdminKit</span>
            </Link >
            <div className="d-flex flex-column overflow-auto" style={{ padding: 0 }}>
                <ul className="sidebar-nav">
                    <li className="sidebar-header">MAIN</li>
                    <li className="sidebar-item active">
                        <Link className="sidebar-link" to="/">
                            <BiSolidDashboard />      <span className="align-middle">Dashboard</span>
                        </Link >
                    </li>
                    <li className="sidebar-item">
                        <Link className="sidebar-link" to="/profile">
                            <BiUser />  <span className="align-middle">Profile</span>
                        </Link >
                    </li>
                    <li className="sidebar-header">INVOICE</li>
                    <li className="sidebar-item">
                        <Link className="sidebar-link" to="/invoice/createinvoice">
                            <FaFileInvoice /> <span className="align-middle">Create New Invoice</span>
                        </Link >
                    </li>
                    <li className="sidebar-item">
                        <Link className="sidebar-link" to="/invoice/list">
                            <span className="align-middle">Invoice List</span>
                        </Link >
                    </li>
                    <li className="sidebar-header">PRODUCT</li>
                    <li className="sidebar-item">
                        <Link className="sidebar-link" to="/product/addproduct">
                            <span className="align-middle">Add Product</span>
                        </Link >
                    </li>
                    <li className="sidebar-item">
                        <Link className="sidebar-link" to="/product/list">
                            <BsFillBoxFill />  <span className="align-middle">Product List</span>
                        </Link >
                    </li>
                    <li className="sidebar-header">CUSTOMER</li>
                    <li className="sidebar-item">
                        <Link className="sidebar-link" to="/customer/addcustomer">
                            <span className="align-middle">Add New Customer</span>
                        </Link >
                    </li>
                    <li className="sidebar-item">
                        <Link className="sidebar-link" to="/customer/list">
                            <IoIosPeople />    <span className="align-middle">Manage Customers</span>
                        </Link >
                    </li>
                    <li className="sidebar-header">SYSTEM MANAGEMENT</li>
                    <li className="sidebar-item">
                        <Link className="sidebar-link" to="/system/adduser">
                            <span className="align-middle">Add User</span>
                        </Link >
                    </li>
                    <li className="sidebar-item">
                        <Link className="sidebar-link" to="system/listuser">
                            <RiAdminFill />  <span className="align-middle">Manage Users</span>
                        </Link >
                    </li>
                </ul>
                <div className="sidebar-bottom ">
                    <div className="sidebar-bottom-content pt-4 pb-2">
                        <Link className="sidebar-link" to="/logout">
                            <FiLogOut />  <span className="align-middle">Logout</span>
                        </Link >
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