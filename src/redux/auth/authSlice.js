import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  logInUser,
  logOut,
  refreshing,
  update,
  updateAvatar,
  changeTheme,
} from './authOperation';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: '',
      email: '',
      avatarURL: '',
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
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
