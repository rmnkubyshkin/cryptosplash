import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router";
import 'antd/dist/antd';
import {Provider} from "react-redux";

import {App} from "./App";
import store from './app/store'

ReactDOM.render(<BrowserRouter >
                    <Provider store={store}>
                        <App />
                    </Provider>
                </BrowserRouter>,
                document.getElementById('root'));

