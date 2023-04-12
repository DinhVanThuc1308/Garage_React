import React from 'react';
import { Row, Col } from 'antd';
import { Button, Form, Input, message, Space, Select, DatePicker, Checkbox } from 'antd';
import dayjs from 'dayjs';
import binlogo from './Vector.svg'
import styles from './styles.module.css';


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
const onChangeBox = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div>
      <Row className={styles['style-row']}>
        <Col
          className={styles['style-col']}
          span={8}
          rules={[
            // {
            //   required: true,
            // },
            {
              type: 'name',
              warningOnly: true,
            },
            {
              type: 'string',
              min: 6,
            },
          ]}
        >
          <label htmlFor="">
            <span className={styles['title-label']}>Name</span>
            <span className={styles['red-require']}>*</span>
          </label>

          <Input placeholder="Enter owner name" />
        </Col>
        <Col className={styles['style-col']} span={8}>
          {' '}
          <label htmlFor="">
            <span className={styles['title-label']}>Email</span>
            <span className={styles['red-require']}>*</span>
          </label>
          <Input placeholder="Enter owner email" />
        </Col>
        <Col className={styles['style-col']} span={8}>
          {' '}
          <label htmlFor="">
            <span className={styles['title-label']}>Username</span>
            <span className={styles['red-require']}>*</span>
          </label>
          <Input placeholder="Enter owner username" />
        </Col>
      </Row>
      <Row className={styles['style-row']}>
        <Col className={styles['style-col']} span={8}>
          {' '}
          <label htmlFor="">
            <span className={styles['title-label']}>Password</span>
            <span className={styles['red-require']}>*</span>
          </label>
          <Input placeholder="Enter owner password" />
        </Col>
        <Col className={styles['style-col']} span={8}>
          <label htmlFor="">
            <span className={styles['title-label']}>Phone number</span>
            <span className={styles['red-require']}>*</span>
          </label>

          <Input placeholder="Enter owner phone number" />
        </Col>
        <Col className={styles['style-col']} span={8}>
          <label htmlFor="">
            <span className={styles['title-label']}>Gender</span>
            <span className={styles['red-require']}>*</span>
          </label>
          <Select
            showSearch
            style={{
              width: '100%',
            }}
            placeholder="Select owner gender"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: 'male',
                label: 'Male',
              },
              {
                value: 'female',
                label: 'Female',
              },
              {
                value: 'other',
                label: 'Other',
              },
            ]}
          />
        </Col>
      </Row>
      <Row className={styles['style-row']}>
        <Col className={styles['style-col']} span={8}>
          <label htmlFor="">
            <span className={styles['title-label']}>DOB</span>
            <span className={styles['red-require']}>*</span>
          </label>
          <DatePicker style={{ width: '100%' }} placeholder="Select a date" />
        </Col>
        <Col className={styles['style-col']} span={8}>
          <label htmlFor="">
            <span className={styles['title-label']}>Role</span>
            <span className={styles['red-require']}>*</span>
          </label>
          <Select
            showSearch
            style={{
              width: '100%',
            }}
            placeholder="Select a role"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: 'male',
                label: 'Male',
              },
              {
                value: 'female',
                label: 'Female',
              },
              {
                value: 'other',
                label: 'Other',
              },
            ]}
          />
        </Col>
        <Col className={styles['style-col']} span={8}>
          <label htmlFor="">
            <span className={styles['title-label']}>Status</span>
            <span className={styles['red-require']}>*</span>
          </label>
          <Select
            showSearch
            style={{
              width: '100%',
            }}
            placeholder="Select a status"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: 'male',
                label: 'Male',
              },
              {
                value: 'female',
                label: 'Female',
              },
              {
                value: 'other',
                label: 'Other',
              },
            ]}
          />
        </Col>
      </Row>
      <div className="choose-container">
        <div className="checkbox-garage">
            <Input placeholder="Search for garages .." />
            <Checkbox onChange={onChangeBox}>Garage ABC</Checkbox>
            <Checkbox onChange={onChangeBox}>TLS</Checkbox>
            <Checkbox onChange={onChangeBox}>AHC</Checkbox>
            <Checkbox onChange={onChangeBox}>CB Garage</Checkbox>
            <Checkbox onChange={onChangeBox}>UCQ</Checkbox>
        </div>
        <div className="list-garage">
            <label htmlFor="">Select garages</label>
            
        </div>
      </div>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onFill}>
            Fill
          </Button>
        </Space>
      </Form.Item>
    </div>
  );
}

export default CreateOwner;
