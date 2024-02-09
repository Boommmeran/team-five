import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:9000/api';

export const fetchBoards = createAsyncThunk('boards/fetch', async (_, thunkAPI) => {
    try {
      const res = await axios.get('/boards');

      return res.data;

    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
  };
});

export const fetchBoardById = createAsyncThunk(
  'boards/fetchById',
  async (boardId, thunkAPI) => {
    try {
      const res = await axios.get(`/boards/${boardId}`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addBoard = createAsyncThunk(
  'boards/add',
  async (board, thunkAPI) => {
    try {
      const res = await axios.post('/boards', board);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editBoard = createAsyncThunk(
  'boards/edit',
  async ({ boardId, board }, thunkAPI) => {
    try {
      const res = await axios.put(`/boards/${boardId}`, board);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/delete',
  async (boardId, thunkAPI) => {
    try {
      const res = await axios.delete(`/boards/${boardId}`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);