import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:9000/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const unsetAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'register/user',
  async (user, thunkAPI) => {
    try {
      const res = await axios.post('/users/register', user);
      setAuthHeader(res.data.token);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  'login/user',
  async (user, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', user);
      setAuthHeader(res.data.token);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('logout/user', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    unsetAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshing = createAsyncThunk(
  'refreshing/user',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue('Unable token user');
    }
    setAuthHeader(token);
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const update = createAsyncThunk('update/user', async (user, thunkAPI) => {
  try {
    const responce = await axios.patch('/users/update', user);
    return responce.data;
    
  }
  catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


