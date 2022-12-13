/*
 * @Author: MrAlenZhong
 * @Date: 2022-12-13 16:23:07
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-12-13 17:10:13
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, useRoutes } from 'react-router-dom';
import App from '../App';
import { basicRoutes } from './routes';


// register App
// 注册入口
export function createApp() {
  const root = document.getElementById('root');
  ReactDOM.render(
    <App />,
    root
  )
}
// config router
// 配置路由器
export function setupRouter() {
  
}

export const router = createBrowserRouter(basicRoutes);
