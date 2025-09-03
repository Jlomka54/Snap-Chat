import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./operations";

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  status: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
      state.status = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.status = action.payload.message;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.token = null;
      state.status = action.payload.message;
    });
  },
});

export const checkIsAuth = (state) => Boolean(state.auth.token);

export const authReducer = authSlice.reducer;
