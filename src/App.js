
import React from 'react';
import {Routes, Route, Link, BrowserRouter as Router, } from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import {Navbar, Exchanges, News, Cryptocurrencies, CryptoDetails, Homepage} from './components';
import  './App.css';

export const App = () => {
    return(
        <div className="app">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route path="/" element={<Homepage />} />
                            <Route path="/exchanges" element={<Exchanges />} />
                            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                            <Route path="/crypto/:coinId" element={<CryptoDetails />} >
                            </Route>
                            <Route path="/news" element={<News />} />
                        </Routes>
                    </div>
                </Layout>
                <div className="footer">
                    <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                        Cryptosplash <br/>
                        All right, brothers
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>
            </div>
        </div>
    );
}

