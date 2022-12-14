/*
 * @Author: MrAlenZhong
 * @Date: 2022-12-13 17:15:30
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-12-14 19:38:45
 * @Description: 
 */
import React from "react"
import { Navigate } from "react-router-dom"

import Analysis from "/@/views/dashboard/analysis"
import Workbench from "/@/views/dashboard/workbench"
import LAYOUT from "/@/layouts/default"

const dashboard = {
  path: "/dashboard",
  // element: <Navigate to='/dashboard/analysis'/>,
  element: <LAYOUT/> ,
  children: [
    {
      path: "analysis",
      element: <Analysis/> ,
    },{
      path: "workbench",
      element: <LAYOUT children={<Workbench />}/> ,
    }
  ]
}
export default dashboard