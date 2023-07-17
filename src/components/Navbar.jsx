import React from 'react'
import { HiMiniBars3BottomLeft } from 'react-icons/hi2'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
                <div className="" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link " ><HiMiniBars3BottomLeft style={{ height: "26px", width: "26px" }} /></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/#">Action</a></li>
                                <li><a className="dropdown-item" href="/#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/#">Something else here</a></li>
                            </ul>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>

    )
}

export default Navbar