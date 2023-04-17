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
import { Option } from 'antd/es/mentions';
import styles from './styles.module.css';

export default function UpdateService() {
    const { TextArea } = Input;
  return (
    <div className={styles['update-form']}>
      <Row gutter={[30, 20]}>
        <Col className="gutter-row" span={8}>
          <Form.Item
            className={styles['antform-size']}
            label="Name"
            rules={[{ required: true, message: 'Please input your name!' }]}
            name="Name"
          ></Form.Item>
          <Input size="large" placeholder="Enter service name" />
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item
            className={styles['antform-size']}
            label="Min price"
            rules={[{ required: true, message: 'Please input your email!' }]}
            name="minprice"
          ></Form.Item>
          <Input size="large" placeholder="Enter service email" />
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item
            className={styles['antform-size']}
            label="Max price"
            rules={[
              { required: true, message: 'Please input your phone number!' },
            ]}
            name="maxprice"
          ></Form.Item>
          <Input size="large" placeholder="Enter service phone number" />
        </Col>
      </Row>

      <div className={styles["description-form"]}>
        <label htmlFor="">
          Description <span className={styles['red-require']}>*</span>
        </label>
        <br />
        <TextArea
          rows={6}
          placeholder="This is a description"
          maxLength={10}
          style={{ width: '100%' }}
        />
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
