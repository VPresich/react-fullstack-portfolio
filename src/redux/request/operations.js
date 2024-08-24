import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInst } from "../../api/axiosInst";

export const requestProject = createAsyncThunk(
  "request",
  async (data, thunkAPI) => {
    try {
      const response = await axiosInst.post(`requests`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
