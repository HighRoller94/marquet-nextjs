import { configureStore } from "@reduxjs/toolkit";

import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import authReducer from "./authSlice";

import createwebStorage from "redux-persist/lib/storage/createwebStorage";

const createNoopStorage = () => {
  return {
    getIten(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removelten(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createwebStorage("local")
    : createNoopStorage();

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
