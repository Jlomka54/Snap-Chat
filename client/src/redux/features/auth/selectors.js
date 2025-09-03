export const selectUser = (state) => state.auth.user;
export const selectIsLoading = (state) => state.auth.IsLoading;
export const selectToken = (state) => state.auth.token;
export const selectStatus = (state) => state.auth.status;
export const selectIsAuth = (state) => Boolean(state.auth.token);
