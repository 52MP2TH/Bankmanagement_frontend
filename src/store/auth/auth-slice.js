import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isLoggedIn: false,
    jwt: "",
  },

  reducers: {
    loginAction: (currentSlice, action) => {
      currentSlice.isLoggedIn = true;
      currentSlice.jwt = action.payload.jwt;
    },

    logoutAction: (currentSlice, action) => {
      currentSlice = currentSlice.initialState;
    },
  },
});

export const { loginAction } = authSlice.actions;
export const { logoutAction } = authSlice.actions;
