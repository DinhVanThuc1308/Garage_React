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

  function getAPI(data) {
    axios.post(API, data, {
    }).then((res) => {
      // const newData = res.data;
      console.log(res.data);
      localStorage.setItem("data", JSON.stringify(res.data.jwt));
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const account = {
      identifier: data.get("email"),
      password: data.get("password"),
    };
    console.log(account);
    getAPI(account);
  };

  // dùng axios để gọi api

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="header-login">
          <h3>Welcome</h3>
          <p>login to your account</p>
        </div>
        <div className="body-login">
          <label>Email:</label>
          <br />
          <input type="text" id="email" name="email" placeholder="Email" />
          <br />
          <label>Password:</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <br />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>

  );

  // hiển thị dữ liệu ra ngoài màn hình
  // return (


}
