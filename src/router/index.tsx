/*
 * @Author: MrAlenZhong
 * @Date: 2022-12-13 16:23:07
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-12-14 18:39:20
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import store from '/@/store'
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { basicRoutes } from './routes';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store);


// register App
// 注册入口
export function createApp() {
  const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  )
}
// config router
// 配置路由器
export function setupRouter() {
  
}

export const router = createBrowserRouter(basicRoutes);
