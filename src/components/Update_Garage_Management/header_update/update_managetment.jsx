import { Col, Row } from 'antd';

import React, { useContext, useEffect, useState } from 'react';
import { Form, Input, Select } from 'antd';
import { DatePicker } from 'antd';
import axiosInstance from '../../../shared/services/http-client.js';
import TextArea from 'antd/es/input/TextArea.js';

const { Option } = Select;

function Update_managetment() {
    const id = 1;
    const [management, setManagement] = useState(null);

    useEffect(() => {
        const callApi = async () => {
            const data = await axiosInstance.get(`garages/1`);
            setManagement(data.data.attributes);
            console.log(management);
        }
        callApi();
    }, [id])

    return (



        <>
            <Row gutter={[30, 20]}>
                <Col className="gutter-row Management_col" span={8}>
                    <Form.Item className='Management_require'
                        label="Name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                        name="Name"
                    ></Form.Item>
                    <Input size="large" placeholder="Enter Management name" value={management?.name} />
                </Col>
                <Col className="gutter-row" span={8}>
                    <Form.Item className='Management_require'
                        label="Email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                        name="Email"
                    ></Form.Item>
                    <Input size="large" placeholder="Enter Management email"
                        value={management?.email}
                    />

                </Col>
                <Col className="gutter-row" span={8}>
                    <Form.Item className='Management_require'
                        label="Phone Number"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                        name="PhoneNumber"
                    ></Form.Item>
                    <Input size="large" placeholder="Enter Management PhoneNumber"
                        value={management?.phoneNumber}
                    />

                </Col>

                <Col className="gutter-row Management_lable" span={8}>
                    <Form.Item className='Management_require'
                        label="Address:"
                        rules={[{ required: true, message: 'Please input your Address!' }]}
                        name="Address"
                    ></Form.Item>

                    <Input size="large" placeholder="Enter Management Address"
                        value={management?.address}
                    />

                </Col>
                <Col className="gutter-row" span={8}>
                    <Form.Item className='Management_require'
                        label="Opentime:"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                        name="Opentime"
                    ></Form.Item>
                    <DatePicker size='large' style={{ width: '100%' }} showTime format="HH:mm"
                    // value={management?.openTime}
                    />
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
                    <TextArea size="large" placeholder="Enter Management description" style={{ height: 150 }}
                        value={management?.description}
                    />
                </Col>
                <Col className="gutter-row Management_lable" span={12}>
                    <Form.Item
                        className="Management_require"
                        label="Policy"
                        rules={[{ required: true, message: 'Please input your policy!' }]}
                        name="Policy"
                    ></Form.Item>
                    <TextArea size="large" placeholder="Enter Management policy" style={{ height: 150 }}
                        value={management?.policy}
                    />
                </Col>
            </Row>
        </>
    );
}

export default Update_managetment;

