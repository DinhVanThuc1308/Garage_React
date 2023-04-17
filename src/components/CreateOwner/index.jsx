import React from 'react';
import { Row, Col } from 'antd';
import {
  Button,
  Form,
  Input,
  message,
  Space,
  Select,
  DatePicker,
  Checkbox,
} from 'antd';
import dayjs from 'dayjs';
import binicon from './Vector.svg';
import styles from './styles.module.css';
import { Option } from 'antd/es/mentions';

function CreateOwner() {
  // form
  const [form] = Form.useForm();
  const onFinish = () => {
    message.success('Submit success!');
  };
  const onFinishFailed = () => {
    message.error('Submit failed!');
  };
  const onFill = () => {
    form.setFieldsValue({
      url: 'https://taobao.com/',
    });
  };

  //   select
  const onChange = value => {
    console.log(`selected ${value}`);
  };
  const onSearch = value => {
    console.log('search:', value);
  };
  // date picker

  //   Checkbox
  const onChangeBox = e => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className={styles['create-form']}>
      <Row gutter={[30, 20]}>
            <Col className="gutter-row Owner_col" span={8}>
                <Form.Item className='Owner_require'
                    label="Name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                    name="Name"
                ></Form.Item>
                <Input size="large" placeholder="Enter owner name" />
            </Col>
            <Col className="gutter-row" span={8}>
                <Form.Item className='Owner_require'
                    label="Email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                    name="Email"
                ></Form.Item>
                <Input size="large" placeholder="Enter owner email" />

            </Col>
            <Col className="gutter-row" span={8}>
                <Form.Item className='Owner_require'
                    label="Username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    name="Username"
                ></Form.Item>
                <Input size="large" placeholder="Enter owner username" />

            </Col>

            <Col className="gutter-row Owner_lable" span={8}>
                <Form.Item className='Owner_require'
                    label="Password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    name="password"
                ></Form.Item>

                <Input.Password size="large" placeholder="Enter owner password" />

            </Col>
            <Col className="gutter-row" span={8}>
                <Form.Item className='Owner_require'
                    label="Phone Number"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                    name="Phone Number"
                ></Form.Item>
                <Input size="large" placeholder="Enter owner phone number" />
            </Col>
            <Col className="gutter-row" span={8}>

                <Form.Item className='Owner_require'
                    label="Gender"
                    rules={[{ required: true, message: 'Please input your gender!' }]}
                    name="Gender"
                ></Form.Item>
                <Select size="large" className='Owner_select'
                    placeholder="Select owner gender"
                    allowClear
                >
                    <Option value="Male">Male</Option>
                    <Option value="Female">Female</Option>
                    <Option value="Other">Other</Option>
                </Select>
            </Col>

            <Col className="gutter-row" span={8}>
                <Form.Item className='Owner_require'
                    label="DOB"
                    rules={[{ required: true, message: 'Please input your DOB!' }]}
                    name="DOB"
                ></Form.Item>
                <DatePicker className='Owner_DOB' size='large'></DatePicker>
            </Col>
            <Col className="gutter-row" span={8}>
                <Form.Item className='Owner_require'
                    label="Role"
                    rules={[{ required: true, message: 'Please select your role!' }]}
                    name="Role"
                ></Form.Item>
                <Select size="large" className='Owner_select'
                    placeholder="Select a role"
                    allowClear
                >
                    <Option value="Male">User</Option>
                    <Option value="Female">.....</Option>
                    <Option value="Other">.....</Option>
                </Select>
            </Col>
            <Col className="gutter-row" span={8}>
                <Form.Item className='Owner_require'
                    label="Status"
                    rules={[{ required: true, message: 'Please select your Status!' }]}
                    name="Status"
                ></Form.Item>
                <Select size="large" className='Owner_select'
                    placeholder="Select a Status"
                    allowClear
                >
                    <Option value="Male">Active</Option>
                    <Option value="Female">.....</Option>
                    <Option value="Other">.....</Option>
                </Select>
            </Col>
        </Row>

      <div className={styles['choose-container']}>
        <div className={styles['checkbox-garage']}>
          <Input size='large' placeholder="Search for garages .." />
          <div className={styles['checkbox-list']}>
            <Checkbox style={{ marginLeft: '8px' }} onChange={onChangeBox}>
              Garage ABC
            </Checkbox>
            <Checkbox onChange={onChangeBox}>TLS</Checkbox>
            <Checkbox onChange={onChangeBox}>AHC</Checkbox>
            <Checkbox onChange={onChangeBox}>CB Garage</Checkbox>
            <Checkbox onChange={onChangeBox}>UCQ</Checkbox>
          </div>
        </div>
        <div className={styles['list-garage']}>
          <label htmlFor="">Select garages (2)</label>
          <div className={styles['pickitem']}>
            <div className="pickitem-name">Garage ABC</div>
            <img src={binicon} alt="" />
          </div>
          <div className={styles['pickitem']}>
            <div className="pickitem-name">TLS</div>
            <img src={binicon} alt="" />
          </div>
        </div>
      </div>

      <hr style={{ width: '100%' }} />
      <div className={styles['btn-container']}>
        <Button size='large' type="primary" className={styles['btn-save']}>
          Save
        </Button>
        <Button size='large' type='default' className={styles['btn-cancel']}>Cancel</Button>
      </div>
    </div>
  );
}

export default CreateOwner;
