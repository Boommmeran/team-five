import { createSlice } from '@reduxjs/toolkit';
import {
  addColumn,
  deleteColumn,
  editColumn,
  fetchColumnsByBoardId,
} from './columnsOperations';

const columns = [
  {
    _id: '65c8c3c181c2d3854aa44bc1',
    title: 'Column titile one',
  },
  {
    _id: '65c8c3c181c2d3854aa44bc2',
    title: 'Column titile two',
  },
  {
    _id: '65c8c3c181c2d3854aa44bc3',
    title: 'Column titile three',
  },
  {
    _id: '65c8c3c181c2d3854aa44bc4',
    title: 'Column titile four',
  },
  {
    _id: '65c8c3c181c2d3854aa44bc5',
    title: 'Column titile five',
  },
];

export const columnsSlice = createSlice({
  name: 'columns',
  initialState: {
    columns: columns,
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
      .addCase(fetchColumnsByBoardId.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchColumnsByBoardId.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.columns = action.payload;
      })
      .addCase(fetchColumnsByBoardId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //========================================================
      .addCase(addColumn.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.columns.push(action.payload);
      })
      .addCase(addColumn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //========================================================
      .addCase(editColumn.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editColumn.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const { _id, ...columnData } = action.payload;
        const index = state.columns.findIndex(column => column._id === _id);
        if (index !== -1) {
          state.columns[index] = { ...state.columns[index], ...columnData };
        }
      })
      //========================================================
      .addCase(deleteColumn.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.columns.findIndex(
          column => column.id === action.payload.id
        );
        state.columns.splice(index, 1);
      })
      .addCase(deleteColumn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});
