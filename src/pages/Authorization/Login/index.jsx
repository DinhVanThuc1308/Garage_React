import React, { useContext } from "react";
import axios from "axios";
import "./login.css";
import {
  Button,
  Form,
  Input,
} from 'antd';
import { AuthContext } from "../../../context/auth";
import { useNavigate } from "react-router-dom";
export default function Login() {

  const auth = useContext(AuthContext);
  const nav = useNavigate()

  const API = "https://edison-garage-api.savvycom.xyz/api/auth/local";
  const handleSubmit = (e) => {

    const account = {
      identifier: e.username,
      password: e.password,
    };

    getAPI(account);
  };

  function getAPI(data) {
    axios.post(API, data, {
    }).then((res) => {
      auth.setKey(res.data.jwt)
      nav('/profile')
    });
  }

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 12,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 24,
      },
    },
  };

  return (
    <div className="login">
      {/* <form onSubmit={handleSubmit} > */}
      <div className="header-login" style={{ paddingBottom: '50px' }}>
        <h3>Welcome</h3>
        <p>login to your account</p>
      </div>
      <div className="body-login" >
        {/* <label>Email:</label>
          <br />
          <input type="text" id="email" name="email" placeholder="Email" />
          <br />
          <label>Password:</label>
          <br /> */}
        <Form onFinish={handleSubmit} {...formItemLayout} layout="vertical">
          <Form.Item
            name="username"
            label="User Name"
            rules={[
              {
                required: true,
                message: 'Please input your user name!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >

            <Input name="username" id="username" placeholder="User Name" />

          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                min: 6,
                message: 'Password must be at least 6 characters long',
              }
            ]}
            hasFeedback
          >


            <Input.Password name="password" />
          </Form.Item>

          <Button type="primary" htmlType="submit" style={{ width: '400px', height: '48px' }} >Login</Button>

        </Form>


      </div>


    </div>

  );




}