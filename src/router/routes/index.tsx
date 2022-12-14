/*
 * @Author: MrAlenZhong
 * @Date: 2022-12-13 16:37:05
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-12-14 19:09:04
 * @Description: 
 */
import React from "react";
// import { mainOutRoutes } from "./mainOut";
import Login from "../../views/login";

import { Navigate } from "react-router-dom";
import { PageEnum } from "/@/enums/pageEnum";
// import.meta.globEager() 直接引入所有的模块 Vite 独有的功能
const modules = import.meta.globEager('./modules/**/*.tsx');
const routeModuleList: any[] = [];

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoutes = [...routeModuleList];

// 根路由
export const RootRoute = {
  path: "/",
  element: <Navigate to={PageEnum.BASE_HOME}/>
}
// 登录页面路由
export const LoginRoute = {
  path: "/login",
  element: <Login />,
}

// 不需要经许可的基本路由
export const basicRoutes = [
  LoginRoute,
  RootRoute,
  ...asyncRoutes
  // ...mainOutRoutes,
]