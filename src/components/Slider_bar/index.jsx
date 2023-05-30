import React from 'react';
import './Slider_bar.css';

import Update_Profile from '../Update_Profile';
import SearchAndFilter from '../SearchAndFilter';

// Create Owner
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
import { Link } from "react-router-dom";

import { useLocation } from 'react-router-dom';

// View Profile

const { Header, Sider, Content } = Layout;
//props. chi
const Slide_bar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('1');
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const location = useLocation();

  React.useEffect(() => {
    switch (location.pathname) {
      case '/garage_owner':
        setSelectedMenu('1');
        break;
      case '/Garage_manage':
        setSelectedMenu('2');
        break;
      case '/Garage_service':
        setSelectedMenu('4');
        break;
      default:
    }
  }, [location.pathname]);
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
          defaultSelectedKeys={[]}
          selectedKeys={[selectedMenu]}
          onSelect={({ key }) => setSelectedMenu(key)}
          items={[

            {
              key: '1',
              icon: <img src={sb_img}></img>,
              label: <Link to="/garage_owner">Garage Owner</Link>,
            },
            {
              key: '2',
              icon: <img src={sb_img}></img>,
              label: <Link to="/Garage_manage">Garage</Link>,
            },
            {
              key: '4',
              icon: <img src={sb_img}></img>,
              label: <Link to="/Garage_service">Garage-services</Link>,

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
            // padding: 24,
            minHeight: 280,
            background: selectedMenu === '2' || selectedMenu === '3' || selectedMenu === '4' ? '#e6e6e6' : colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Slide_bar;
