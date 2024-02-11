import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:9000/api';
axios.defaults.baseURL = 'https://team-five-backend-v2.onrender.com/api';

export const fetchColumnsByBoardId = createAsyncThunk(
  'columns/boardId',
  async (boardId, thunkAPI) => {
    try {
      const res = await axios.get(`/columns/${boardId}`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addColumnByBoardId = createAsyncThunk(
  'columns/add',
  async ({ boardId, column }, thunkAPI) => {
    try {
      const res = await axios.post(`/columns/${boardId}`, column);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editColumn = createAsyncThunk(
  'columns/edit',
  async ({ columnId, column }, thunkAPI) => {
    try {
      const res = await axios.patch(`/columns/${columnId}`, column);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'columns/delete',
  async (columnId, thunkAPI) => {
    try {
      const res = await axios.delete(`/columns/${columnId}`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
