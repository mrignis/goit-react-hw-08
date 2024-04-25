// rootReducer.js

import { combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/slice"; // Змінено імпорт
import filtersReducer from "./filters/slice"; // Змінено імпорт
import authReducer from "./auth/slice"; // Змінено імпорт

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
  auth: authReducer,
});

export default rootReducer;
