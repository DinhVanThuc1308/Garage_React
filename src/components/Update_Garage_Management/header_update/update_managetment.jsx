import { Col, Row } from 'antd';
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



        <>
            <Form style={{ width: '100%' }}>
                <Row gutter={[30, 20]}>
                    <Col className="  gutter-row Management_col" span={8}>

                        <Form.Item className='Management_require'
                            label="Name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                            name="Name"
                        ></Form.Item>
                        <Input size="large" placeholder="Enter Management name"
                            value={management?.name}
                        />

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
                <Row gutter={[30, 20]} >
                    <Col className="gutter-row Management_lable" span={12}>
                        <Form.Item
                            className="Management_require"
                            label="Description"
                            rules={[{ required: true, message: 'Please input your description!' }]}
                            name="Description"
                        ></Form.Item>
                        <TextArea size="large" placeholder="Enter Management description" style={{ height: 150, }}
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
                        <TextArea size="large" placeholder="Enter Management policy" style={{ height: 150, }}
                            value={management?.policy}
                        />
                    </Col>
                </Row>

                <h2>Garage</h2>
                <Transfer
                    className="Footer_update_owner"
                    showSearch={{
                        filterOption: false,
                        render: (props) => <input {...props} placeholder="Search..." />,
                        style: { width: '100%' }
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
                    }}
                    onSearch={handleSearch}
                />
                <Button type="primary" onClick={handleSave}>
                    Save
                </Button>

            </Form >







        </>





    );
}

export default Update_managetment;

