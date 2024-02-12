import { createSlice } from '@reduxjs/toolkit';
import {
  addCard,
  chengeColumnsCard,
  deleteCard,
  editCard,
} from './cardsOperations';

const cards = [
  {
    _id: '65c8c3c181c2d3854aa44bce',
    title: 'Design and Prototyping SoYummy',
    text: "Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",
    priority: 'low',
    deadline:
      'Sun Feb 11 2024 21:15:17 GMT+0200 (Восточная Европа, стандартное время)',
  },
  {
    _id: '65c8c3c181c2d3854aa44bce',
    title: 'Design and Prototyping SoYummy',
    text: "Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",
    priority: 'high',
    deadline:
      'Sun Feb 11 2024 21:15:17 GMT+0200 (Восточная Европа, стандартное время)',
  },
  {
    _id: '65c8c3c181c2d3854aa44bce',
    title: 'Design and Prototyping SoYummy',
    text: "Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",
    priority: 'medium',
    deadline:
      'Sun Feb 11 2024 21:15:17 GMT+0200 (Восточная Европа, стандартное время)',
  },
  {
    _id: '65c8c3c181c2d3854aa44bce',
    title: 'Design and Prototyping SoYummy',
    text: "Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",
    priority: 'without',
    deadline:
      'Sun Feb 11 2024 21:15:17 GMT+0200 (Восточная Европа, стандартное время)',
  },
];

export const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: cards,
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
        // зміна колонки
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
          card => card.id === action.payload.id
        );
        state.cards.splice(index, 1);
      })
      .addCase(deleteCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});
