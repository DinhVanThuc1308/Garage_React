import { Col, Row } from 'antd';

import React from 'react';
import { Form, Input, Select } from 'antd';
import { DatePicker } from 'antd';
// import './Update_Management.css';

// import './update_managetment.css';


const style = {
    background: '#0092ff',
    padding: '8px 0',
};
const { Option } = Select;

const Update_managetment = () => (
    <>
        <Row gutter={[30, 20]}>
            <Col className="gutter-row Management_col" span={8}>
                <Form.Item className='Management_require'
                    label="Name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                    name="Name"
                ></Form.Item>
                <Input size="large" placeholder="Enter Management name" />
            </Col>
            <Col className="gutter-row" span={8}>
                <Form.Item className='Management_require'
                    label="Email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                    name="Email"
                ></Form.Item>
                <Input size="large" placeholder="Enter Management email" />

            </Col>
            <Col className="gutter-row" span={8}>
                <Form.Item className='Management_require'
                    label="Phone Number"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    name="PhoneNumber"
                ></Form.Item>
                <Input size="large" placeholder="Enter Management PhoneNumber" />

            </Col>

            <Col className="gutter-row Management_lable" span={8}>
                <Form.Item className='Management_require'
                    label="Address:"
                    rules={[{ required: true, message: 'Please input your Address!' }]}
                    name="Address"
                ></Form.Item>

                <Input size="large" placeholder="Enter Management Address" />

            </Col>
            <Col className="gutter-row" span={8}>
                <Form.Item className='Management_require'
                    label="Opentime:"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                    name="Opentime"
                ></Form.Item>
                <DatePicker size='large' style={{ width: '100%' }} showTime format="HH:mm" />
            </Col>
            <Col className="gutter-row" span={8}>
                <Form.Item className='Management_require'
                    label="CloseTime:"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                    name="CloseTime"
                ></Form.Item>
                <DatePicker size='large' style={{ width: '100%' }} showTime format="HH:mm" />
            </Col>

            <Col className="gutter-row" span={8}>
                {/* Tạo 1 ô có label là GarageManagement và input là kiểu lựa chọn Management1 ,Management2.... */}
                <Form.Item className='Management_require'
                    label="GarageOwner"
                    rules={[{ required: true, message: 'Please select your GarageManagement!' }]}
                    name="GarageOwner"
                ></Form.Item>
                <Select size="large" className='Owner_select'
                    placeholder="Select a GarageOwner"
                    allowClear
                >
                    <Option value="1">Owner1</Option>
                    <Option value="2">Owner2</Option>
                    <Option value="3">Owner3</Option>
                </Select>

            </Col>

            <Col className="gutter-row" span={8}>
                <Form.Item className='Management_require'
                    label="Status"
                    rules={[{ required: true, message: 'Please select your Status!' }]}
                    name="Status"
                ></Form.Item>
                <Select size="large" className='Management_select'
                    placeholder="Select a Status"
                    allowClear
                    style={{ width: '100%' }}
                >
                    <Option value="Male">Active</Option>
                    <Option value="Female">.....</Option>
                    <Option value="Other">.....</Option>
                </Select>
            </Col>
        </Row>
        <Row gutter={[30, 20]}>
            <Col className="gutter-row Management_lable" span={12}>
                <Form.Item
                    className="Management_require"
                    label="Description"
                    rules={[{ required: true, message: 'Please input your description!' }]}
                    name="Description"
                ></Form.Item>
                <Input size="large" placeholder="Enter Management description" style={{ height: 150 }} />
            </Col>
            <Col className="gutter-row Management_lable" span={12}>
                <Form.Item
                    className="Management_require"
                    label="Policy"
                    rules={[{ required: true, message: 'Please input your policy!' }]}
                    name="Policy"
                ></Form.Item>
                <Input size="large" placeholder="Enter Management policy" style={{ height: 150 }} />
            </Col>
        </Row>







    </>
);
export default Update_managetment;

