/*
 * @Author: MrAlenZhong
 * @Date: 2022-12-13 17:29:48
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-12-14 19:52:30
 * @Description: 
 */
import React from 'react';
import { Layout } from 'antd'
import LayoutMultipleHeader from './header/MultipleHeader'
import LayoutContent from './content'
import LayoutFooter from './footer'
export default function BasicLayout(props: any) {
  return (
    <>
    <Layout>
      <LayoutMultipleHeader />
      <LayoutContent />
      <LayoutFooter />
    </Layout>
    </>
  );
}