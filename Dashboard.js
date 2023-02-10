import React from 'react'
import Menu from '../components/menu.js'
function Dashboard() {
    return(
        <div>
            <Menu/>
        </div>
    )
}

export default Dashboard;


// import {
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   DashboardOutlined,
//   SettingOutlined,
//   CommentOutlined,
//   BankOutlined,
//   AreaChartOutlined,
//   VideoCameraOutlined,
//   DesktopOutlined,
//   FileOutlined,
//   RocketOutlined,
//   PieChartOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from '@ant-design/icons';
// import { Breadcrumb, Layout, Menu, Card } from 'antd';
// import React, { useState } from 'react';
// import { Table, Tooltip } from 'antd'; 
// import { Avatar } from 'antd';
// import Title from 'antd/lib/skeleton/Title';

// const { Header, Content, Footer, Sider } = Layout;
// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }
// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     render: (text) => <a>{text}</a>,
//     width: 150,
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//     width: 80,
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     key: 'address 1',
//     ellipsis: {
//       showTitle: false,
//     },
//     render: (address) => (
//       <Tooltip placement="topLeft" title={address}>
//         {address}
//       </Tooltip>
//     ),
//   },
//   {
//     title: 'Row',
//     dataIndex: 'address',
//     key: 'address 2',
//     ellipsis: {
//       showTitle: false,
//     },
//     render: (address) => (
//       <Tooltip placement="topLeft" title={address}>
//         {address}
//       </Tooltip>
//     ),
//   },
//   {
//     title: 'Row 2',
//     dataIndex: 'address',
//     key: 'address 3',
//     ellipsis: {
//       showTitle: false,
//     },
//     render: (address) => (
//       <Tooltip placement="topLeft" title={address}>
//         {address}
//       </Tooltip>
//     ),
//   },
//   {
//     title: 'Row 3',
//     dataIndex: 'address',
//     key: 'address 4',
//     ellipsis: {
//       showTitle: false,
//     },
//     render: (address) => (
//       <Tooltip placement="topLeft" title={address}>
//         {address}
//       </Tooltip>
//     ),
//   },
// ];
// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 2 Lake Park, London No. 2 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
//   },
// ];
// const items = [
//   getItem('Option 1', '1', <PieChartOutlined />),
//   getItem('Option 2', '2', <DesktopOutlined />),
//   getItem('User', 'sub1', <UserOutlined />, [
//     getItem('Sam', '3'),
//     getItem('User 2', '4'),
//     getItem('User 3', '5'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Files', '9', <FileOutlined />),
// ];
// const Dashboard = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   return (
//     <Layout>
//       <Sider trigger={null} collapsible collapsed={collapsed}>
//         <div className="logo" />
//         <Menu
//             onClick={({key}) => {

//             }}
//           theme="dark"
//           mode="inline"
//           defaultSelectedKeys={['1']}
//           items={[
//             {
//               key: '1',
//               icon: <DashboardOutlined />,
//               label: 'Dashboard',
//             },
//             {
//               key: '2',
//               icon: <VideoCameraOutlined />,
//               label: 'Overview',
//             },
//             {
//               key: '3',
//               icon: <CommentOutlined />,
//               label: 'Comment',
//             },
//             {
//               key: '4',
//               icon: <AreaChartOutlined />,
//               label: 'Analytics',
//             },
//             {
//               key: '5',
//               icon: <RocketOutlined />,
//               label: 'Performance',
//             },
//             {
//               key: '6',
//               icon: <TeamOutlined />,
//               label: 'Community',
//             },
//             {
//               key: '7',
//               icon: <BankOutlined />,
//               label: 'Accounting',
//             },
//             {
//               key: '8',
//               icon: <SettingOutlined />,
//               label: 'Settings',
//             },
//           ]}
//         />
//       </Sider>
//       <Layout className="site-layout">
//         <Header
//           className="site-layout-background"
//           style={{
//             padding: 0,
//           }}
//         >
//           {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//             className: 'trigger',
//             onClick: () => setCollapsed(!collapsed),
//           })}
//         </Header>
//         <Content
//           className="site-layout-background"
//           style={{
//             margin: '24px 16px',
//             padding: 24,
//             minHeight: 750,
//           }}
//         >
//           <div>
//           <Table
//             dataSource = {data}
//             columns = {columns}>
//             </Table>
//             <div style = {{display: "flex", jusitfyContent: "space-between" }}>
//               <Card style = {{flex: "1", height: "300", color: 'green'}}>179 Completed</Card>
//               <Card style = {{flex: "1", height : '300', color: 'blue'}}>278 Started</Card>
//               <Card style = {{flex: "1", height : '300', color: 'newcolor'}}>457 Invited (not yet started)</Card>
//             </div>

//           </div>
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default Dashboard;