import {
  registerUser,
  logInUser,
  logOut,
  refreshing,
  update,
  updateAvatar,
} from './authOperation';

import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'userInfo',
  initialState: {
    user: {
      name: '',
      emai: '',
      avatarURL: '',
      loading: false,
      error: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerUser.rejected, () => console.log('s'))
      .addCase(logInUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logInUser.rejected, () =>
        console.log('Email or password is not correct')
      )
      .addCase(logOut.fulfilled, state => {
        state.user = { name: '', emai: '' };
        state.isLoggedIn = false;
        state.token = null;
      })
      .addCase(refreshing.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshing.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshing.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(update.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(updateAvatar.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user.avatarURL = action.payload;
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});
