/*
 * @Author: MrAlenZhong
 * @Date: 2022-12-14 18:51:16
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-12-15 10:19:14
 * @Description: 
 */
import React from "react";
import { Outlet } from "react-router-dom";

export default function LayoutPage(props: any) {
  return (
    <>
    <div>
      page
      <Outlet></Outlet>
    </div>
    </>
  );
}