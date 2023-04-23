import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Input,
  Select,
  DatePicker,
  Checkbox,
} from 'antd';
import binicon from './Vector.svg';
import styles from './styles.module.css';
import { Option } from 'antd/es/mentions';

function CreateOwner() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      username: '',
      password: '',
      phone: '',
      gender: '',
      dob: '',
      role: '',
      status: '',
    },
  });


  //   select
  // const onChange = value => {
  //   console.log(`selected ${value}`);
  // };
  // const onSearch = value => {
  //   console.log('search:', value);
  // };
  // date picker

  //   Checkbox
  const onChangeBox = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className={styles['create-form']}>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className={styles['form-container']}
      >
        <div className={styles['form-row']}>
          <div className={styles['row-item']}>
            <label htmlFor="" className={styles['title-label']}>
              Name <span style={{ color: 'red' }}>*</span>{' '}
            </label>
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  {...field}
                  style={{ width: '100%' }}
                  size="large"
                  placeholder="Enter owner name"
                />
              )}
            />
            {errors.name && <p style={{ color: "red" }}>Please enter your name</p>}
          </div>
          <div className={styles['row-item']}>
            <label htmlFor="" className={styles['title-label']}>
              Email <span style={{ color: 'red' }}>*</span>{' '}
            </label>
            <Controller
              name="email"
              control={control}
              rules={{ required: true, pattern: /^\S+@\S+$/i }}
              render={({ field }) => (
                <Input
                  size="large"
                  {...field}
                  placeholder="Enter owner email"
                />
              )}
            />
            {errors.email && <p style={{ color: "red" }}>Please enter a valid email address</p>}
          </div>
          <div className={styles['row-item']}>
            <label htmlFor="" className={styles['title-label']}>
              Username <span style={{ color: 'red' }}>*</span>{' '}
            </label>
            <Controller
              name="username"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  size="large"
                  {...field}
                  placeholder="Enter owner username"
                />
              )}
            />
            {errors.username && <p style={{ color: "red" }}>Please enter username</p>}
          </div>
        </div>
        <div className={styles['form-row']}>
          <div className={styles['row-item']}>
            <label htmlFor="" className={styles['title-label']}>
              Password <span style={{ color: 'red' }}>*</span>{' '}
            </label>
            <Controller
              name="password"
              control={control}
              rules={{ required: true, minLength: 6 }}
              render={({ field }) => (
                <Input
                  {...field}
                  style={{ width: '100%' }}
                  size="large"
                  placeholder="Enter owner password"
                />
              )}
            />
            {errors.password && <p style={{ color: "red" }}>Please enter a valid password</p>}
          </div>
          <div className={styles['row-item']}>
            <label htmlFor="" className={styles['title-label']}>
              Phone number <span style={{ color: 'red' }}>*</span>{' '}
            </label>
            <Controller
              name="phone"
              control={control}
              rules={{ required: true, minLength: 10, maxLength: 10 }}
              render={({ field }) => (
                <Input
                  size="large"
                  {...field}
                  placeholder="Enter owner phone number"
                />
              )}
            />
            {errors.phone && <p style={{ color: "red" }}>Please enter a valid phonenumber</p>}
          </div>
          <div className={styles['row-item']}>
            <label htmlFor="" className={styles['title-label']}>
              Gender <span style={{ color: 'red' }}>*</span>{' '}
            </label>
            <Controller
              name="gender"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  size="large"
                  {...field}
                  placeholder="Select owner gender"
                  allowClear
                >
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                  <Option value="Other">Other</Option>
                </Select>
              )}
            />
            {errors.gender && <p style={{ color: "red" }}>Please select gender</p>}
          </div>
        </div>
        <div className={styles['form-row']}>
          <div className={styles['row-item']}>
            <label htmlFor="" className={styles['title-label']}>
              DOB <span style={{ color: 'red' }}>*</span>{' '}
            </label>
            <Controller
              name="dob"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <DatePicker {...field} size="large"></DatePicker>
              )}
            />
            {errors.dob && <p style={{ color: "red" }}>Please select date of birth</p>}
          </div>
          <div className={styles['row-item']}>
            <label htmlFor="" className={styles['title-label']}>
              Role <span style={{ color: 'red' }}>*</span>{' '}
            </label>
            <Controller
              name="role"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  size="large"
                  placeholder="Select a role"
                  {...field}
                  allowClear
                >
                  <Option value="User">User</Option>
                  <Option value="Admin">Admin</Option>
                  <Option value="Other">Other</Option>
                </Select>
              )}
            />
            {errors.role && <p style={{ color: "red" }}>Please select role</p>}
          </div>
          <div className={styles['row-item']}>
            <label htmlFor="" className={styles['title-label']}>
              Status <span style={{ color: 'red' }}>*</span>{' '}
            </label>
            <Controller
              name="status"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  {...field}
                  size="large"
                  placeholder="Select a Status"
                  allowClear
                >
                  <Option value="Active">Active</Option>
                  <Option value="Deactive">Deactive</Option>
                  <Option value="Other">Other</Option>
                </Select>
              )}
            />
            {errors.status && <p style={{ color: "red" }}>Please select status</p>}
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
          <button type="submit" className={styles['btn-save']}>
            Save
          </button>
          <button type="cancel" className={styles['btn-cancel']}>
            Cancel
          </button>
        </div>
        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  );
}

export default CreateOwner;
