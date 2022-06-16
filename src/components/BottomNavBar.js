import React from "react";
import {RiHomeLine} from 'react-icons/ri'
import {AiOutlineBell} from 'react-icons/ai'
import {HiOutlineUser} from 'react-icons/hi'
import {CgBox} from  'react-icons/cg'
import './BottomNavbar.css'

const BottomNavBar = () => {
    return(
        <nav className="BottomNavBar">
            <ul>
                <li>
                    <RiHomeLine className="icon"/>
                </li>
                <li className="notify">
                    <AiOutlineBell className="icon" />
                </li>
                <li>
                    <HiOutlineUser className="icon"/>
                </li>
                <li>
                    <CgBox className="icon"/>
                </li>
            </ul>
        </nav>
    )
}

export default BottomNavBar