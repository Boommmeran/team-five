import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'http://localhost:9000/api';
// axios.defaults.baseURL = 'https://team-five-backend-v2.onrender.com/api';

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
      toast.error('Email or password is not correct');
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

export const update = createAsyncThunk(
  'update/user',
  async (user, thunkAPI) => {
    try {
      const response = await axios.patch('/users/update', user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'update/userAvatar',
  async (selectedFile, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.set('avatar', selectedFile);
      const response = await axios.patch('/users/avatars', formData);

      return response.data.avatarURL;
    } catch (error) {
      toast.error('Something went wrong. Please, try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeTheme = createAsyncThunk(
  'changeTheme/user',
  async ({ theme }, thunkAPI) => {
    try {
      const response = await axios.patch('/users/theme', { theme });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
