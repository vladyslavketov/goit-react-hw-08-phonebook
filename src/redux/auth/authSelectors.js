export const selectUser = state => state.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.selectIsRefreshing;

//   const authSelectors = {
//   getIsLoggedIn,
//   getUsername,
// // };

// export default authSelectors;
