/*
 * @Author: MrAlenZhong
 * @Date: 2022-12-15 10:21:38
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-12-15 15:12:14
 * @Description: 
 */
import React, { CSSProperties, useMemo } from 'react';
import { Layout } from 'antd';
import LayoutMenu from '../menu';

const Sider = Layout.Sider;
export default function LayoutSider () {
    const getRealWidth = 200;
    const prefixCls = 'layout-sideBar';
    const getHiddenDomStyle = useMemo((): CSSProperties => {
        const width = `${getRealWidth}px`;
        return {
            width: width,
            overflow: 'hidden',
            flex: `0 0 ${width}`,
            maxWidth: width,
            minWidth: width,
            transition: 'all 0.2s',
        };
    },[getRealWidth]);
    const getSiderClass = useMemo(() => {
        return [
          prefixCls,
        `${prefixCls}--fixed`,
        ]
    },[]);

    return (
        <>
            <div style={getHiddenDomStyle}></div>
            <Sider
                className={getSiderClass.join(' ')}
            >
                <LayoutMenu></LayoutMenu>
            </Sider>
        </>
    )
}