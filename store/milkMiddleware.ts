import {  createAsyncThunk } from "@reduxjs/toolkit"

export const fetchMilk = createAsyncThunk("milk/fetch", async () => {
  const res = await fetch("/api/milk")
  return res.json()
})

export const createMilk = createAsyncThunk("milk/create", async (data: any) => {
  console.log("data", data);
  const res = await fetch("/api/milk", {
    method: "POST",
    body: JSON.stringify(data),
  })
  return res.json()
})
