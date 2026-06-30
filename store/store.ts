import { configureStore } from "@reduxjs/toolkit"

import cowsReducer from "./cowSlice"
import milkReducer from "./milkSlice"

export const store = configureStore({
  reducer: {
    cows: cowsReducer,
    milk: milkReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch