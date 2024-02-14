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
    currentBoard: null,
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
    clearCurrentBoard(state) {
      state.currentBoard = null;
    }
  },
  extraReducers: builder =>
    builder
      .addCase(fetchBoards.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBoards.fulfilled, (state, action) => {
        const { payload } = action;
        
        state.loading = false;
        state.error = null;
        state.boards = payload;
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
        state.currentBoard = action.payload;
        
      })
      .addCase(fetchBoardById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.currentBoard = null;
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
        state.boards = state.boards.filter(
          board => board._id !== action.payload._id
        );
        state.currentBoard = null;
      })
      .addCase(deleteBoard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});


export const { clearCurrentBoard } = boardsSlice.actions;