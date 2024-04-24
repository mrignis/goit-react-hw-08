import { createSlice, configureStore } from "@reduxjs/toolkit";
import { apiRegister, apiLogin, apiRefreshUser, setToken } from "./auth/slice";
import { persistStore } from "redux-persist";

const authPeristConfig = {
  key: "auth",
  storage: localStorage, // Ось тут ви вказуєте, що використовуєте localStorage
  whitelist: ["token"],
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isSignedIn: false,
    userData: null,
    token: null,
    isLoading: false,
    isError: false,
  },
  reducers: {
    // Додайте додаткові редуктори, якщо потрібно
  },
  extraReducers: (builder) =>
    builder
      .addCase(apiRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(apiLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.userData = action.payload;
      }),
});

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Вимкнути перевірку для дозволу збереження серіалізованих даних
    }),
});

// Підписка на зміну токена для автоматичного встановлення його в заголовок запиту
store.subscribe(() => {
  const token = store.getState().auth.token;
  if (token) {
    setToken(token);
  }
});

const persistor = persistStore(store);

export { store, persistor };
