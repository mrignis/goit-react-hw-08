// slice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filter: "",
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    fetchContactsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchContactsSuccess(state, { payload }) {
      state.items = payload.sort((a, b) => a.name.localeCompare(b.name));
      state.loading = false;
    },
    fetchContactsError(state, { payload }) {
      state.loading = false;
      state.error = payload;
    },
    addContactRequest(state) {
      state.loading = true;
      state.error = null;
    },
    addContactSuccess(state, { payload }) {
      state.items.unshift(payload);
      state.loading = false;
    },
    addContactError(state, { payload }) {
      state.loading = false;
      state.error = payload;
    },
    deleteContactRequest(state) {
      state.loading = true;
      state.error = null;
    },
    deleteContactSuccess(state, { payload }) {
      state.items = state.items.filter(({ id }) => id !== payload);
      state.loading = false;
    },
    deleteContactError(state, { payload }) {
      state.loading = false;
      state.error = payload;
    },
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} = contactsSlice.actions;

export default contactsSlice.reducer; // Змінив експорт
