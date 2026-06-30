import { createSlice } from "@reduxjs/toolkit"
import { createMilk, fetchMilk } from "./milkMiddleware"

type Milk = {
  id: number
  cowName: string
    morning: number
    evening: number
    price: string
    total: number
    revenue: number
}


const initialState: { records: Milk[] } = {
  records: [],
}

const milkSlice = createSlice({
  name: "milk",
  initialState,
  reducers: {
    
    // addMilk: (state, action: PayloadAction<Milk>) => {
    //   state.records.push(action.payload)
    // },
  },
    extraReducers: (builder) => {
      builder.addCase(fetchMilk.fulfilled, (state, action) => {
        state.records = action.payload;
      });
  
      builder.addCase(createMilk.fulfilled, (state, action) => {
        state.records.unshift(action.payload); 
      });
    },
})

// export const { addMilk } = milkSlice.actions
export default milkSlice.reducer