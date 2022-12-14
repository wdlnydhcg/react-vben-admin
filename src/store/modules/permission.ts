/*
 * @Author: MrAlenZhong
 * @Date: 2022-12-14 10:32:01
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-12-14 18:34:32
 * @Description: 
 */
import { createSlice } from '@reduxjs/toolkit'
import { PermissionModeEnum } from '/@/enums/appEnum';
import projectSetting from '/@/settings/projectSetting';
import { asyncRoutes } from '/@/router/routes';
import { filter } from '/@/utils/helper/treeHelper';

export const usePermissionStore = createSlice({
  name: 'app-permission',
  initialState: {
     // 权限代码列表
     permCodeList: [],
     // Whether the route has been dynamically added
     // 路由是否动态添加
     isDynamicAddedRoute: false,
     // To trigger a menu update
     // 触发菜单更新
     lastBuildMenuTime: 0,
     // Backstage menu list
     // 后台菜单列表
     backMenuList: [],
     // menu List
     // 菜单列表
     frontMenuList: [],
  },
  reducers: {
    setPermCodeList(state,{ payload }) {
      state.permCodeList = payload;
    },

    setBackMenuList(state,{ payload }) {
      state.backMenuList = payload;
      // payload?.length > 0 && this.setLastBuildMenuTime();
    },

    setFrontMenuList(state,{ payload }) {
      state.frontMenuList = payload;
    },

    setLastBuildMenuTime(state) {
      state.lastBuildMenuTime = new Date().getTime();
    },

    setDynamicAddedRoute(state,{ payload }) {
      state.isDynamicAddedRoute = payload;
    },
    resetState(state) {
      state.isDynamicAddedRoute = false;
      state.permCodeList = [];
      state.backMenuList = [];
      state.lastBuildMenuTime = 0;
    },
    // 构建路由
    buildRoutesAction(){
      // const { permissionMode = projectSetting.permissionMode } = appStore.getProjectConfig;
      let routes = [];
      const roleList: any[] = [];   //当前用户的角色列表
      const permissionMode = 'ROUTE_MAPPING'

       // 路由过滤器 在 函数filter 作为回调传入遍历使用
       const routeFilter = (route:any) => {
        const { meta } = route;
        // 抽出角色
        const { roles } = meta || {};
        if (!roles) return true;
        // 进行角色权限判断
        return roleList.some((role) => roles.includes(role));
      };

      switch (permissionMode) {
        // 路由映射， 默认进入该case
        case PermissionModeEnum.ROUTE_MAPPING:
          // 对非一级路由进行过滤
          routes = filter(asyncRoutes, routeFilter);
          // 对一级路由再次根据角色权限过滤
          routes = routes.filter(routeFilter);
           // 将路由转换成菜单
          // const menuList = transformRouteToMenu(routes, true);
      }
    }
  }
})

export const { buildRoutesAction } = usePermissionStore.actions;
export const getAge = (state:any) => state.loginInfo.age;


