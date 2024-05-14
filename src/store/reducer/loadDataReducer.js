import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  infos: [],
  message: "",
  success: false,
};

const loadDataSlice = createSlice({
  name: "loadData",
  initialState: INITIAL_STATE,
  reducers: {
    getAllDataSuccess: (state, action) => {
      const { infos, message } = action.payload;

      return {
        ...state,
        infos,
        message,
        success: true,
      };
    },
    getAllDataFailed: (state, action) =>{
      return{
        ...state,
        message: action.payload.message,
        success: false
      }
    }
  },
});

export const { getAllDataSuccess, getAllDataFailed } = loadDataSlice.actions;
export const loadDataReducer = loadDataSlice.reducer;
