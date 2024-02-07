import { registerUser, logInUser, logOut, refreshing} from './authOperation';

import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'userInfo',
  initialState: {
    user: {
      name: '',
      emai: '',
      // avatarUrl:'',
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
      }),
      // .addCase(updateAvatar.fulfilled, (state, action) => {
      //   state.avatarUrl = action.payload.avatarUrl;
      //  }),
});
