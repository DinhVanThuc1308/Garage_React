import React from "react";
import Update_Owner from "../../components/Update_owner/Update_Owner";
import Slide_bar from "../../components/Slider_bar";
import Footer_update_owner from "../../components/Footer_update_owner/Footer_update_owner";
import './Page_update_owner.css';

function Page_update_owner() {
    return (
        <Slide_bar>
            <div className="Page_update_owner">
                <Update_Owner></Update_Owner>
                <Footer_update_owner></Footer_update_owner>
            </div>

        </Slide_bar>
    );
}
export default Page_update_owner;