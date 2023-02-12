import 'antd/dist/antd.css'; 
import { useNavigate } from 'react-router-dom';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  CommentOutlined,
  AreaChartOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import React, { useState } from 'react';
import { Image } from 'antd';
import { Typography } from 'antd';
import { Button, Space } from 'antd';
const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const Homescreens = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} style = {{backgroundColor: "#434343"}}>
        <div className="logo" />
        <Menu
        style ={{backgroundColor: "#434343"}}
            onClick={({key}) => {
              navigate(key)
            }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '/Apply',
              icon: <DashboardOutlined />,
              label: 'Apply',
            },
            {
              key: '/Team',
              icon: <VideoCameraOutlined />,
              label: 'Team',
            },
            {
              key: '/Contact',
              icon: <CommentOutlined />,
              label: 'Contact',
            },
            {
              key: '/FAQ',
              icon: <AreaChartOutlined />,
              label: 'FAQ', 
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0, color:"#a8071a", backgroundColor: "#434343"
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
        <Title style ={{color:"#a8071a"}}>Welcome to Cornell Autoboat!!</Title>
          <Image
            width={600}
            src="https://user-content.givegab.com/uploads/campaign/story_image/145140/c609e09897dfac64780c721a8a7ab4646285fb9b.png"
          />  
          <Space wrap>
          <Button 
          style={{margin:200,backgroundColor:"white", color:"#a8071a"}}
          >Press to Apply</Button>
          </Space>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Homescreens;



// import React from 'react'
// import Menu from '../components/menu.js'
// import { Image } from 'antd';
// import { Typography } from 'antd';
// const { Title } = Typography;

// const Homescreen = () => {
//     <>
//     <Title>h1. Ant Design</Title>
//     </>
//   return(
//         <>
//         <Menu/>
//         </>
    
    
//   )
// }
// export default Homescreen;