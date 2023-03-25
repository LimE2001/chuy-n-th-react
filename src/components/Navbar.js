import React from "react";
import { Link } from "react-router-dom";
const Navbar = () =>{
    return(
        <nav>
            <ul className='nav-items'>
                <div class="menu"><i id="" class="fa-solid fa-house-laptop ic1"></i></div>
                <li>
                    <div className='tp'>
                        <span class="icon2 icon-1"><i class="ri-dashboard-fill"></i></span>
                        <Link to="/">Dashboard</Link>
                    </div>
                </li>
                <li>
                    <div className='tp'>
                        <span class="icon2 icon-2"><i class="ri-home-4-fill"></i></span>
                        <Link to="/room">Room</Link>
                    </div>
                </li>
                <li>
                    <div className='tp'>
                        <span class="icon2 icon-3"><i class="ri-device-fill"></i></span>
                        <Link to="/devices">Devices</Link>
                    </div>
                </li>
                <li>
                    <div className='tp'>
                        <span class="icon2 icon-4"><i class="ri-shield-keyhole-fill"></i></span>
                        <Link to="/security">Security</Link>
                    </div>
                </li>
                <li>
                    <div className='tp'>
                        <span class="icon2 icon-5"><i class="ri-bar-chart-box-fill"></i></span>
                        <Link to="/statistic">Statistic</Link>
                    </div>
                </li>
            </ul>
            <ul className='nav-items-bt'>
                <li>
                    <div className='bt'>
                        <span class="icon2 icon-7"><i class="ri-logout-box-r-line"></i></span>
                        <Link to="/logout">Logout</Link>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;

