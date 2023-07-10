import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import authReducer from "./authSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: persistedReducer,
});
