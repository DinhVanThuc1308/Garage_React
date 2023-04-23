import React, { useEffect } from 'react';
import Slide_bar from '../../components/Slider_bar';
import ViewProfile from '../../components/ViewProfile/ViewProfile';
import axiosInstance from '../../shared/services/http-client';
import { useState } from 'react';

function ViewProfile_page() {
  
  const [res, setRes] = useState(null);

  useEffect(() => {
    axiosInstance.get('users/me?populate=role,avatar').then(res => {
      setRes(res);
    });
  }, []);

//   const myObject = { name: {res}, age: 30 };
 if(res !== null){
    return (
        <div className="ViewProfile_page">
          <Slide_bar>
            <ViewProfile myProp={res}></ViewProfile>
          </Slide_bar>
        </div>
      );
}
}

export default ViewProfile_page;
