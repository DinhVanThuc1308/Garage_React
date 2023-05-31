import React from 'react';
import { Layout, Menu, DatePicker, Upload, Button, message,PhonePicker } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { useState,useEffect } from 'react';
import Header_avt from '../Header/asset/img/avt2.jpg';
import Icon from '../Slider_bar/asset/img/Vector.png';
import './style.css';
import moment from 'moment';
import axios from 'axios'
import axiosInstance from '../../shared/services/http-client.js';
import { Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';

const Update_Profile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const { control, handleSubmit, setValue, register } = useForm();
  const [dob, setDob] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    console.log("Avatar:", avatar);
  }, [avatar]);

  const fetchUserData = async () => {
    try {
      const response = await axiosInstance.get(`/users/${id}`);
      setUserData(response);
      setDob(response.dob); // Set giá trị mặc định cho dob
      console.log(response.dob);
      setValue('name', response.fullname);
      setValue('email', response.email);
      setValue('dob', response.dob);
      setValue('phoneNumber', response.phoneNumber);
      setValue('address', response.address);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProfileData = async (data) => {
    try {
      await axiosInstance.put(`/users/${id}`, data);
      message.success('Success! You have updated your profile!');
    } catch (error) {
      message.error('Fail! Please try again!');
    }
  };

  const uploadAvatar = async (file) => {

    console.log({file});
    try {
      const formData = new FormData();
      formData.append('files', file.originFileObj);

      const response = await axiosInstance.post("upload", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response)
      setAvatar(response[0].url);
      console.log(222223,avatar)

      return response.avatarUrl;
      
    } catch (error) {
      throw new Error('Failed to upload avatar.');
    }
  };
  
  const handleAvatarChange = (info) => {
    // console.log(info);
    // setAvatar(info.file)
    uploadAvatar(info.file)
    if (info.file.status === 'uploading') {
      console.log(222,info.file)
      
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      setAvatar(info.file.response.avatarUrl );
      setLoading(false);
      console.log("done")

    }
    
  };



  const onSubmit = async (formData) => {
    try {
      const { name, dob, phoneNumber, address, email } = formData;
      const data = {
        fullname: name,
        dob: dob,
        phoneNumber,
        address,
        email,
      };

      if (avatar) {
        const avatarUrl = await uploadAvatar(avatar);
        
        data.avatar = avatarUrl;
      }
      
      await updateProfileData(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="full_container_updateProfile">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="full_container_updateProfile_header">
          <div className="container_updateProfile_avt">
            <div className="container_updateProfile_avt_1">
            <Upload
            
  name="avatar"
  listType="picture-card"
  className="avatar-uploader"
  showUploadList={false}
  action="http://localhost:1337/api/upload"
  onChange={handleAvatarChange}
>
  {avatar ? (
    <img
    style={{
      width: "100%",
      height: "100%",
      objectFit: "contain",
    }}
      src={"http://localhost:1337" + avatar}
      alt="avatar"
      className="avatar-image"
    />
  ) : (
    <div className="upload-placeholder">
      <PlusOutlined />
      <div className="upload-text">Upload</div>
    </div>
  )}
</Upload>

              <div className="container_updateProfile_avt_1_icon"></div>
            </div>
          </div>

          <div className="container_updateProfile_inf">
            <div className="container_updateProfile_inf_input">
              <div>Name</div>
              <input
                className="container_updateProfile_inf_input_text"
                defaultValue={userData.fullname}
                {...register('name')}
              />
            </div>

            <div className="container_updateProfile_inf_input">
              <div>Email</div>
              <input
                className="container_updateProfile_inf_input_text"
                defaultValue={userData.email}
                {...register('email')}
              />
            </div>

            <div className="container_updateProfile_inf_input">
              <div>Username</div>
              <input className="container_updateProfile_inf_input_text" defaultValue={userData.username}  />
            </div>

            <div className="container_updateProfile_inf_input_1">
              <div>
                <div>Dob</div>
                <DatePicker className="container_updateProfile_inf_input_dob_phone" 
                value={dayjs(dob)} onChange={setDob}
                
                {...register('dob')} />
              </div>
              <div>
                <div>Phone</div>
                <input
                  className="container_updateProfile_inf_input_dob_phone"
                  defaultValue={userData.phoneNumber}
                  {...register('phoneNumber')}
                />
              </div>
            </div>

            <div className="container_updateProfile_inf_input">
              <div>Address</div>
              <input
                className="container_updateProfile_inf_input_text"
                defaultValue="Cau Giay, Ha Noi"
                
              />
            </div>

            <div className="container_updateProfile_inf_input">
              <div>Role</div>
              <input className="container_updateProfile_inf_input_text" value="Admin" disabled />
            </div>
          </div>
        </div>
        <div className="full_container_updateProfile_footer">
          <div className="line"></div>
          <div className="container.container_updateProfile_button">
            <button className="button_update" style={{ backgroundColor: '#8767E1' }} type="submit">
            <Link to="/view_profile" style={{color: 'white'}}>Save</Link>
            </button>
            <button className="button_update" style={{ color: '#8767E1' }}>
              <Link to="/view_profile" style={{color: '#8767E1'}}>Cancel</Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update_Profile;
