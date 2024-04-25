// c:/Users/chelb/Documents/GitHub/goit-react-hw-08/src/redux/auth/operations.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () =>
  (instance.defaults.headers.common.Authorization = "");

export const apiRegister = createAsyncThunk(
  "auth/register",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("/users/signup", formData);
      console.log("REGISTER data: ", data);
      // data => { user: { name: "dwda", email: "wdadwd@mail.com"} , token: "some token"}
      setToken(data.token);

      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const apiLogin = createAsyncThunk(
  "auth/login",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("/users/login", formData);
      console.log("LOGIN data: ", data);
      // data => { user: { name: "dwda", email: "wdadwd@mail.com"} , token: "some token"}
      setToken(data.token);

      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const apiRefreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;

      setToken(token);
      const { data } = await instance.get("/users/current");
      console.log("REFRESH data: ", data);

      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
