import { Col, Row, TimePicker } from 'antd';
import { Transfer } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { Form, Input, Select } from 'antd';
import { DatePicker, Button } from 'antd';
import axiosInstance from '../../../shared/services/http-client.js';
import TextArea from 'antd/es/input/TextArea.js';
import { useParams } from 'react-router-dom';
const mockData = [{ key: '0', title: 'Garage ABC', description: 'description of content1' },
{ key: '1', title: 'TLS', description: 'description of content2' },
{ key: '2', title: 'AHC', description: 'description of content3' },
{ key: '3', title: 'CB Garage', description: 'description of content4' },
{ key: '4', title: 'UCQ', description: 'description of content5' },];

const oriTargetKeys = mockData.filter((item) => Number(item.key) % 3 > 1).map((item) => item.key);

// import Foter

const { Option } = Select;

function Update_managetment() {

    const { id } = useParams();
    console.log(id);
    const [management, setManagement] = useState(null);

    useEffect(() => {
        const callApi = async () => {
            const data = await axiosInstance.get(`garages/${id}`);
            setManagement(data.data.attributes);
            console.log(management);
        }
        callApi();
    }, [id])


    const handleSave = async () => {
        try {
            // Gửi request PUT để cập nhật dữ liệu lên server
            const response = await axiosInstance.put(`garages/${id}`, {
                // Truyền dữ liệu cần cập nhật vào đây
                name: management.name,
                email: management.email,
                phoneNumber: management.phoneNumber,
                address: management.address,
                // ... Các trường dữ liệu khác
            });

            // Kiểm tra kết quả thành công hay không
            if (response.status === 200) {
                console.log('Data saved successfully!');
                // Xử lý thành công, có thể thêm thông báo hoặc chuyển hướng tùy ý
            } else {
                console.log('Data save failed!');
                // Xử lý khi lưu dữ liệu thất bại
            }
        } catch (error) {
            console.log('Error saving data:', error);
            // Xử lý khi có lỗi xảy ra
        }
    };

    // footer
    const [targetKeys, setTargetKeys] = useState(oriTargetKeys);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [searchText, setSearchText] = useState('');

    const handleChange = (newTargetKeys) => {
        setTargetKeys(newTargetKeys);
    };


    const handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        // If any source items are selected, add them to the target list
        if (sourceSelectedKeys.length > 0) {
            const newTargetKeys = [...targetKeys, ...sourceSelectedKeys];
            setTargetKeys(newTargetKeys);
            setSelectedKeys([]);
        }

        // If any target items are selected, remove them from the target list
        if (targetSelectedKeys.length > 0) {
            const newTargetKeys = targetKeys.filter((key) => !targetSelectedKeys.includes(key));
            setTargetKeys(newTargetKeys);
            setSelectedKeys([]);
        }
    };

    const handleScroll = (direction, e) => {
        console.log('direction:', direction);
        console.log('target:', e.target);
    };

    const handleSearch = (direction, value) => {
        setSearchText(value);
    };

    const filteredData = mockData.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
    );



    return (


        <Form style={{ width: '100%' }}>
            <>
                <Row gutter={[30, 20]}>
                    <Col className="gutter-row Owner_col" span={8}>
                        <Form.Item className='Owner_require'
                            label="Name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                            name="Name"
                            style={{ marginBottom: '10px' }}

                        ></Form.Item>
                        <Input size="large" placeholder="Enter owner name" value={management?.name} />
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Form.Item className='Owner_require'
                            label="Email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                            name="Email"
                            style={{ marginBottom: '10px' }}

                        ></Form.Item>
                        <Input size="large" placeholder="Enter owner email" />

                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Form.Item className='Owner_require'
                            label="PhoneNumber"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                            name="PhoneNumber"
                            style={{ marginBottom: '10px' }}

                        ></Form.Item>
                        <Input size="large" placeholder="Enter owner PhoneNumber" />

                    </Col>

                    <Col className="gutter-row Owner_lable" span={8}>
                        <Form.Item className='Owner_require'
                            label="Address"
                            rules={[{ required: true, message: 'Please input your Address!' }]}
                            name="Address"
                            style={{ marginBottom: '10px' }}

                        ></Form.Item>

                        <Input size="large" placeholder="Enter owner Address" />

                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Form.Item className='Owner_require'
                            label="OpenTime"
                            rules={[{ required: true, message: 'Please input your OpenTime!' }]}
                            name="OpenTime"
                            style={{ marginBottom: '10px' }}

                        ></Form.Item>
                        <TimePicker size="large" placeholder="Enter owner OpenTime" style={{ width: '100%' }} />
                    </Col>
                    <Col className="gutter-row" span={8} >

                        <Form.Item className='Owner_require'
                            label="CloseTime"
                            rules={[{ required: true, message: 'Please input your CloseTime!' }]}
                            name="CloseTime"
                            style={{ marginBottom: '10px' }}

                        ></Form.Item>
                        <TimePicker size="large" placeholder="Enter owner CloseTime" style={{ width: '100%' }} />
                    </Col>

                    <Col className="gutter-row" span={8}>
                        <Form.Item className='Owner_require'
                            label="Garage Owner"
                            rules={[{ required: true, message: 'Please input your Garage Owner!' }]}
                            name="GarageOwner"
                            style={{ marginBottom: '10px' }}

                        ></Form.Item>
                        <Input size="large" placeholder="Enter owner GarageOwner" />

                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Form.Item className='Owner_require'
                            label="Status"
                            rules={[{ required: true, message: 'Please select your Status!' }]}
                            name="Status"
                            style={{ marginBottom: '10px' }}

                        ></Form.Item>
                        <Select size="large" className='Owner_select'
                            placeholder="Select a Status"
                            allowClear
                            style={{ marginBottom: '10px' }}

                        >
                            <Option value="Male">Action</Option>
                            <Option value="Female">Inaction</Option>

                        </Select>
                    </Col>

                </Row>
                {/* tạo thêm 1 hàng gồm 2 ô textarea có lable là Description và Policy */}
                <Row gutter={[30, 20]}>
                    <Col className="gutter-row" span={12}>
                        <Form.Item className='Owner_require'
                            label="Description"
                            rules={[{ required: true, message: 'Please input your Description!' }]}
                            name="Description"
                            style={{ marginBottom: '10px' }}

                        ></Form.Item>
                        <TextArea rows={8} placeholder="Enter owner Description" style={{ width: '600px' }} />
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <Form.Item className='Owner_require'
                            label="Policy"
                            rules={[{ required: true, message: 'Please input your Policy!' }]}
                            name="Policy"
                            style={{ marginBottom: '10px' }}

                        ></Form.Item>
                        <TextArea rows={8} placeholder="Enter owner Policy" style={{ width: '600px' }} />
                    </Col>
                </Row>



            </>

            <h2>Garage</h2>
            <Transfer
                className="Footer_update_owner"
                showSearch={{
                    filterOption: false,
                    render: (props) => <input {...props} placeholder="Search..." />,

                }}
                dataSource={filteredData}
                titles={['Source', 'Target']}
                targetKeys={targetKeys}
                selectedKeys={selectedKeys}
                onChange={handleChange}
                onSelectChange={handleSelectChange}
                onScroll={handleScroll}
                operation={[]}
                render={(item) => item.title}
                oneWay
                style={{
                    marginBottom: 16,
                    width: '100%'
                }}
                onSearch={handleSearch}

            />
            <Button type="primary" onClick={handleSave}>
                Save
            </Button>

        </Form >













    );
}

export default Update_managetment;

