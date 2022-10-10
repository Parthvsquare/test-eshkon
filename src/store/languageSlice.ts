import { createSlice } from "@reduxjs/toolkit";

const changedLanguage = localStorage.getItem("language");

export const languageSlice = createSlice({
  name: "language",
  initialState: {
    selectedLanguage: changedLanguage ?? null,
  },
  reducers: {
    toEnglish: (state, action) => {
      state.selectedLanguage = action.payload;
    },
    toFrench: (state, action) => {
      state.selectedLanguage = action.payload;
      localStorage.setItem("language", "fr");
    },
  },
});

export const { toEnglish, toFrench } = languageSlice.actions;

//selectors
export const selectLanguage = (state: {
  language: { selectedLanguage: any };
}) => state.language.selectedLanguage;

export default languageSlice.reducer;
