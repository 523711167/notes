import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd'
import {Provider} from 'react-redux'

import store  from "@s/store.js";

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
          <App />
      </BrowserRouter> 
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);
