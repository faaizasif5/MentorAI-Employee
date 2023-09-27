import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {}, // This can be the user object when authenticated
};

const authSlice = createSlice({
  name: "authuser",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = {};
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
