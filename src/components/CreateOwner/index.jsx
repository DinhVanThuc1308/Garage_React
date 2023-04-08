import React from 'react';
import { Row, Col } from 'antd';
import { Button, Form, Input, message, Space, Select, DatePicker } from 'antd';
import dayjs from 'dayjs';

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
  return (
    <div>
      <Row >
        <Col
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
            <span>Name</span>
            <span>*</span>
          </label>

          <Input placeholder="Enter owner name" />
        </Col>
        <Col span={8}>
          {' '}
          <label htmlFor="">
            <span>Email</span>
            <span>*</span>
          </label>
          <Input placeholder="Enter owner email" />
        </Col>
        <Col span={8}>
          {' '}
          <label htmlFor="">
            <span>Username</span>
            <span>*</span>
          </label>
          <Input placeholder="Enter owner username" />
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          {' '}
          <label htmlFor="">
            <span>Password</span>
            <span>*</span>
          </label>
          <Input placeholder="Enter owner password" />
        </Col>
        <Col span={8}>
          <label htmlFor="">
            <span>Phone number</span>
            <span>*</span>
          </label>

          <Input placeholder="Enter owner phone number" />
        </Col>
        <Col span={8}>
          <label htmlFor="">
            <span>Gender</span>
            <span>*</span>
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
      <Row>
        <Col span={8}>
          <label htmlFor="">
            <span>DOB</span>
            <span>*</span>
          </label>
          <DatePicker  style={{ width: '100%' }}  placeholder= 'Select a date'/>
        </Col>
        <Col span={8}>
          <label htmlFor="">
            <span>Role</span>
            <span>*</span>
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
        <Col span={8}>
          <label htmlFor="">
            <span>Status</span>
            <span>*</span>
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
