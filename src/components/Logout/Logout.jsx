import React from "react";
import './Logout.css';
import Header_avt from '../Header/asset/img/avt2.jpg';
import Logout_img from './asset/img/logout_img.png';
import { AuthContext } from '../../context/auth';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";

function Logout() {
    const auth = useContext(AuthContext);
    const nav = useNavigate();
    return (
        <div className="container">
            <div className="Logout_UI">
                <div className="logout_item1">
                    <img className="logout_avt" src={Header_avt}></img>
                    <p className="item1_text">Ha Nguyen</p>
                </div>

                <div className="logout_item2">
                    <img className="logout_img" src={Logout_img}></img>
                    <button className='Logout_button' onClick={() => {
                        auth.logout();
                        nav('/');
                    }}>
                        <div className="Logout_text">Logout</div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Logout;