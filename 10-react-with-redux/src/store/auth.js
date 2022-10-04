import { createSlice } from "@reduxjs/toolkit";

const initialStateAuth = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialStateAuth,
  reducers: {
    login(state) {
      state.isAuth = true;
      console.log(state.isAuth);
    },
    logout(state) {
      state.isAuth = false;
      console.log(state.isAuth);
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
