import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("auth")),
  message: "",
  success: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    loggedInSuccess: (state, action) => {
      return {
        ...state,
        user: action.payload.user,
        message: action.payload.message,
        success: true,
      };
    },
    loggedInFailed: (state) => {
      return {
        ...state,
        user: [],
        success: false,
      };
    },
  },
});

export const authReducer = AuthSlice.reducer;
export const { loggedInSuccess, loggedInFailed } = AuthSlice.actions;
