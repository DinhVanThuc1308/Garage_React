import React from 'react';
import { Layout, Menu, DatePicker, Upload, Button, message, PhonePicker } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react';
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
      setAvatar = response.url;
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
      console.log("uploading")
      
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      setAvatar(info.file.response.avatarUrl );
      setLoading(false);
      console.log("done")

    }
    if (info.file.status === 'error') {
      // message.error('Failed to upload avatar.');
      console.log("error")
      setLoading(false);
    }
  };

  const inputStyle = {
    textAlign: 'center',
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
                action="https://edison-garage-api.savvycom.xyz/api/upload"
                beforeUpload={(file) => {
                  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
                  if (!isJpgOrPng) {
                    message.error('You can only upload JPG/PNG file!');
                  }
                  const isLt2M = file.size / 1024 / 1024 < 2;
                  if (!isLt2M) {
                    message.error('Image must be smaller than 2MB!');
                  }
                  return isJpgOrPng && isLt2M;
                }}
                onChange={handleAvatarChange}
              >
                {avatar ? (
                  <img src={avatar} alt="avatar" style={{ width: '100%' }} />
                ) : (
                  <div>
                    {loading ? <LoadingOutlined /> : <PlusOutlined />}
                    <div className="ant-upload-text">Upload</div>
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
                <input className="container_updateProfile_inf_input_text" value={userData.username} disabled />
              </div>

            <div className="container_updateProfile_inf_input_1">
              <div>
                <div>Dob</div>
                <DatePicker className="container_updateProfile_inf_input_dob_phone" 
                value={moment(dob)} onChange={setDob}
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
                  value="Cau Giay, Ha Noi"
                  {...register('address')}
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
              Save
            </button>
            <button className="button_update" style={{ color: '#8767E1' }}>
              <Link to="/view_profile">Cancel</Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update_Profile;
