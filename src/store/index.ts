/*
 * @Author: MrAlenZhong
 * @Date: 2022-12-14 10:26:28
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-12-14 16:25:23
 * @Description: 
 */
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { usePermissionStore } from './modules/permission'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

const reducers = combineReducers({
  [usePermissionStore.name]: usePermissionStore.reducer,
});

const persistReducerStore = persistReducer({
  key: 'root',
  storage: storage,
}, reducers)
function createRedux(){
  return configureStore({
    reducer: persistReducerStore,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
  })
}

export default createRedux()