import { createSlice } from "@reduxjs/toolkit";
import { requestProject } from "./operations";

const requestSlice = createSlice({
  name: "request",
  initialState: {
    item: { title: "", message: "" },
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(requestProject.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.item = action.payload;
      })
      .addCase(requestProject.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default requestSlice.reducer;
