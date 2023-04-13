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
      <div className={styles['choose-container']}>
        <div className={styles['checkbox-garage']}>
          <Input placeholder="Search for garages .." />
          <div className={styles['checkbox-list']}>
            <Checkbox style={{marginLeft: '8px'}} onChange={onChangeBox}>Garage ABC</Checkbox>
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

      <hr style={{width: '100%'}}/>
      <div className={styles['btn-container']}>
        <Button type='primary' className={styles['btn-save']}>Save</Button>
        <Button className={styles['btn-cancel']}>Cancel</Button>
      </div>
    </div>
  );
}

export default CreateOwner;
