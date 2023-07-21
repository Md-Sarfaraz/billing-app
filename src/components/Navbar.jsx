import React from 'react'
import { HiMiniBars3BottomLeft } from 'react-icons/hi2'
import { MdOutlineNotifications } from 'react-icons/md'
import { BiTask } from 'react-icons/bi'
import { AiOutlineSetting } from 'react-icons/ai'


const Navbar = ({ setToggle, IsOpen }) => {


    return (
        <nav className="bg-indigo-50 shadow-sm pt-2">
            <div className="container-fluid">
                <div className="gap-4 d-flex pt-1 pb-2" >
                    <div className="nav-link me-auto hover p-2 ms-2" onClick={() => { setToggle(!IsOpen) }}>
                        <HiMiniBars3BottomLeft className=' fw-bolder ' style={{ height: "26px", width: "26px" }} />
                    </div>
                    <div className=" p-2  hover" >
                        <MdOutlineNotifications className=' fw-bolder ' style={{ height: "26px", width: "26px" }} />
                    </div>
                    <div className=" p-2 hover" >
                        <BiTask className=' fw-bolder  ' style={{ height: "26px", width: "26px" }} />
                    </div>
                    <div className=" me-2 p-2 hover" >
                        <AiOutlineSetting className=' fw-bolder ' style={{ height: "26px", width: "26px" }} />
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar