import React from 'react';
import Slide_bar from '../../components/Slider_bar';
import ViewProfile from '../../components/ViewProfile/ViewProfile';



function Profile_page() {
    return (
        <div className="Profile_page">
            <Slide_bar>
                <ViewProfile></ViewProfile>
            </Slide_bar>

        </div>
    );

}

export default Profile_page;
