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

  //   Textarea
  const { TextArea } = Input;
  return (
    <div className={styles['create-form']}>
      <Row gutter={[30, 20]}>
        <Col className="gutter-row" span={8}>
          <Form.Item
            className={styles['antform-size']}
            label="Name"
            rules={[{ required: true, message: 'Please input your name!' }]}
            name="Name"
          ></Form.Item>
          <Input size="large" placeholder="Enter Garage name" />
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item
            className={styles['antform-size']}
            label="Email"
            rules={[{ required: true, message: 'Please input your email!' }]}
            name="Email"
          ></Form.Item>
          <Input size="large" placeholder="Enter Garage email" />
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item
            className={styles['antform-size']}
            label="Phone Number"
            rules={[
              { required: true, message: 'Please input your phone number!' },
            ]}
            name="Phone Number"
          ></Form.Item>
          <Input size="large" placeholder="Enter Garage phone number" />
        </Col>

        <Col className="gutter-row" span={8}>
          <Form.Item
            className={styles['antform-size']}
            label="Email"
            rules={[{ required: true, message: 'Please input your email!' }]}
            name="Email"
          ></Form.Item>
          <Input size="large" placeholder="Enter Garage email" />
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item
            className={styles['antform-size']}
            label="Open time"
            rules={[{ required: true, message: 'Please select your Status!' }]}
            name="Status"
          ></Form.Item>
          <Select
            size="large"
            
            className={styles['antform-size']}
            placeholder="Select a Status"
            allowClear
          >
            <Option value="Male">Active</Option>
            <Option value="Female">.....</Option>
            <Option value="Other">.....</Option>
          </Select>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item
            className={styles['antform-size']}
            label="Close"
            rules={[{ required: true, message: 'Please input your gender!' }]}
            name="Gender"
          ></Form.Item>
          <Select
            size="large"
            className={styles['antform-size']}
            placeholder="Select Garage gender"
            allowClear
          >
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
            <Option value="Other">Other</Option>
          </Select>
        </Col>

        <Col className="gutter-row" span={8}>
          <Form.Item
            className={styles['antform-size']}
            label="Role"
            rules={[{ required: true, message: 'Please select your role!' }]}
            name="Role"
          ></Form.Item>
          <Select
            size="large"
            className={styles['antform-size']}
            placeholder="Select a role"
            allowClear
          >
            <Option value="Male">User</Option>
            <Option value="Female">.....</Option>
            <Option value="Other">.....</Option>
          </Select>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item
           className={styles['antform-size']}
            label="Status"
            rules={[{ required: true, message: 'Please select your Status!' }]}
            name="Status"
          ></Form.Item>
          <Select
            size="large"
            className={styles['antform-size']}
            placeholder="Select a Status"
            allowClear
          >
            <Option value="Active">Active</Option>
            <Option value="Deactive">Deactive</Option>
            <Option value="Other">Other</Option>
          </Select>
        </Col>
      </Row>

      <div className={styles['textarea-form']}>
        <div className={styles['description-form']}>
          <label htmlFor="">Description <span className={styles['red-require']}>*</span></label>
          <br />
          <TextArea
            rows={5}
            placeholder="Enter a description"
            maxLength={10}
            style={{ width: '100%' }}
          />
        </div>
        <div className={styles['policy-form']}>
          <label htmlFor="" >Policy <span className={styles['red-require']}>*</span></label>
          <br />
          <TextArea
            rows={5}
            placeholder="Enter a policy"
            maxLength={10}
            style={{ width: '100%' }}
          />
        </div>
      </div>

      <div className={styles['choose-container']}>
        <div className={styles['checkbox-garage']}>
          <Input size="large" placeholder="Search for garages .." />
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
        <Button size="large" type="primary" className={styles['btn-save']}>
          Save
        </Button>
        <Button size="large" type="default" className={styles['btn-cancel']}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default CreateOwner;
