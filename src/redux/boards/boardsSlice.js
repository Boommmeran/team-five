import { createSlice } from '@reduxjs/toolkit';
import {
  fetchBoards,
  addBoard,
  editBoard,
  deleteBoard,
  fetchBoardById,
} from './boardsOperations';

export const boardsSlice = createSlice({
  name: 'boards',
  initialState: {
    boards: [],
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
      .addCase(fetchBoards.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBoards.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.boards = action.payload;
      })
      .addCase(fetchBoards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //=================================================================
      .addCase(fetchBoardById.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBoardById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const currentBoard = action.payload;
        state.currentBoard = currentBoard;
        const index = state.boards.findIndex(
          board => board._id === currentBoard._id
        );
        if (index !== -1) {
          state.boards[index] = currentBoard;;
        }
      })
      .addCase(fetchBoardById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //=================================================================
      .addCase(addBoard.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBoard.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.boards.push(action.payload);
      })
      .addCase(addBoard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //=================================================================
      .addCase(editBoard.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editBoard.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const { _id, ...boardData } = action.payload;
        const index = state.boards.findIndex(board => board._id === _id);
        if (index !== -1) {
          state.boards[index] = { ...state.boards[index], ...boardData };
        }
      })
      .addCase(editBoard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //=================================================================
      .addCase(deleteBoard.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.boards.findIndex(
          board => board._id === action.payload._id
        );
        state.boards.splice(index, 1);
      })
      .addCase(deleteBoard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});