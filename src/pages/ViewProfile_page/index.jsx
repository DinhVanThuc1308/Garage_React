import React, { useEffect } from 'react';
import Slide_bar from '../../components/Slider_bar';
import ViewProfile from '../../components/ViewProfile/ViewProfile';
import axiosInstance from '../../shared/services/http-client';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

function ViewProfile_page() {
  const auth = useContext(AuthContext);
  const nav = useNavigate();

  const [res, setRes] = useState(null);

  useEffect(() => {
    axiosInstance.get('users/me?populate=role,avatar').then(res => {
      setRes(res);
    });
  }, []);

  //   const myObject = { name: {res}, age: 30 };
  if (res !== null) {
    return (
      <div className="ViewProfile_page">
        <Slide_bar>
          <ViewProfile myProp={res}></ViewProfile>
          <Button
            type="primary"
            onClick={() => {
              auth.logout();
              nav('/');
            }}
          >
            Logout
          </Button>
        </Slide_bar>
      </div>
    );
  }
}

export default ViewProfile_page;
