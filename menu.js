import 'antd/dist/antd.css'; 
import { useNavigate } from 'react-router-dom';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  SettingOutlined,
  CommentOutlined,
  BankOutlined,
  AreaChartOutlined,
  VideoCameraOutlined,
  DesktopOutlined,
  FileOutlined,
  RocketOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Card } from 'antd';
import React, { useState } from 'react';
import { Table, Tooltip } from 'antd'; 
import { Avatar } from 'antd';
import Title from 'antd/lib/skeleton/Title';

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}


const Menus = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
            onClick={({key}) => {
              navigate(key)
            }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '/Dashboard',
              icon: <DashboardOutlined />,
              label: 'Dashboard',
            },
            {
              key: '/Overview',
              icon: <VideoCameraOutlined />,
              label: 'Overview',
            },
            {
              key: '/Comment',
              icon: <CommentOutlined />,
              label: 'Comment',
            },
            {
              key: '/Analytics',
              icon: <AreaChartOutlined />,
              label: 'Analytics',
            },
            {
              key: '/Performance',
              icon: <RocketOutlined />,
              label: 'Performance',
            },
            {
              key: '/Community',
              icon: <TeamOutlined />,
              label: 'Community',
            },
            {
              key: '/Accounting',
              icon: <BankOutlined />,
              label: 'Accounting',
            },
            {
              key: '/Settings',
              icon: <SettingOutlined />,
              label: 'Settings',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 750,
          }}
        >

        </Content>
      </Layout>
    </Layout>
  );
};

export default Menus;