import React from 'react'
import { button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../img/cryptoapp.png'
import MenuItem from 'antd/es/menu/MenuItem';


const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size='large' />
            <Typography.Title level={2} className='logo'>
                <Link to={"/"}>CryptoApp</Link>
            </Typography.Title>
        </div>
        <Menu theme='dark'>
            <Menu.Item icon={<HomeOutlined/>}>
                <Link to={'/'}>Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined/>}>
                <Link to={'/cryptocurrencies'}>Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined/>}>
                <Link to={'/exchanges'}>Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined/>}>
                <Link to={'/news'}>News</Link>
            </Menu.Item>
        </Menu>
    </div>
  )
}

export default Navbar