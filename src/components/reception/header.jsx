
import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Avatar, Space, Drawer } from 'antd';
import { HomeOutlined, UserOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import "@/style/reception/header.scss"
import logo from '@/assets/logo.png'



const Header = () => {
    const [le, setLe] = useState(
        () => {
            let locals = window.localStorage.getItem('theme')

            if (locals === null) {
                return 'light'
            } else {
                return locals
            }
        })
    const [lt, setLt] = useState(
        () => {
            if (le === 'light') {
                return '🌙'
            } else {
                return '🌞'
            }
        })
    const root = window.document.documentElement;
    const [emoji, setEmoji] = useState(lt)
    const [theme, setTheme] = useState(le)
    const bright = () => {
        emoji == '🌙' ? setEmoji('🌞') : setEmoji('🌙')
        theme == 'light' ? setTheme('dark') : setTheme('light')
    }
    useEffect(() => {
        root.className = theme
        window.localStorage.setItem('theme', theme)
    }, [theme])


    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const navigate = useNavigate();
    const handleGoTo = () => {
        navigate('/')
    }
    const Computer =
        <nav className='Computer'>
            <div onClick={handleGoTo}>
                <div>
                    <img src={logo} alt="Logo" height='60' width='60' />
                </div>

                <span>Sheep Wall</span>
            </div>
            <div>
                <NavLink className='link' to='/'           >🏠首页</NavLink>
                <NavLink className='link' to='/photowall'   >📷照片墙</NavLink>
                <NavLink className='link' to='/videowall'   >📽️视频墙</NavLink>
                <NavLink className='link' to='/about'       >👻关于</NavLink>
                <span style={{ cursor: 'none' }}>|</span>
                <span
                    onClick={bright}>{emoji}</span>
                <span className='user'>
                    <NavLink to='/admin'     ><UserOutlined /></NavLink>
                </span>

            </div>
        </nav>

    const Mobile =
        <nav className='Mobile' >
            <div  onClick={handleGoTo}>
                <img src={logo} alt="Logo" width='38' /><span>Sheep Wall</span>
            </div>
            <div>
                <span onClick={showDrawer}>
                    <MenuUnfoldOutlined />
                </span>
            </div>
            <Drawer title="SHEEP" width={228} className='sheep' placement="right" onClose={onClose} open={open}
                extra={
                    <Space>
                        <span style={{ cursor: 'pointer', userSelect: 'none' }} onClick={bright}>{emoji}</span>
                        <NavLink to='/admin'     ><UserOutlined /></NavLink>
                    </Space>
                }
            >
                <li onClick={()=>setOpen(false)}>    <NavLink to='/'             >🏠首页</NavLink></li>
                <li onClick={()=>setOpen(false)}>    <NavLink to='/photowall'   >📷照片墙</NavLink></li>
                <li onClick={()=>setOpen(false)}>    <NavLink to='/videowall'   >📽️视频墙</NavLink></li>
                <li onClick={()=>setOpen(false)}>    <NavLink to='/about'       >👻关于</NavLink></li>

            </Drawer>
        </nav >
    return (
        <header className='header' >
            {
                Computer
            }
            {
                Mobile
            }
        </header>
    )
}


export default Header;
