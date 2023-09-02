import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload ?? null;
    },
    logout: (state) => {
      state.user = null;
      localStorage?.clear();
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
