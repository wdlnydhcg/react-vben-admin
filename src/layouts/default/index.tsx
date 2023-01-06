/*
 * @Author: MrAlenZhong
 * @Date: 2022-12-13 17:29:48
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-12-15 14:58:57
 * @Description: 
 */
import React from 'react';
import { Layout } from 'antd'
import LayoutMultipleHeader from './header/MultipleHeader'
import LayoutContent from './content'
import LayoutFooter from './footer'
import LayoutSideBar from './sider';
export default function BasicLayout(props: any) {
  return (
    <Layout>
      <Layout hasSider={true}>
        <LayoutSideBar/>
        <Layout hasSider={true}>
          <LayoutMultipleHeader />
          <LayoutContent />
          <LayoutFooter />
        </Layout>
      </Layout>
    </Layout>
  );
}