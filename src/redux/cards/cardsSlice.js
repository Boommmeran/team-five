import { createSlice } from '@reduxjs/toolkit';
import {
  addCard,
  chengeColumnsCard,
  deleteCard,
  editCard,
  fetchCards,
} from './cardsOperations';

export const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
    loading: false,
    error: null,
  },
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(fetchCards.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cards = action.payload;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addCard.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCard.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cards.push(action.payload);
      })
      .addCase(addCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(editCard.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editCard.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const { _id, ...cardData } = action.payload;
        const index = state.cards.findIndex(card => card._id === _id);
        if (index !== -1) {
          state.cards[index] = { ...state.cards[index], ...cardData };
        }
      })
      .addCase(editCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(chengeColumnsCard.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(chengeColumnsCard.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        const { _id, ...cardData } = action.payload;
        const index = state.cards.findIndex(card => card._id === _id);
        if (index !== -1) {
          state.cards[index] = { ...state.cards[index], ...cardData };
        }
      })
      .addCase(chengeColumnsCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteCard.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.cards.findIndex(
          card => card._id === action.payload._id
        );
        state.cards.splice(index, 1);
      })
      .addCase(deleteCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});
