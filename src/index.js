import React, {Component} from 'react'
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router";

import 'antd/dist/antd';
import {Provider} from "react-redux";
import {App} from "./App";
import store from './app/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter >
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);



