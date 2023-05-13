import React from 'react';
import { Layout, Menu, DatePicker, Upload, Button, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { useState,useEffect } from 'react';
import Header_avt from '../Header/asset/img/avt2.jpg';
import Icon from '../Slider_bar/asset/img/Vector.png';
import './style.css';
import moment from 'moment';
import axios from 'axios'
import axiosInstance from '../../shared/services/http-client.js';
import { Link } from 'react-router-dom';

const Update_Profile = () => {
  const [url, setUrl] = useState(localStorage.getItem('imageUrl') || false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const baseUrl="https://edison-garage-api.savvycom.xyz/"
  const handleOnChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnClickUpdate = async e => {
    e.preventDefault();
    
    const updatedUserData = {
      ...userData,
      url: url || userData.url,
      
    };
    
    console.log("updatedUserData: ", updatedUserData);
    try {
      const response = await axiosInstance.put(`users/${userData.id}`, {
        ...updatedUserData,
        dob: new Date(updatedUserData.dob).toISOString() ,// chuyển đổi giá trị dob sang định dạng ISO,\
        
      });
      
      console.log(response);
      message.success('Cập nhật thông tin thành công');
    } catch (error) {
      console.log(error);
      message.error('Có lỗi xảy ra khi cập nhật thông tin');
    }
  };

  useEffect(() => {
    async function fetchDataUser() {
      try {
        const response = await axiosInstance.get(`users/me?populate=role,avatar`);
        setUserData(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDataUser();
  }, []);

  const handleUploadAvatar = async ({ file }) => {
    const formData = new FormData();
    formData.append('files', file);
    setLoading(true);
    try {
      const response = await axiosInstance.post('upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(response);
      const url = response.url; // lấy đường dẫn ảnh từ phản hồi API
      localStorage.setItem('imageUrl', url); // lưu trữ URL vào localStorage
      
      setUrl(url); // cập nhật state với URL mới
      // setUserData({
      //   ...userData,
      //   url: url
      // }); // cập nhật lại giá trị userData
      message.success('Cập nhật ảnh đại diện thành công');
    } catch (error) {
      console.log(error);
      message.error('Có lỗi xảy ra khi cập nhật ảnh đại diện');
    } finally {
      setLoading(false);
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const avatarUrl = url || userData.url;
  return (
    <div class="container">
    <form onSubmit={handleOnClickUpdate} className='my-form'> 
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ display: 'flex', flex: 9, height: '100%' }}>
        <div
          style={{
            flexBasis: '50%',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width:'538px'
          }}
        >
          <div style={{ position: 'relative' }}>
          <Upload
  
  name="avatar"
  listType="picture-card"
  className="avatar-uploader"
  showUploadList={false}
  action="https://edison-garage-api.savvycom.xyz/api/upload"
  beforeUpload={() => false}
  onChange={handleUploadAvatar}
>
  
    <img
      src={localStorage.getItem('url')}
      alt="avatar"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
      }}
    />
  
</Upload>
<span
  className="icon"
  style={{
    position: 'absolute',
    top: '50px',
    left: '50px',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    
    
  }}
>
  <img src={Icon} alt="icon" />
</span>
          </div>
        </div>
        <div style={{ flexBasis: '50%', backgroundColor: '#FFFFFF' }}>
          <form style={{ display: 'flex', border: 0,width: '538px', height:'692' }}>
            <label htmlFor="name">Name:</label>
            <input
              editType={true}
              type="Textbox"
              isDisabled={true}
              id="name"
              name="name"
              placeholder="Nhập tên"
              value={userData.fullname}
              onChange={(e) => setUserData({...userData, fullname: e.target.value})}
              style={{ marginBottom: '20px',
              padding: '16px',
              background: '#EEEEEE',
              borderRadius: '8px',}}
            />

            <label htmlFor="email">Email:</label>
            <input
              className="silver-text"
              type="Textbox"
              id="email"
              name="email"
              placeholder="Nhập email"
              value={userData.email}
              onChange={(e) => setUserData({...userData, email: e.target.value})}
              style={{
                marginBottom: '20px',
                padding: '16px',
                background: '#EEEEEE',
                borderRadius: '8px',
              }}
            />

            <label htmlFor="userName">UserName:</label>
            <input
              className="silver-text"
              type="Textbox"
              id="userName"
              name="userName"
              placeholder="Nhập Username"
              value={userData.username}
              onChange={(e) => setUserData({...userData, username: e.target.value})}
              style={{
                marginBottom: '20px',
                padding: '16px',
                background: '#EEEEEE',
                borderRadius: '8px',
              }}
            />

            <div
              className="container"
              style={{ display: 'flex', height: '100%' }}
            >
              <div style={{ flexBasis: '50%', marginRight: 10, height: '100px' }}>
      <label htmlFor="DatePicker">Dob:</label>
      <DatePicker
  showTimezone={false}
  style={{ width: '170px', padding: '9px' }}
  defaultValue={userData.dob ? moment(userData.dob, 'YYYY-MM-DD') : null}
  value={userData.dob ? moment(userData.dob, 'YYYY-MM-DD') : null}
  format={'YYYY-MM-DD'}
  disabledDate={(current) => current && current > moment().endOf('day')}
  onChange={(date, dateString) => setUserData({...userData, dob: dateString})}
  inputReadOnly={true}
/>
    </div>
              <div style={{ flexBasis: '50%' }}>
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="Textbox"
                  id="phone"
                  name="phone"
                  placeholder="Nhập PhoneNumber"
                  value={userData.phoneNumber}
                  style={{
                    marginBottom: '10px',
                    padding: '16px',
                    width: '220px',
                  }}
                />
              </div>
            </div>

            <label htmlFor="address">Address:</label>
            <input
              type="Textbox"
              id="address"
              name="address"
              placeholder="Nhập address"
              value={userData.address}
              style={{ marginBottom: '20px', padding: '16px' }}
            />

<label htmlFor="role">Role</label>
    <input
      className="silver-text"
      type="Textbox"
      id="role"
      name="role"
      value={userData.role?.name}
      style={{
        marginBottom: '20px',
        padding: '16px',
        background: '#EEEEEE',
        borderRadius: '8px',

      }}
      onChange={handleOnChange}
    />
  
          </form>
        </div>
      </div>
      <div style={{ flex: 2 }}>
        <div className="button-container" style={{ display: 'flex' }}>
          <button
            className="save-button"
            style={{
              display: 'flex',
              marginRight: 10,
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: '12px 16px',
              width: '179px',
              height: '48px',
              textAlign: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: '#8767E1',
              border: 0,
              borderRadius: '8px',
            }}
          >
            Save
          </button>
          <button
            className="cancel-button"
            
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: '12px 16px',
              width: '179px',
              height: '48px',
              textAlign: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: '#FFFFFF',
              borderRadius: '8px',
            }}
          >
           <Link to="/view_profile">Cancel</Link>
          </button>
        </div>
      </div>
    </div>
    </form>
    </div>
  );
}

export default Update_Profile;
