import React, { useContext, useState } from "react";
import axios from "axios";
import "./login.css";
import { Button, Form, Input, message } from 'antd';
import { AuthContext } from "../../../context/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const auth = useContext(AuthContext);
  const nav = useNavigate();
  const API = "https://edison-garage-api.savvycom.xyz/api/auth/local";
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const account = {
        identifier: values.username,
        password: values.password,
      };
      const response = await axios.post(API, account);
      auth.setKey(response.data.jwt);
      nav('/');
    } catch (error) {
      message.error("Failed to login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
    },
  };

  return (
    <div className="login">
      <div className="header-login" style={{ paddingBottom: '50px' }}>
        <h3>Welcome</h3>
        <p>Login to your account</p>
      </div>
      <div className="body-login" >
        <Form onFinish={handleSubmit} {...formItemLayout} layout="vertical">
          <Form.Item
            name="username"
            label="Username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              }
            ]}
          >
            <Input name="username" placeholder="Username" />
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
            <Input.Password name="password" placeholder="Password" />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: '400px', height: '48px' }}
            loading={loading}
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}
