import React, { useState } from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { BiSolidDashboard } from 'react-icons/bi'
import { FaFileInvoice } from 'react-icons/fa'
import { BsFillBoxFill } from 'react-icons/bs'
import { IoIosPeople } from 'react-icons/io'
import { RiAdminFill } from 'react-icons/ri'


const Sidebar = ({ children }) => {
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


    return (
        <div className="d-flex">
            <div className="bg-dark vh-100" style={{ width: IsOpen ? "300px" : "50px" }}>
                <div className="d-flex align-items-center px-3 py-4">
                    <h1 className={(IsOpen ? "" : "") + "fs-3 fw-bold "}>Invoice System</h1>
                    <div className="d-flex fs-3 ms-3 ">
                        <FaBars onClick={toggle} className='' />
                    </div>
                </div>
                {
                    // d-flex text-decoration-none px-3 py-2 gap-3
                    menuItem.map((item, index) => {
                        return (<div className='sidebar-item px-3 px-1' key={index}>
                            <Link to={item.path} className='d-flex fs-6 text-decoration-none px-3 py-2 gap-3 '                            >
                                <div className="icon">{item.icon}</div>
                                <div className="link-text">{item.name}</div>

                            </Link>
                        </div>)
                    })
                }

            </div>

            <main className="p-1">
                {children}
            </main>
        </div>
    )
}

export default Sidebar