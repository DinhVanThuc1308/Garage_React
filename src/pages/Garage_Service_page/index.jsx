import TableService from "../../components/Table_Garage_Service";
import React from "react";
import Slide_bar from "../../components/Slider_bar";

function GarageService_page() {
    return (
        <div className="GarageService_page" >


            <Slide_bar>
                <div style={{ backgroundColor: "#fff", padding: 16, borderRadius: 12 }}>
                    
                    <div style={{ padding: '30px' }}></div>
                    <TableService></TableService>
                </div>
            </Slide_bar>

        </div>
    );
}
export default GarageService_page;