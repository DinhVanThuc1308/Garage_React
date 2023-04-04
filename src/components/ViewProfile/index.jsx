import React from 'react'
import './style.css'
import ellipse from './ellipse.jpg'
export default function ViewProfile() {
    return (
        <div className='all'>
            <div className='heading'>My Profile</div>
            <div className='container'>
                <div className='pf-container'>
                    <div className='avatar'>
                        <img src={ellipse} />
                    </div>
                    <div className='info-wrapper'>
                        <div className='info-left'>

                            <div className='title'>
                                <label htmlFor="">Name</label>
                                <h1>Ha Nguyen</h1>
                            </div>

                            <div className='title'>
                                <label htmlFor="">Phone Number</label>
                                <h1>0989 223 345</h1>
                            </div>

                            <div className='title'>
                                <label htmlFor="">Address</label>
                                <h1>Cau Giay, Ha Noi</h1>
                            </div>

                        </div>
                        <div className='info-right'>

                            <div className='title'>
                                <label htmlFor="">Email</label>
                                <h1>ha.nguyen@gmail.com</h1>
                            </div>

                            <div className='title'>
                                <label htmlFor="">DOB</label>
                                <h1>25/01/1992</h1>
                            </div>

                            <div className='title'>
                                <label htmlFor="">Role</label>
                                <h1>Admin</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='buttons'>
                    <button className='update-btn'>
                        <a href='/update-profile'>Update Profile</a>
                    </button>
                    <button className='change-btn'>
                        <a href='/change-password'>Change Password</a>
                    </button>
                </div>
            </div>
        </div>
    )
}
