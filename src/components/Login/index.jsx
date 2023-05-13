import React from "react";
import axios from "axios";
import "./style.css";
export default function Login() {


  const API = "https://edison-garage-api.savvycom.xyz/api/auth/local";
  //   const newData = {};
  // Lưu dữ liệu vào localsotrage
  //   const saveData = (data) => {
  //     // let a = localStorage.setItem("data", JSON.stringify(data));
  //     // console.log(a);
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const emailRegex = /^\S+@\S+\.\S+$/;
  
    if (!email || !password) {
      alert("Please fill in both email and password fields");
      return;
    }
  
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
  
    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }
  
    const account = {
      identifier: email,
      password: password,
    };
    
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

  // dùng axios để gọi api

//   return (
//     <div className="login">
//       <form onSubmit={handleSubmit} >
//         <div className="header-login">
//           <h3>Welcome</h3>
//           <p>login to your account</p>
//         </div>
//         <div className="body-login">
//           <label>Email:</label>
//           <br />
//           <input type="text" id="email" name="email" placeholder="Email" />
//           <br />
//           <label>Password:</label>
//           <br />
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Password"
//           />
//           <br />
//           <button type="submit">Login</button>
//         </div>
//       </form>
//     </div>

//   );




// }


// import {
//     Button,
//     Form,
//     Input,
//   } from 'antd';
//   import { useState } from 'react';
  
  
  // const formItemLayout = {
  //   labelCol: {
  //     xs: {
  //       span: 24,
  //     },
  //     sm: {
  //       span: 8,
  //     },
  //   },
  //   wrapperCol: {
  //     xs: {
  //       span: 24,
  //     },
  //     sm: {
  //       span: 16,
  //     },
  //   },
  // };
  // const tailFormItemLayout = {
  //   wrapperCol: {
  //     xs: {
  //       span: 24,
  //       offset: 0,
  //     },
  //     sm: {
  //       span: 16,
  //       offset: 8,
  //     },
  //   },
  // };
//   const App = () => {
//     const [form] = Form.useForm();
//     const onFinish = values => {
//       console.log('Received values of form: ', values);
//     };
  
  
//     const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  
  
//     return (
//       <Form 
  
//         form={form}
//         name="register"
//         onFinish={onFinish}
//         initialValues={{
//           residence: ['zhejiang', 'hangzhou', 'xihu'],
//           prefix: '86',
//         }}
//         style={{
//           maxWidth: 600,
//         }}
  
//       >
//         <Form.Item
//           name="email"
//           label="E-mail"
//           rules={[
//             {
//               type: 'email',
//               message: 'The input is not valid E-mail!',
//             },
//             {
//               required: true,
//               message: 'Please input your E-mail!',
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>
  
//         <Form.Item
//           name="password"
//           label="Password"
//           rules={[
//             {
//               required: true,
//               message: 'Please input your password!',
//             },
//           ]}
//           hasFeedback
//         >
//           <Input.Password />
//         </Form.Item>
  
//         <Form.Item >
//           <Button type="primary" htmlType="submit">
//             Register
//           </Button>
//         </Form.Item>
//       </Form>
//     );
//   };
//   export default App;

}