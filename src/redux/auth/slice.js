// auth/slice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";
const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
    },
    setToken(state, action) {
      state.token = action.payload.token;
    },
    setLoggedIn(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    setRefreshing(state, action) {
      state.isRefreshing = action.payload.isRefreshing;
    },
  },
});

export const { actions, reducer } = authSlice;
export default reducer;
