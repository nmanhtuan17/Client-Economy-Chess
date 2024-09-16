import { createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../../services/api.service";

export const login = createAsyncThunk('auth/login', async (payload) => {

  return apiService.post('auth/sign-in', payload)
})

export const register = createAsyncThunk('auth/register', async (payload) => {

  return apiService.post('auth/register', payload)
})