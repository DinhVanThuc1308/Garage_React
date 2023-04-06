
import React from "react";
import './Slider_bar.css';
import ChangePassword from '../ChangePassword';
import Update_Profile from "../Update_Profile";
import SearchAndFilter from "../SearchAndFilter";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, DatePicker } from 'antd';
import { useState } from 'react';

// import img của slider bar
import sb_img from '../Slider_bar/asset/img/sb_img.png';
import sb_keybord_img from '../Slider_bar/asset/img/sb__keybord.png';


import Header_content from "../Header/Header_content";
import Table from "../Table";
// import Button from "../Button";

import Icon from './asset/img/Vector.png'
import Logout from "../Logout/Logout";
const { Header, Sider, Content } = Layout;

const Slide_bar = () => {

    function EClick() {
        alert("Xin chao");
    }

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Sider theme='light' className='Slide_bar' trigger={null} collapsible collapsed={collapsed}>
                <p className='Slider_text'>Menu</p>

                <Menu className='sb_item'
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <img src={sb_img}></img>,
                            label: 'Garage',
                        },
                        {
                            key: '2',
                            icon: <img src={sb_img}></img>,
                            label: 'Garage-owner',
                        },
                        {
                            key: '3',
                            icon: <img src={sb_img}></img>,
                            label: 'Garage-staff',
                        },
                        {
                            key: '4',
                            icon: <img src={sb_img}></img>,
                            label: 'Garage-services',
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header

                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >

                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}

                    <Header_content></Header_content>
                    {/* <Logout></Logout> */}

                </Header>

                <div style={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontƯeight: 700,
                    fontSize: '24px',
                    lineHeight: '32px'
                }}>
                    {/* <h1>My Profile</h1> */}
                </div>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    {/* DDaay la code  Garage_owner_list
                    <div className="Garage_owner_list" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h1>All Garages</h1>
                        <button className="add_garage" onClick={EClick} style={{ width: '140px', height: '48px', background: '#8767E1', borderRadius: '8px', border: 'none' }}>Add Garage</button>
                    </div>
                    <SearchAndFilter />

                    <Table />  */}
                    {/* <Update_Profile /> */}
                    {/* <h1>Change Password</h1>
                    <ChangePassword /> */}
                </Content>
            </Layout>
        </Layout>

    );

};
export default Slide_bar;