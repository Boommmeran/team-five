import {
  registerUser,
  logInUser,
  logOut,
  refreshing,
  update,
  updateAvatar,
  changeTheme,
} from './authOperation';

import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'userInfo',
  initialState: {
    user: {
      name: '',
      email: '',
      avatarURL: '',
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    showImage: false,
    showSvg: true,
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
        state.showImage = true;
        state.showSvg = false;
      })
      // .addCase(logInUser.rejected, () =>
      //   console.log('Email or password is not correct')
      // )
      .addCase(logOut.fulfilled, state => {
        state.user = { name: '', email: '' };
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
        state.showImage = true;
        state.showSvg = false;
      })
      .addCase(refreshing.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(update.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload;
        state.showImage = true;
        state.showSvg = false;
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.error = action.payload;
        state.showImage = false;
        state.showSvg = true;
      })
      .addCase(changeTheme.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      }),
});
