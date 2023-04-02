import React from "react";
import './Slider_bar.css';
import sb_img from '../Slider_bar/asset/img/sb_img.png'
import sb_keybord_img from '../Slider_bar/asset/img/sb__keybord.png'


function Slider_bar() {
    return (
        <div className="Sb__container">
            <p className="sb__text">Menu</p>

            <div className="sb__list">
                <div className="sb__garage">
                    <div className="sb__garage-item">
                        <img className="sb__img-garage" src={sb_img}></img>
                        <p className="sb__list-text">Garage</p>
                    </div>
                    <div className="sb__keybord">
                        <img src={sb_keybord_img}></img>
                    </div>
                </div>
                <div className="sb__garage-owner">
                    <div className="sb__garage-item">
                        <img className="sb__img-garage" src={sb_img}></img>
                        <p className="sb__list-text">Garage-owner</p>
                    </div>
                    <div className="sb__keybord">
                        <img src={sb_keybord_img}></img>
                    </div>
                </div>
                <div className="sb__garage-staff">
                    <div className="sb__garage-item">
                        <img className="sb__img-garage" src={sb_img}></img>
                        <p className="sb__list-text">Garage-staff</p>
                    </div>
                    <div className="sb__keybord">
                        <img src={sb_keybord_img}></img>
                    </div>
                </div>
                <div className="sb__garage-services">
                    <div className="sb__garage-item">
                        <img className="sb__img-garage" src={sb_img}></img>
                        <p className="sb__list-text">Garage-services</p>
                    </div>
                    <div className="sb__keybord">
                        <img src={sb_keybord_img}></img>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Slider_bar;
