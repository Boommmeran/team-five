import { createSelector } from '@reduxjs/toolkit';
export const selectorisRefreshing = state => state.auth.isRefreshing;
export const selectorIsLogedIn = state => state.auth.isLoggedIn;
export const selectorEmail = state => state.auth.user.email;
