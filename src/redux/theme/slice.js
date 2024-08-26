import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    themeName: "red",
  },
  reducers: {
    updateTheme: (state, action) => {
      state.themeName = action.payload;
    },
  },
});

export const { updateTheme } = themeSlice.actions;
export default themeSlice.reducer;
