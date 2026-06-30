import { createSlice } from "@reduxjs/toolkit";
import { fetchCows, createCow } from "./cowMiddleware";
import { Cows } from "../app/type";

type CowState = {
  cows: Cows[];
};

const initialState: CowState = {
  cows: [],
};

const cowSlice = createSlice({
  name: "cow",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCows.fulfilled, (state, action) => {
      state.cows = action.payload;
    });

    builder.addCase(createCow.fulfilled, (state, action) => {
      state.cows.unshift(action.payload); 
    });
  },
});

export default cowSlice.reducer;