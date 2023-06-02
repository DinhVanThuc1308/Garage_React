import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../shared/services/http-client';
import moment from 'moment/moment';
import {
  Avatar as AntAvatar,
  Form,
  Input,
  Button,
  Row,
  Col,
  message,
  Select,
  Modal,
} from 'antd';
import { ReactComponent as Ellipse3 } from './Camera/Ellipse 3.svg';
import { ReactComponent as Camera } from './Camera/Vector.svg';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import './style.css';

const AvatarContainer = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
`;

const Avatar = styled(AntAvatar)`
  position: absolute;
  top: 0;
  left: 0;
`;

const AvatarImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const CameraAvatar = styled(Avatar)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #eeeeee;
  background: rgba(0, 0, 0, 0);
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const BlackClover = styled(AntAvatar)`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
`;

function UpdateProfile() {
  let { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const { Option } = Select;
  const navigate = useNavigate();
  const location = useLocation();
  // const { data, role, userId } = location.state || {};
  const [myUser, setMyUser] = useState({});

  const [form] = Form.useForm();

  console.log('location', location.state);

  console.log('myid', id);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // const jwt = localStorage.getItem('jwt');

        // const requestOptions = {
        //   method: 'GET',
        //   headers: {
        //     Authorization: `Bearer ${jwt}`,
        //   },
        //   redirect: 'follow',
        // };

        // const response = await fetch(
        //   'http://localhost:1337/api/users/me?populate=avatar',
        //   requestOptions
        // );

        const response = await axiosInstance.get(
          '/users/me?populate=avatar&populate=role'
        );
        // const result = await response.json();
        // const result = response;
        console.log('result', response);
        setMyUser(response);

        setAvatar(response.avatar.url);
        console.log('resultavt', response.avatar.url);
      } catch (error) {
        console.log('An error occurred:', error);
      }
    };

    fetchProfile();
  }, []);
  console.log('myUser', myUser);
  console.log('name', myUser.fullname);

  const onFinish = async values => {
    try {
      const jwt = localStorage.getItem('jwt');
      const { dob, address, phoneNumber } = values;

      const formData = new FormData();

      formData.append('files', uploadedImage);

      const requestOptions = {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        body: formData,
        redirect: 'follow',
      };

      const response = await fetch(
        'http://localhost:1337/api/upload',
        requestOptions
      );
      const uploadResult = await response.json();

      if (response.ok) {
        const raw = JSON.stringify({
          dob: dob.format('YYYY-MM-DD'),
          address,
          phoneNumber,
        });

        const updateRequestOptions = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
          },
          body: raw,
          redirect: 'follow',
        };
        // console.log(2222, userId);
        const updateResponse = await fetch(
          `http://localhost:1337/api/users/${id}`,
          updateRequestOptions
        );
        const data = await updateResponse.json();

        if (updateResponse.ok) {
          message.success('Form submitted successfully!');
          navigate('/');
        } else {
          message.error('Failed to submit form!');
        }
      } else {
        message.error('Failed to upload image!');
      }
    } catch (error) {
      message.error('An error occurred');
    }
  };

  const handleCancelForm = () => {
    navigate('/');
  };

  const handlePreviewAvatar = e => {
    const file = e.target.files[0];
    setUploadedImage(file);
    setIsModalOpen(false);
  };

  const onOk = () => {
    setIsModalOpen(false);
  };

  console.log('newavt', uploadedImage);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="full" myUser={myUser}>
      <div className="wrapper">
        <div className="container">
          <div className="profile">
            <div className="image">
              <div className="image-wrapper">
                <AvatarContainer>
                  {uploadedImage ? (
                    <AvatarImage
                      src={URL.createObjectURL(uploadedImage)}
                      alt="Avatar"
                    />
                  ) : (
                    <AvatarImage
                      src={avatar ? `http://localhost:1337${avatar}` : ''}
                    />
                  )}
                  <Modal
                    title="Update Avatar"
                    visible={isModalOpen}
                    onOk={onOk}
                    onCancel={handleCancel}
                  >
                    <input type="file" onChange={handlePreviewAvatar} />
                  </Modal>
                  <BlackClover
                    size={250}
                    icon={<Ellipse3 />}
                    onClick={showModal}
                  />
                  <CameraAvatar
                    size={50}
                    icon={<Camera />}
                    onClick={showModal}
                  />
                </AvatarContainer>
              </div>
            </div>
            <div className="infor">
              <Form
                form={form}
                layout="vertical"
                initialValues={{
                  fullname: JSON.stringify(myUser.fullname),
                }}
                onFinish={onFinish}
                id="myForm"
                size="large"
              >
                <Form.Item label="Name" name="fullname">
                  <Input placeholder="Enter Name" />
                </Form.Item>
                <Form.Item label="Email" name="email">
                  <Input placeholder="" disabled />
                </Form.Item>
                <Form.Item label="Username" name="username">
                  <Input placeholder="" disabled />
                </Form.Item>
                <Row gutter={[16, 0]}>
                  <Col span={8}>
                    <Form.Item label="DOB" name="dob">
                      <DatePicker />
                    </Form.Item>
                  </Col>
                  <Col span={12} style={{ marginLeft: '10px' }}>
                    <Form.Item label="Phone Number" name="phoneNumber">
                      <Input
                        placeholder=""
                        maxLength={10}
                        style={{ width: '188px' }}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item label="Address" name="address">
                  <Input placeholder="" />
                </Form.Item>
                <Form.Item label="Role" name="role">
                  {/* {role === 'admin' ? (
                    <Select placeholder="">
                      <Option value="admin">Admin</Option>
                      <Option value="user">User</Option>
                    </Select>
                  ) : (
                    <Input placeholder="" disabled />
                  )} */}
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>

      <div className="btn-u">
        <div className="line"></div>
        <div className="container.container_updateProfile_button">
          <Form.Item>
            <Button
              className="button_update"
              style={{ backgroundColor: '#8767E1', marginRight: '10px' }}
              type="primary"
              htmlType="submit"
            >
              Update
            </Button>
            <Button
              onClick={handleCancelForm}
              className="button_update"
              style={{ color: '#8767E1' }}
            >
              Cancel
            </Button>
          </Form.Item>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
