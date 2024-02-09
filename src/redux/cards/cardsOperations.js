import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:9000/api';

export const addCard = createAsyncThunk(
  'cards/add',
  async (cards, thunkAPI) => {
    try {
      const res = await axios.post('/cards', cards);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editCard = createAsyncThunk(
  'cards/edit',
  async ({ cardId, card }, thunkAPI) => {
    try {
      const res = await axios.put(`/cards/${cardId}`, {
        title: card.title,
        text: card.text,
        priority: card.priority,
        deadline: card.deadline,
      });
      
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const chengeColumnsCard = createAsyncThunk(
  'cards/:idColumns',
  async ({ cardId, card }, thunkAPI) => {
    try {
      const res = await axios.patch(`/cards/${cardId}`, {
        columns: card.columns,
      });

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  'cards/delete',
  async (cardId, thunkAPI) => {
    try {
      const res = await axios.delete(`/cards/${cardId}`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
