import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//axios.defaults.baseURL = 'http://localhost:9000/api';
axios.defaults.baseURL = 'https://team-five-backend-v2.onrender.com/api';

export const fetchCards = createAsyncThunk(
  'cards/fetch',
  async (boardId, thunkAPI) => {
    try {
      const res = await axios.get(`/cards/${boardId}`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCardById = createAsyncThunk(
  'cards/fetchById',
  async (boardId, cardId, thunkAPI) => {
    try {
      const res = await axios.get(`/cards/${boardId}/${cardId}`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCard = createAsyncThunk(
  'card/add',
  async ({ values, columnId }, thunkAPI) => {
    try {
      const res = await axios.post(`/cards/${columnId}`, values);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editCard = createAsyncThunk(
  'card/edit',
  async ({ values, cardId }, thunkAPI) => {
    try {
      const res = await axios.patch(`/cards/${cardId}`, values);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const chengeColumnsCard = createAsyncThunk(
  'card/changeColumns',
  async (cardId, thunkAPI) => {
    try {
      const res = await axios.patch(`/cards/${cardId}/move`, {
        columnId: cardId.column._id,
      });

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  'cards/delete',
  async ({ cardId }, thunkAPI) => {
    try {
      const res = await axios.delete(`/cards/${cardId}`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
