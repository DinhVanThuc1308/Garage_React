import React, { useState } from "react";
import menu_icon from '../Header/asset/img/Menu_icon.png';
import Header_avt from '../Header/asset/img/avt2.jpg'
import './Header.css';
import Logout from "../Logout/Logout";

function Header_content() {
    const [showLogout, setShowLogout] = useState(false);

    const EClick = () => {
        setShowLogout(!showLogout);
    };
    return (
        <div className="container_mini_profile">
            <div onClick={EClick} className="header__mini_profile">
                <img className="header_avt" src={Header_avt} alt="Profile Avatar" />
                <div className="header__text">
                    <p className="header__text1">Ha Nguyen</p>
                    <p className="header__text2">Admin</p>
                </div>
            </div>

            {showLogout && <Logout style={{

            }} />}
        </div>
    );
}

export default Header_content;