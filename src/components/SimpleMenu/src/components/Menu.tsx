/*
 * @Author: MrAlenZhong
 * @Date: 2022-12-15 11:23:45
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-12-15 11:38:05
 * @Description: 
 */
import React, { ReactElement } from "react";
interface MenuProps {
    children?: ReactElement;
    theme?: 'light' | 'dark';
    activeName? : string | number;
    openNames?: Array<string>;
    accordion?: boolean;
    width?: string;
    collapsedWidth?: string;
    indentSize?: number;
    collapse?: boolean;
    activeSubMenuNames?: Array<string | number>;

}
export default function Menu (props: MenuProps){
    return (
        <ul>
            {props.children}
        </ul>
    )
}