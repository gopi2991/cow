import {  createAsyncThunk } from "@reduxjs/toolkit"
import { Cows } from "../app/type"

export const fetchCows = createAsyncThunk<Cows[]>("cow/fetch", async () => {
  const res = await fetch("/api/cows")
  return res.json()
})

export const createCow = createAsyncThunk<Cows, Cows>("cow/create", async (data: any) => {
  const res = await fetch("/api/cows", {
    method: "POST",
    body: JSON.stringify(data),
  })
  return res.json()
})


