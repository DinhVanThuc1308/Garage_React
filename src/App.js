// import Slider_bar from './components/Slider_bar/Slider_bar';
import './index.css';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import sb_img from './components/Slider_bar/asset/img/sb_img.png';
import sb_keybord_img from './components/Slider_bar/asset/img/sb__keybord.png';
import Header_avt from './components/Header/asset/img/avt2.jpg'

const { Header, Sider, Content } = Layout;

const App = () => {
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

          <div className='header__mini-profile'>
            <img className="header_avt" src={Header_avt}></img>

            <span className="header__text">
              <span className="header__text1" >Ha Nguyen</span>
              <span className="header__text2">Admin</span>
            </span>
          </div>

        </Header>


        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;