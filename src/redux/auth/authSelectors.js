export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectEmail = state => state.auth.user.email;
export const selectUser = state => state.auth.user;
export const selectTheme = state => state.auth.user.theme;

