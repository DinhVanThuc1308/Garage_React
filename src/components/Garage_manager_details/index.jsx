import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axiosInstance from '../../shared/services/http-client.js';
import styles from './styles.module.css';

function GarageManagerDetails() {
    const [garage, setGarage] = useState([]);
    let { id } = useParams();
    useEffect(() => {
        axiosInstance
            .get(`garages/${id}?populate=owner&populate=services`)
            .then(res => {
                // Tiếp tục xử lý dữ liệu nếu cần thiết
                const {
                    name,
                    email,
                    phoneNumber,
                    address,
                    openTime,
                    closeTime,
                    owner,
                    status,
                } = res.data.attributes;
                const data = {
                    name,
                    email,
                    phoneNumber,
                    address,
                    openTime,
                    closeTime,
                    owner,
                    status,
                };
                data.id = res.data.id;
                setGarage(data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [id]);
    useEffect(() => {
        axiosInstance.get(`users`).then(res => {
            const data = res.data;
            const idOwner = data.find(item => item.garages.id === id);
            console.log(2222, idOwner);
        });
    }, []);

    return (
        <div>
            <div
                style={{ width: '100%', backgroundColor: '#f8f5f5', padding: '10px' }}
            >
                <h3 style={{ fontFamily: 'Poppins', fontSize: 20 }}>
                    <span
                        style={{ fontFamily: 'Poppins', fontSize: '23', color: '#cacaca' }}
                    >
                        Garage &gt;
                    </span>{' '}
                    {garage.name}
                </h3>
            </div>
            <div className="container-all-garage-details" key={garage.id}>
                <div className="container-infomation-garage-details">
                    <div className="container-infomation-up-garage-details">
                        <div className="container-infomation-up-1-garage-details">
                            <div className="letter">
                                Name:
                                <div className="container-infomation-up-1-1-garage-details">
                                    <div className="letter1">{garage.name}</div>
                                </div>
                            </div>
                            <div className="letter">
                                Email:
                                <div className="container-infomation-up-1-1-garage-details no-bold">
                                    <div className="letter1">{garage.email}</div>
                                </div>
                            </div>
                            <div className="letter">
                                Phone Number:
                                <div className="container-infomation-up-1-1-garage-details">
                                    <div className="letter1">{garage.phoneNumber}</div>
                                </div>
                            </div>
                        </div>
                        <div className="container-infomation-up-1-garage-details">
                            <div className="letter">
                                Address:
                                <div className="container-infomation-up-1-1-garage-details">
                                    <div className="letter1">{garage.address}</div>
                                </div>
                            </div>
                            <div className="letter">
                                Open Time:
                                <div className="container-infomation-up-1-1-garage-details no-bold">
                                    <div className="letter1">{garage.openTime}</div>
                                </div>
                            </div>
                            <div className="letter">
                                Close Time:
                                <div className="container-infomation-up-1-1-garage-details">
                                    <div className="letter1">{garage.closeTime}</div>
                                </div>
                            </div>
                        </div>
                        <div className="container-infomation-up-1-garage-details">
                            <div className="letter">
                                Garage Owner:
                                <div className="container-infomation-up-1-1-garage-details">
                                    <div className="letter1">{garage.name}</div>
                                </div>
                            </div>
                            <div className="letter">
                                Status:
                                <div className="container-infomation-up-1-1-garage-details">
                                    <div className="letter1">{garage.status}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-infomation-down-garage-details">
                        <div className="letter" style={{ marginTop: 30 }}>
                            Services
                        </div>
                        <div className="container-infomation-down-1-garage-details">
                            <div className="">
                                <div
                                    className=""
                                    style={{
                                        color: '#805EDF',
                                        fontFamily: 'Popins',
                                        fontSize: 20,
                                        fontWeight: 500,
                                        padding: '10px',
                                    }}
                                >
                                    Garage ABC
                                </div>
                            </div>
                            <div className="">
                                <div
                                    className=""
                                    style={{
                                        color: '#805EDF',
                                        fontFamily: 'Popins',
                                        fontSize: 20,
                                        fontWeight: 500,
                                        padding: '10px',
                                    }}
                                >
                                    TLS
                                </div>
                            </div>
                            <div className="">
                                <div
                                    className=""
                                    style={{
                                        color: '#805EDF',
                                        fontFamily: 'Popins',
                                        fontSize: 20,
                                        fontWeight: 500,
                                        padding: '10px',
                                    }}
                                >
                                    AHC
                                </div>
                            </div>
                            <div className="">
                                <div
                                    className=""
                                    style={{
                                        color: '#805EDF',
                                        fontFamily: 'Popins',
                                        fontSize: 20,
                                        fontWeight: 500,
                                        padding: '10px',
                                    }}
                                >
                                    CB Garage
                                </div>
                            </div>
                            <div className="">
                                <div
                                    className=""
                                    style={{
                                        color: '#805EDF',
                                        fontFamily: 'Popins',
                                        fontSize: 20,
                                        fontWeight: 500,
                                        padding: '10px',
                                    }}
                                >
                                    UCQ
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line" style={{ width: 0 }}></div>
                <div className="container-save-garage-details">
                    <div className="line"></div>
                    <div className={styles['btn-container']}>
                        <Link to={`/update_management/${garage.id}`}>
                            <button type="submit" className={styles['btn-save']}>
                                Update
                            </button>
                        </Link>
                        <Link to="/GarageManage">
                            <button type="button" className={styles['btn-cancel']}>
                                Cancel
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GarageManagerDetails;
