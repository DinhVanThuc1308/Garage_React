import React from "react";
import axios from "axios";
import "./login.css";
import {
  Button,
  Form,
  Input,
} from 'antd';
export default function Login() {


  const API = "https://edison-garage-api.savvycom.xyz/api/auth/local";
  //   const newData = {};
  // Lưu dữ liệu vào localsotrage
  //   const saveData = (data) => {
  //     // let a = localStorage.setItem("data", JSON.stringify(data));
  //     // console.log(a);
  //   };
  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log('SUBMIT',e);
    const data = new FormData(e.currentTarget);
    const account = {
      identifier: data.get("email"),
      password: data.get("password"),
    };
    console.log(account);
    getAPI(account);
  };

  function getAPI(data) {
    axios.post(API, data, {
    }).then((res) => {
      // const newData = res.data;
      console.log(res.data);
      localStorage.setItem("data", JSON.stringify(res.data.jwt));
    });
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = new FormData(e.currentTarget);
  //   const account = {
  //     identifier: data.get("email"),
  //     password: data.get("password"),
  //   };
  //   console.log(account);
  //   getAPI(account);
  // };

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
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >

            <Input />

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


            <Input.Password />
          </Form.Item>

          <Button type="primary" htmlType="submit" style={{width:'400px',height:'48px'}} >Login</Button>

        </Form>

      </div>
      {/* </form> */}
    </div>

  );




}