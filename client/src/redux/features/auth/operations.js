import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../utils/axios";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/auth/register", {
        username,
        password,
      });
      console.log(data);

      if (data.token) {
        window.localStorage.setItem("token", data.token);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/auth/login", {
        username,
        password,
      });
      if (data.token) {
        window.localStorage.setItem("token", data.token);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getMe = createAsyncThunk(
  "auth/getMe",
  async ({ rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/auth/me");
      if (data.token) {
        window.localStorage.setItem("token", data.token);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
