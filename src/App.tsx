/*
 * @Author: MrAlenZhong
 * @Date: 2022-12-13 15:01:03
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-12-13 16:36:26
 * @Description: 
 */
import React, { useState } from 'react'
// import { Routes, Route } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { router } from './router';
function App() {
  
  return (
    <>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  )
}

export default App
