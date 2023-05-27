
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { FileOutlined, PieChartOutlined, FileImageOutlined, VideoCameraOutlined, TeamOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import logo from '@/assets/logo.png'
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
// const items = [
//     getItem('控制台', '1', <PieChartOutlined />),
//     getItem('图片管理', '2', <FileImageOutlined />),
//     getItem('视频管理', 'sub1', <VideoCameraOutlined />,),
// ];

const items = [
    {
        key: '/admin',
        icon: <PieChartOutlined />,
        label: "数据概览"
    },
    {
        key: 'image',
        icon: <FileImageOutlined />,
        label: "图片管理"
    },
    {
        key: 'video',
        icon: <VideoCameraOutlined />,
        label: "视频管理"
    }
]
const AdminIndex = () => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const { token: { colorBgContainer }, } = theme.useToken();
    const onClick = (e) => {    //路由跳转
        navigate(e.key)
    }
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <div>
                    <img src={logo} alt="Logo" height='60' width='60' />
                    <h1>SHEEP</h1>
                </div>
                <Menu theme="dark" onClick={onClick} defaultSelectedKeys={'/admin'}
                    mode="inline"
                    style={{ height: '100%', borderRight: 0 }}
                    items={items} >

                </Menu>
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                />
                <Content
                    style={{
                        margin: '0 16px',
                        height: '80%'
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '10px',
                        }}
                        items={[
                            {
                                title: 'Home',
                            },
                            {
                                title: <a href="">Application Center</a>,
                            },
                            {
                                title: <a href="">Application List</a>,
                            },
                            {
                                title: 'An Application',
                            },
                        ]}
                    />
                    <div
                        style={{
                            padding: 24,
                            minHeight: 800,
                            background: colorBgContainer,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>

                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default AdminIndex;