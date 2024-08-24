import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    themeName: "red",
  },
  reducers: {
    saveTheme: (state, action) => {
      state.themeName = action.payload;
    },
  },
});

export const { saveTheme } = themeSlice.actions;
export default themeSlice.reducer;
