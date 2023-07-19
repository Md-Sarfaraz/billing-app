import React, { useState } from 'react'
import { HiMiniBars3BottomLeft } from 'react-icons/hi2'
import { MdOutlineNotifications } from 'react-icons/md'
import { BiTask } from 'react-icons/bi'
import { AiOutlineSetting } from 'react-icons/ai'


const Navbar = ({setToggle, IsOpen}) => {
  

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow ">
            <div className="container-fluid py-1">
                <div className="collapse navbar-collapse gap-4" >
                    <a className="nav-link me-auto" onClick={() => { setToggle(!IsOpen) }}>
                        <HiMiniBars3BottomLeft className='align-middle fw-bolder ms-2' style={{ height: "26px", width: "26px" }} />
                    </a>
                    <a className="nav-link " >
                        <MdOutlineNotifications className='align-middle fw-bolder me-2' style={{ height: "24px", width: "24px" }} />
                    </a>
                    <a className="nav-link " >
                        <BiTask className='align-middle fw-bolder me-2' style={{ height: "24px", width: "24px" }} />
                    </a>
                    <a className="nav-link " >
                        <AiOutlineSetting className='align-middle fw-bolder me-2' style={{ height: "24px", width: "24px" }} />
                    </a>
                </div>
            </div>
        </nav>

    )
}

export default Navbar