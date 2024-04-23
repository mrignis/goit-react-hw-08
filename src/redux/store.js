import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../redux/contacts/slice";
import filtersReducer from "../redux/filters/slice";
import authReducer from "../redux/auth/slice"; // Імпорт редуктора авторизації

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: authReducer, // Додайте редуктор авторизації до кореневого редуктора
  },
});
