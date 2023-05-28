import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Select, Checkbox, } from 'antd';
import binicon from './Vector.svg';
import styles from './styles.module.css';
import { Option } from 'antd/es/mentions';
import axiosInstance from '../../../shared/services/http-client';
import { useState, useEffect } from 'react';
import { message } from 'antd';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom'

function Update_managetment() {
    let { id } = useParams();
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

    const onSubmit = object => {
        object.services = checkedBoxes;
        const data = {
            name: object.name,
            address: object.address,
            status: object.status,
            phoneNumber: object.phoneNumber,
            email: object.email,
            openTime: object.openTime,
            closeTime: object.closeTime,
            description: object.description,
            policy: object.policy,
            owner: object.owner,
            services: object.services,
        };
        console.log(object, 111);
        console.log(data, 222);
        updateGarage({ data }, id);
    };

    // search garage
    // const [serviceList, setserviceList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [serviceList, setServiceList] = useState([]);
    const [ownerList, setOwnerList] = useState([]);

    // Call API userId(owner) list
    // useEffect(() => {
    //     axiosInstance.get(`users`).then(res => {
    //         setOwnerList(res.data);
    //     });
    // }, []);

    // Call API garage-service list
    useEffect(() => {
        axiosInstance.get(`garage-services`).then(res => {
            setServiceList(res.data);
            console.log(res.data);
        });
    }, []);

    useEffect(() => {
        axiosInstance.get(`users`).then(res => {
            setOwnerList(res);
            console.log(res);
        });
    }, []);
    const handleSearch = e => {
        setSearchTerm(e.target.value);
    };

    // call API of managetment
    const [managetmentList, setManagetmentList] = useState([]);
    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await axiosInstance.get(`garages/${id}`);

            setManagetmentList(response.data);

            console.log(22222, id);

        }
        fetchData();
    }, [id]);
    console.log(managetmentList, 1111);

    const filteredServices = serviceList.filter(
        service =>
            service.attributes.name.toLowerCase().includes(searchTerm.toLowerCase()) //lọc danh sách garage dựa vào searchTerm
    );


    // const handleSearchGarage = () => {

    //   axiosInstance.get(`garages?name=${searchTerm}`).then(res => {
    //     setserviceList(res.data);
    //   });
    // };

    // create owner

    const updateGarage = (data, idNumber) => {



        axiosInstance
            .put(`garages/${idNumber}`, data)
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
        <>
            <div style={{ width: '100%', backgroundColor: '#f8f5f5', padding: '10px' }}>
                <h3 style={{ fontFamily: 'Poppins', fontSize: 20 }}><span style={{ fontFamily: 'Poppins', fontSize: "23", color: '#cacaca' }} >All Garages  &gt;</span>  {managetmentList.attributes?.name}   </h3>
            </div>
            <div className={styles['create-form']} >
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


                                        placeholder={managetmentList.attributes?.name}

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
                                        placeholder={managetmentList.attributes?.email}
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
                                        placeholder={managetmentList.attributes?.phoneNumber}
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

                                        placeholder={managetmentList.attributes?.address}
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
                                        placeholder={managetmentList.attributes?.openTime}
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
                                        placeholder={managetmentList.attributes?.openTime}
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
                                        placeholder={managetmentList.attributes?.owner}
                                        {...field}
                                        allowClear
                                    >
                                        {ownerList.map(owner => (
                                            <Option key={owner} value={owner.id}>
                                                {owner.fullname}
                                            </Option>
                                        ))}
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
                                        placeholder={managetmentList.attributes?.status}
                                        allowClear
                                    >
                                        <Option value="active">active</Option>
                                        <Option value="inactive">inactive</Option>

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
                                        placeholder={managetmentList.attributes?.description}
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
                                        placeholder={managetmentList.attributes?.policy}
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
                                placeholder="Search for service .."
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                            <div className={styles['checkbox-list']}>
                                {filteredServices.map(serviceName => (
                                    <Checkbox
                                        key={serviceName}
                                        style={{ marginLeft: '8px' }}
                                        onChange={onChangeBox}
                                        value={serviceName.id}
                                        checked={checkedBoxes.includes(serviceName.id)}
                                    >
                                        {serviceName.attributes.name}
                                    </Checkbox>
                                ))}
                            </div>
                        </div>
                        <div className={styles['list-garage']}>
                            <label htmlFor="">Select services ({checkedBoxes.length})</label>
                            {checkedBoxes.map(item => {
                                const IDObject = serviceList.find(obj => obj.id === item);
                                console.log(IDObject);
                                return (
                                    <div className={styles['pickitem']} key={item}>
                                        <div className="pickitem-name">
                                            {IDObject.attributes.name}
                                        </div>
                                        <img
                                            src={binicon}
                                            alt=""
                                            onClick={() => handleDelete(item)}
                                            style={{ cursor: 'pointer', marginLeft: '5px' }}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <hr style={{ width: '100%' }} />
                    <div className={styles['btn-container']}>
                        <button type="submit" className={styles['btn-save']}>
                            Save
                        </button>
                        <Link to='/Garage_manage'>
                            <button type="button" className={styles['btn-cancel']}>
                                Cancel
                            </button>
                        </Link>

                    </div>

                    {/* <button type="submit">Submit</button> */}
                </form>

            </div>
        </>
    );
}

export default Update_managetment;
