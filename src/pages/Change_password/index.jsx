import React from "react";
import Slide_bar from "../../components/Slider_bar";
import ChangePassword from "../../components/ChangePassword";

function Change_pw_page() {
    return (
        <div className="Change_pw_page">
            <Slide_bar>
                <ChangePassword></ChangePassword>
            </Slide_bar>
        </div>
    );
}

export default Change_pw_page;