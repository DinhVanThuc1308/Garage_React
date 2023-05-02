import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Select, DatePicker, Checkbox } from 'antd';
import binicon from './Vector.svg';
import styles from './styles.module.css';
import { Option } from 'antd/es/mentions';
import axiosInstance from '../../shared/services/http-client';
import { useState } from 'react';
import { message } from 'antd';

function CreateOwner() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      username: '',
      password: '',
      phoneNumber: '',
      gender: '',
      dob: '',
      role: '',
      status: '',
      garage: [],
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

  // notification
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const openMessageErr = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'error',
        content: 'Fail! Please try again! ',
        duration: 2,
      });
    }, 1000);
  };
  const openMessageAuke = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Success! You have created a new owner! ',
        duration: 2,
      });
    }, 1000);
  };
  // chosse garage
  const [checkedBoxes, setCheckedBoxes] = useState([]);

  const onChangeBox = e => {
    // const value = e.target.value;
    // if (e.target.checked) {
    //   setGarageList([...garageList, value]);
    // } else {
    //   setGarageList(garageList.filter(item => item !== value));
    // }
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setCheckedBoxes([...checkedBoxes, value]);
    } else {
      setCheckedBoxes(checkedBoxes.filter(item => item !== value));
    }
  };

  // delete garage
  const handleDelete = item => {
    setCheckedBoxes(checkedBoxes.filter(checked => checked !== item));
  };

  const onSubmit = data => {
    data.dob = data.dob.format('YYYY-MM-DD');
    data.garage = checkedBoxes;
    console.log(data);
    createOwner(data);
  };

  // search garage
  // const [garageList, setGarageList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const garageList = ['Garage ABC', 'TLS', 'AHC', 'CB Garage', 'UCQ'];

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  const filteredGarages =
    garageList &&
    garageList.filter(
      garage => garage.toLowerCase().includes(searchTerm.toLowerCase()) //lọc danh sách garage dựa vào searchTerm
    );

  // const handleSearchGarage = () => {

  //   axiosInstance.get(`garages?name=${searchTerm}`).then(res => {
  //     setGarageList(res.data);
  //   });
  // };

  // create owner

  const createOwner = data => {
    console.log({ data });
    delete data.status;
    // delete data.garage;
    axiosInstance.post('users', data)
    .then(res => {
      openMessageAuke();
      console.log(res);
      console.log(res.data);
    })
    .catch(err => {
      openMessageErr();
    });
  };

  return (
    <div className={styles['create-form']}>
      {contextHolder}
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
              name="fullname"
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
            {errors.fullname && (
              <p style={{ color: 'red' }}>Please enter your name</p>
            )}
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
            {errors.email && (
              <p style={{ color: 'red' }}>Please enter a valid email address</p>
            )}
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
            {errors.username && (
              <p style={{ color: 'red' }}>Please enter username</p>
            )}
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
            {errors.password && (
              <p style={{ color: 'red' }}>Please enter a valid password</p>
            )}
          </div>
          <div className={styles['row-item']}>
            <label htmlFor="" className={styles['title-label']}>
              Phone number <span style={{ color: 'red' }}>*</span>{' '}
            </label>
            <Controller
              name="phoneNumber"
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
            {errors.phone && (
              <p style={{ color: 'red' }}>Please enter a valid phonenumber</p>
            )}
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
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="Other">Other</Option>
                </Select>
              )}
            />
            {errors.gender && (
              <p style={{ color: 'red' }}>Please select gender</p>
            )}
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
            {errors.dob && (
              <p style={{ color: 'red' }}>Please select date of birth</p>
            )}
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
                  <Option value={1}>1</Option>
                  <Option value={2}>2</Option>
                  <Option value={3}>3</Option>
                </Select>
              )}
            />
            {errors.role && <p style={{ color: 'red' }}>Please select role</p>}
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
            {errors.status && (
              <p style={{ color: 'red' }}>Please select status</p>
            )}
          </div>
        </div>

        <div className={styles['choose-container']}>
          <div className={styles['checkbox-garage']}>
            <Input
              size="large"
              placeholder="Search for garages .."
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className={styles['checkbox-list']}>
              {filteredGarages.map(garageName => (
                <Checkbox
                  key={garageName}
                  style={{ marginLeft: '8px' }}
                  onChange={onChangeBox}
                  value={garageName}
                  checked={checkedBoxes.includes(garageName)}
                >
                  {garageName}
                </Checkbox>
              ))}
            </div>
          </div>
          <div className={styles['list-garage']}>
            <label htmlFor="">Select garages ({checkedBoxes.length})</label>
            {checkedBoxes.map(item => (
              <div className={styles['pickitem']} key={item}>
                <div className="pickitem-name">{item}</div>
                <img
                  src={binicon}
                  alt=""
                  onClick={() => handleDelete(item)}
                  style={{ cursor: 'pointer', marginLeft: '5px' }}
                />
              </div>
            ))}
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
