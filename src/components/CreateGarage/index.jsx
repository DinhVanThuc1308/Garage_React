import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Select, Checkbox } from 'antd';
import binicon from './Vector.svg';
import styles from './styles.module.css';
import { Option } from 'antd/es/mentions';
import axiosInstance from '../../shared/services/http-client';
import { useState } from 'react';
import { message } from 'antd';

function CreateGarage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      address: '',
      status: '',
      phoneNumber: '',
      email: '',
      openTime: '',
      closeTime: '',
      description: '',
      policy: '',
      owner: '',
      services: [],
    },
  });

  const { TextArea } = Input;

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
        content: 'Success! You have created a new garage! ',
        duration: 2,
      });
    }, 1000);
  };
  // choose garage
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
    data.services = checkedBoxes;
    console.log(data);
    createGarage(data);
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

  const createGarage = data => {
    console.log(data);
    // delete data.garage;
    axiosInstance
      .post('garages', data)
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
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  {...field}
                  style={{ width: '100%' }}
                  size="large"
                  placeholder="Enter garage name"
                />
              )}
            />
            {errors.name && (
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
                  placeholder="Enter garage email"
                />
              )}
            />
            {errors.email && (
              <p style={{ color: 'red' }}>Please enter a valid email address</p>
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
                  placeholder="Enter phone number"
                />
              )}
            />
            {errors.phone && (
              <p style={{ color: 'red' }}>Please enter a valid phonenumber</p>
            )}
          </div>
        </div>
        <div className={styles['form-row']}>
          <div className={styles['row-item']}>
            <label htmlFor="" className={styles['title-label']}>
              Address <span style={{ color: 'red' }}>*</span>{' '}
            </label>
            <Controller
              name="address"
              control={control}
              rules={{ required: true, minLength: 3 }}
              render={({ field }) => (
                <Input
                  {...field}
                  style={{ width: '100%' }}
                  size="large"
                  placeholder="Enter garage address"
                />
              )}
            />
            {errors.password && (
              <p style={{ color: 'red' }}>Please enter a valid address</p>
            )}
          </div>
          <div className={styles['row-item']}>
            <label htmlFor="" className={styles['title-label']}>
              Open time <span style={{ color: 'red' }}>*</span>{' '}
            </label>
            <Controller
              name="openTime"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  size="large"
                  {...field}
                  placeholder="Select open time"
                  allowClear
                >
                  <Option value="07:00:00">07:00:00</Option>
                  <Option value="09:00:00.000">09:00:00.000</Option>
                  <Option value="11:00:00">11:00:00</Option>
                </Select>
              )}
            />
            {errors.openTime && (
              <p style={{ color: 'red' }}>Please select openTime</p>
            )}
          </div>
          <div className={styles['row-item']}>
            <label htmlFor="" className={styles['title-label']}>
              Close time <span style={{ color: 'red' }}>*</span>{' '}
            </label>
            <Controller
              name="closeTime"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  size="large"
                  {...field}
                  placeholder="Select close time"
                  allowClear
                >
                  <Option value="18:00:00">18:00:00</Option>
                  <Option value="20:00:00.000">20:00:00.000</Option>
                  <Option value="22:00:00">22:00:00</Option>
                </Select>
              )}
            />
            {errors.closeTime && (
              <p style={{ color: 'red' }}>Please select closeTime</p>
            )}
          </div>
        </div>
        <div className={styles['form-row-last']}>
          <div className={styles['row-item-last']}>
            <label htmlFor="" className={styles['title-label']}>
              Garage owner <span style={{ color: 'red' }}>*</span>{' '}
            </label>
            <Controller
              name="owner"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  size="large"
                  placeholder="Select a garage owner"
                  {...field}
                  allowClear
                >
                  <Option value={1}>1</Option>
                  <Option value={2}>2</Option>
                  <Option value={3}>3</Option>
                </Select>
              )}
            />
            {errors.owner && (
              <p style={{ color: 'red' }}>Please select garage owner</p>
            )}
          </div>
          <div className={styles['row-item-last']}>
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
                  <Option value="active">active</Option>
                  <Option value="deactive">deactive</Option>
                  <Option value="other">Other</Option>
                </Select>
              )}
            />
            {errors.status && (
              <p style={{ color: 'red' }}>Please select status</p>
            )}
          </div>
        </div>
        <div className={styles['textarea-form']}>
          <div className={styles['description-form']}>
            <label htmlFor="">
              Description <span className={styles['red-require']}>*</span>
            </label>
            <br />
            <Controller
              name="description"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextArea
                  rows={5}
                  placeholder="Enter a description"
                  maxLength={10}
                  style={{ width: '100%' }}
                  {...field}
                />
              )}
            />
            {errors.description && (
              <p style={{ color: 'red' }}>Please enter a description</p>
            )}
          </div>
          <div className={styles['policy-form']}>
            <label htmlFor="">
              Policy <span className={styles['red-require']}>*</span>
            </label>
            <br />
            <Controller
              name="policy"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextArea
                  rows={5}
                  placeholder="Enter a policy"
                  maxLength={10}
                  style={{ width: '100%' }}
                  {...field}
                />
              )}
            />
            {errors.policy && (
              <p style={{ color: 'red' }}>Please enter a policy</p>
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

export default CreateGarage;
