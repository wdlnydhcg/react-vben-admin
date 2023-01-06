/*
 * @Author: MrAlenZhong
 * @Date: 2022-12-13 15:01:03
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-12-15 15:03:42
 * @Description: 
 */

import { createApp, setupRouter } from './router';
import 'antd/dist/antd.css';
async function bootstrap(){
  createApp();
  setupRouter();
}

bootstrap()
