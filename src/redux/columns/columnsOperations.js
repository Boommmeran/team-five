import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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

export const addColumn = createAsyncThunk(
  'columns/add',
  async ({ boardId, body }, thunkAPI) => {
    try {
      const res = await axios.post(`/columns/${boardId}`, body);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editColumn = createAsyncThunk(
  'columns/edit',
  async ({ body, columnId }, thunkAPI) => {
    try {
      const res = await axios.patch(`/columns/${columnId}`, body);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'columns/delete',
  async ({ columnId }, thunkAPI) => {
    try {
      const res = await axios.delete(`/columns/${columnId}`, { columnId });

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
