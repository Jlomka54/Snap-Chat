import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../utils/axios";

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  status: null,
};

export const register = createAsyncThunk(
  "auth/registerUser",
  async ({ username, password }) => {
    try {
      const { data } = await axiosInstance.post("/register", {
        username,
        password,
      });
      if (data.token) {
        window.localStorage.setItem("token", data.token);
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

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
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.status = "success";
    });
    builder.addCase(register.rejected, (state) => {
      state.isLoading = false;
      state.user = null;
      state.token = null;
      state.status = "error";
    });
  },
});

export const { logout } = authSlice.actions;

export const checkIsAuth = (state) => Boolean(state.auth.token);

export default authSlice.reducer;
