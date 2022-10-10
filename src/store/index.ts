import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./languageSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    language: languageSlice,
  },
});
