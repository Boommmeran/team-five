import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const registerCard = createAsyncThunk(
    '/cards/:id',
    async (user, thunkAPI) => {
      try {
        const res = await axios.post('/cards/:id', user);
        // setAuthHeader(res.data.token);
  
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );