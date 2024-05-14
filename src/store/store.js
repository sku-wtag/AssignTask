import { configureStore } from "@reduxjs/toolkit";
import {authReducer} from "./reducer/authReducer";
import { loadDataReducer } from "./reducer/loadDataReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    loadData: loadDataReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
