import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd'

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <BrowserRouter>
        <App />
    </BrowserRouter> 
  </ConfigProvider>,
  document.getElementById('root')
);
