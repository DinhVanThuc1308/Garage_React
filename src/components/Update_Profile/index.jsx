import React from 'react';
import { Layout, Menu, theme, DatePicker } from 'antd';
import { useState } from 'react';
import Header_avt from '../Header/asset/img/avt2.jpg';
import Icon from '../Slider_bar/asset/img/Vector.png';
import './style.css';

function Update_Profile() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ display: 'flex', flex: 9, height: '100%' }}>
        <div
          style={{
            flexBasis: '50%',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ position: 'relative' }}>
            <img
              src={Header_avt}
              style={{
                height: '250px',
                width: '250px',
                borderRadius: '250px',
                margin: 'auto',
                background: 'rgba(17, 17, 17, 0.3);',
              }}
            />
            <span
              className="icon"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <img src={Icon} alt="icon" />
            </span>
          </div>
        </div>
        <div style={{ flexBasis: '50%', backgroundColor: '#FFFFFF' }}>
          <form style={{ display: 'flex', border: 0 }}>
            <label htmlFor="name">Name:</label>
            <input
              type="Textbox"
              id="name"
              name="name"
              placeholder="Nhập tên"
              value="Ha Nguyen"
              style={{ marginBottom: '20px', padding: '16px' }}
            />

            <label htmlFor="email">Email:</label>
            <input
              className="silver-text"
              type="Textbox"
              id="email"
              name="email"
              placeholder="Nhập email"
              value="ha.nguyen@gmail.com"
              style={{
                marginBottom: '20px',
                padding: '16px',
                background: '#EEEEEE',
                borderRadius: '8px',
              }}
            />

            <label htmlFor="userName">UserName:</label>
            <input
              className="silver-text"
              type="Textbox"
              id="userName"
              name="userName"
              placeholder="Nhập Username"
              value="ha.nguyen"
              style={{
                marginBottom: '20px',
                padding: '16px',
                background: '#EEEEEE',
                borderRadius: '8px',
              }}
            />

            <div
              className="container"
              style={{ display: 'flex', height: '100%' }}
            >
              <div
                style={{ flexBasis: '50%', marginRight: 10, height: '100px' }}
              >
                <label htmlFor="DatePicker">Dob:</label>
                <DatePicker style={{ width: '170px', padding: '9px' }} />
              </div>
              <div style={{ flexBasis: '50%' }}>
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="Textbox"
                  id="phone"
                  name="phone"
                  placeholder="Nhập PhoneNumber"
                  style={{
                    marginBottom: '10px',
                    padding: '16px',
                    width: '220px',
                  }}
                />
              </div>
            </div>

            <label htmlFor="address">Address:</label>
            <input
              type="Textbox"
              id="address"
              name="address"
              placeholder="Nhập address"
              value="CauGiay,HaNoi"
              style={{ marginBottom: '20px', padding: '16px' }}
            />

            <label htmlFor="role">Role</label>
            <input
              className="silver-text"
              type="Textbox"
              id="role"
              name="role"
              value="admin"
              style={{
                marginBottom: '20px',
                padding: '16px',
                background: '#EEEEEE',
                borderRadius: '8px',
              }}
            />
          </form>
        </div>
      </div>
      <div style={{ flex: 2 }}>
        <div className="button-container" style={{ display: 'flex' }}>
          <button
            className="save-button"
            style={{
              display: 'flex',
              marginRight: 10,
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: '12px 16px',
              width: '179px',
              height: '48px',
              textAlign: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: '#8767E1',
              border: 0,
              borderRadius: '8px',
            }}
          >
            Save
          </button>
          <button
            className="cancel-button"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: '12px 16px',
              width: '179px',
              height: '48px',
              textAlign: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: '#FFFFFF',
              borderRadius: '8px',
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Update_Profile;
