import React from "react";
import Slide_bar from "../../components/Slider_bar";
import CreateOwner from "../../components/CreateOwner";

function CreateOwner_page() {
    return (
        <div className="CreateOwner_page">
            <Slide_bar>
                <CreateOwner></CreateOwner>
            </Slide_bar>
        </div>

    );
}

export default CreateOwner_page;