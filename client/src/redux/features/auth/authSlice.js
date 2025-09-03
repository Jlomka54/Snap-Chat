import { createSlice } from "@reduxjs/toolkit";
import { getMe, loginUser, registerUser } from "./operations";

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  status: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoading = false;
      state.status = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload?.user;
      state.token = action.payload?.token;
      state.status = action.payload?.message;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.token = null;
      state.status = action.payload;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload?.user;
      state.token = action.payload?.token;
      state.status = action.payload?.message;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.token = null;
      state.status = action.payload;
    });
    builder.addCase(getMe.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload?.user;
      state.token = action.payload?.token;
      state.status = null;
    });
    builder.addCase(getMe.rejected, (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.token = null;
      state.status = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
