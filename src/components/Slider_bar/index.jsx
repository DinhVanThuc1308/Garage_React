import React from 'react';
import './Slider_bar.css';

import Update_Profile from '../Update_Profile';
import SearchAndFilter from '../SearchAndFilter';

// Create Owner
import CreateOwner from '../CreateOwner';
import { Breadcrumb } from 'antd';

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, DatePicker } from 'antd';
import { useState } from 'react';

// import img của slider bar
import sb_img from '../Slider_bar/asset/img/sb_img.png';
import sb_keybord_img from '../Slider_bar/asset/img/sb__keybord.png';
import Header_content from '../Header/Header_content';
import Table from '../Table';
// import Button from "../Button";
import Icon from './asset/img/Vector.png';
import Logout from '../Logout/Logout';

// View Profile
import ViewProfile from '../ViewProfile/ViewProfile';

const { Header, Sider, Content } = Layout;
//props. chi
const Slide_bar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        theme="light"
        className="Slide_bar"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <p className="Slider_text">Menu</p>

        <Menu
          className="sb_item"
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
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            }
          )}

          <Header_content></Header_content>
          {/* <Logout></Logout> */}
        </Header>

        <div
          style={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: '32px',
            marginLeft: '16px',
            marginTop: '16px',
          }}
        >
          <h1>My Profile</h1>
         
        </div>
        {/* <Breadcrumb
            separator=">"
            items={[
              {
                title: 'All Garages',
              },
              {
                title: 'Add a new owner',
                href: '',
              },
            ]}
          /> */}
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <CreateOwner></CreateOwner>
          {/* <ViewProfile></ViewProfile> */}
          {/* <SearchAndFilter /> */}
          {/* <Update_Profile /> */}
          {/* <h1>Change Password</h1>
                    <ChangePassword /> */}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Slide_bar;
