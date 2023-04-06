import React from "react";
import sb_img from '../Slider_bar/asset/img/sb_img.png'
import sb_keybord_img from '../Slider_bar/asset/img/sb__keybord.png'
import './Slider_bar.css';
import ChangePassword from '../ChangePassword';
import Update_Profile from "../Update_Profile";
import SearchAndFilter from "../SearchAndFilter";
import ViewProfile from "../ViewProfile";

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, DatePicker } from 'antd';
import { useState } from 'react';
// import sb_img from './components/Slider_bar/asset/img/sb_img.png';
// import sb_keybord_img from './components/Slider_bar/asset/img/sb__keybord.png';
// import Header_avt from './components/Header/asset/img/avt2.jpg'
import Header_avt from '../Header/asset/img/avt2.jpg'
import Icon from './asset/img/Vector.png'
const { Header, Sider, Content } = Layout;

const Slide_bar = () => {
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
                            // icon: <img src={sb_img}></img>,
                            label: 'Garage',
                        },
                        {
                            key: '2',
                            // icon: <img src={sb_img}></img>,
                            label: 'Garage-owner',
                        },
                        {
                            key: '3',
                            // icon: <img src={sb_img}></img>,
                            label: 'Garage-staff',
                        },
                        {
                            key: '4',
                            // icon: <img src={sb_img}></img>,
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
{/* 
                    <div className='header__mini-profile'>
                        <img className="header_avt" ></img>

                        <span className="header__text">
                            <span className="header__text1" >Ha Nguyen</span>
                            <span className="header__text2">Admin</span>
                        </span>
                    </div> */}

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
                    // style={{
                    //     margin: '24px 16px',
                    //     padding: 24,
                    //     minHeight: 280,
                    //     background: colorBgContainer,
                    // }}
                >
                    {/* <SearchAndFilter /> */}
                    {/* <Update_Profile/> */}
                    <ViewProfile />
                    {/* <h1>Change Password</h1>
                    <ChangePassword /> */}
                </Content>
            </Layout>
        </Layout>

    );

};
export default Slide_bar;