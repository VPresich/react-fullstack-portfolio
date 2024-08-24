import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInst } from "../../api/axiosInst";

export const getReviews = createAsyncThunk("reviews", async (_, thunkAPI) => {
  try {
    const response = await axiosInst.get(`reviews`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
