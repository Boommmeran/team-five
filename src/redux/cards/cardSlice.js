import { createSlice } from '@reduxjs/toolkit';

export const cardSlice = createSlice({
    name: 'card',
    initialState: {
      card: {
       title: '',
        description: '',
        priority:'',

        // avatarUrl:'',
      },
    //   token: null,  борд колонки овнер
    //   isLoggedIn: false,
    //   isRefreshing: false,
    },
    // extraReducers: builder =>
    //   builder
    //     .addCase(registerUser.fulfilled, (state, action) => {
    //       console.log(action.payload);
    //       state.user = action.payload.user;
    //       state.token = action.payload.token;
    //       state.isLoggedIn = true;
    //     })
  });