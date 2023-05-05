import React from 'react'
import styles from './ViewProfile.module.css';
import ellipse from './avt2.jpg';
import { Link } from 'react-router-dom';


export default function ViewProfile(props) {

    return (
        <div className={styles['container-view']}>
            <div className={styles['pf-container']}>
                <div className={styles['avatar']}>
                    <img className={styles['img_view_profile']} src={ellipse} />
                </div>
                <div className={styles['info-wrapper']}>
                    <div className={styles['info-left']}>

                        <div className={styles['title']}>
                            <label htmlFor="">Name</label>
                            <h1>{props.myProp.fullname}</h1>
                        </div>

                        <div className={styles['title']}>
                            <label htmlFor="">Phone Number</label>
                            <h1>{props.myProp.phoneNumber}</h1>
                        </div>

                        <div className={styles['title']}>
                            <label htmlFor="">Address</label>
                            <h1>Cau Giay, Ha Noi</h1>
                        </div>

                    </div>
                    <div className={styles['info-right']}>

                        <div className={styles['title']}>
                            <label htmlFor="">Email</label>
                            <h1>{props.myProp.email}</h1>
                        </div>

                        <div className={styles['title']}>
                            <label htmlFor="">DOB</label>
                            <h1>{props.myProp.dob}</h1>
                        </div>

                        <div className={styles['title']}>
                            <label htmlFor="">Role</label>
                            <h1>{props.myProp.role.description}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles['buttons']}>
                <button className={styles['update-btn']}>
                    <Link to="/update">Update Profile</Link>
                </button>
                <button className={styles['change-btn']}>
                    <Link to="/change_password">Change Password</Link>
                </button>
            </div>
        </div>
    )
}
