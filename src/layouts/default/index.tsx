/*
 * @Author: MrAlenZhong
 * @Date: 2022-12-13 17:29:48
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-12-13 18:23:23
 * @Description: 
 */
import React from 'react';
import { Layout } from 'antd'
export default function BasicLayout(props: any) {
  const { children } = props;
  return (
    <div>
      <div>header</div>
      {children}
      <div>footer</div>
    </div>
  );
}