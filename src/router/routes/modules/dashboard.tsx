/*
 * @Author: MrAlenZhong
 * @Date: 2022-12-13 17:15:30
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-12-13 18:26:50
 * @Description: 
 */
import React from "react"
import Dashboard from "/@/scenes/dashboard"
import LAYOUT from "/@/layouts/default"

const dashboard = {
  path: "/dashboard",
  element: <Dashboard />,
  children: [
    {
      path: "/analysis",
      element: <Dashboard />,
    },{
      path: "/workbench",
      element: <Dashboard />,
    }
  ]
}
export default dashboard