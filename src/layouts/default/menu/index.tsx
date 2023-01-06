/*
 * @Author: MrAlenZhong
 * @Date: 2022-12-15 09:30:59
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-12-15 10:19:30
 * @Description: 
 */
import React from "react";

export default function LayoutMenu(props: any) {

  function renderHeader() {
    return (
      <>
        applogo
      </>
    );
  }

  function renderMenu() {
    return (
      <div>Menu</div>
    )
  }
  return (
    <>
      {renderHeader()}
      {renderMenu()}
    </>
  );
}