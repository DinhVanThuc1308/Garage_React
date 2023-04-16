import { Col, Divider, Row } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import React from 'react';
import { Button, Checkbox, Form, Input, Space, Select } from 'antd';
import { DatePicker, TimePicker } from 'antd';
import './Update_Owner.css';
import { Switch, Transfer } from 'antd';
import { useState } from 'react';


const style = {
    background: '#0092ff',
    padding: '8px 0',
};
const { Option } = Select;

const Update_Owner = () => (
    <>
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
                <DatePicker className='Owner_DOB'></DatePicker>
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



    </>
);
export default Update_Owner;

