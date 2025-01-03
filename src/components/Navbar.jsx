import {Menu, Typography, Avatar} from "antd";
import {Link} from 'react-router-dom';
import {
    HomeOutlined,
    BulbOutlined,
    FundOutlined,
    SwapOutlined
} from "@ant-design/icons";
import icon from '../images/cryptosplash.png';

const Navbar = () => {
    const items = [
        {
            key: 'Home',
            icon: <HomeOutlined />,
            label: <Link to='/'>Home</Link>,
        },
        {
            key: 'Cryptocurrencies',
            icon: <FundOutlined />,
            label: <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
        },
        {
            key: 'Exchanges',
            icon: <SwapOutlined />,
            label: <Link to='/exchanges'>Exchanges</Link>
        },
        {
            key: 'News',
            icon: <BulbOutlined />,
            label: <Link to='/news'>News</Link>
        }
    ]
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">Cryptosplash</Link>
                </Typography.Title>
            </div>
            <Menu theme='dark' items={items}/>

        </div>
    )
};

export default Navbar;