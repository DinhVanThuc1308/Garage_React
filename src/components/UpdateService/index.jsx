import React from 'react';
import { Input, message } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import axiosInstance from '../../shared/services/http-client';
import styles from './styles.module.css';

export default function UpdateService() {
  const { TextArea } = Input;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      minPrice: '',
      maxPrice: '',
      description: '',
    },
  });

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

  const onSubmit = data => {
    console.log(data);
    updateService(data);
  };

  const updateService = data => {
    console.log({ data });
    delete data.status;
    // delete data.garage;
    axiosInstance
      .put('garage-services/:id', data)
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
    <div className={styles['update-form']}>
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
                  placeholder="Enter service name"
                />
              )}
            />
            {errors.name && (
              <p style={{ color: 'red' }}>Please enter service name</p>
            )}
          </div>
          <div className={styles['row-item']}>
            <label htmlFor="" className={styles['title-label']}>
              Min price <span style={{ color: 'red' }}>*</span>{' '}
            </label>
            <Controller
              name="minPrice"
              control={control}
              rules={{ required: true, pattern: /^[0-9]*$/ }}
              render={({ field }) => (
                <Input size="large" {...field} placeholder="Enter min price" />
              )}
            />
            {errors.minPrice && (
              <p style={{ color: 'red' }}>Please enter a valid min price</p>
            )}
          </div>
          <div className={styles['row-item']}>
            <label htmlFor="" className={styles['title-label']}>
              Max price <span style={{ color: 'red' }}>*</span>{' '}
            </label>
            <Controller
              name="maxPrice"
              control={control}
              rules={{ required: true, pattern: /^[0-9]*$/ }}
              render={({ field }) => (
                <Input size="large" {...field} placeholder="Enter max price" />
              )}
            />
            {errors.maxPrice && (
              <p style={{ color: 'red' }}>Please enter a valid max price</p>
            )}
          </div>
        </div>
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
        <hr style={{ width: '100%' }} />
        <div className={styles['btn-container']}>
          <button type="submit" className={styles['btn-save']}>
            Save
          </button>
          <button type="cancel" className={styles['btn-cancel']}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
