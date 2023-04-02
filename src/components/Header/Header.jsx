import React from "react";
import menu_icon from '../Header/asset/img/Menu_icon.png'
import Header_avt from '../Header/asset/img/avt2.jpg'
import './Header.css';


function Header() {
    return (
        <div className="header">
            <div className="header__menu">
                <img className="header__menu_icon" src={menu_icon}></img>
            </div>

            <div className="header__mini_profile">
                <img className="header_avt" src={Header_avt}></img>

                <div className="header__text">
                    <p className="header__text1" >Ha Nguyen</p>
                    <p className="header__text2">Admin</p>
                </div>

            </div>
        </div>
    );
}

export default Header;