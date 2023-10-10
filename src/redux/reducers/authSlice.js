import { createSlice } from "@reduxjs/toolkit";

const emailauthSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    setEmailState: (state, action) => {
      state.email = action.payload;
    },
    setPasswordState: (state, action) => {
      state.password = action.payload;
    },
    clearAuthData: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export const { setEmailState, setPasswordState, clearAuthData } =
  emailauthSlice.actions;
export default emailauthSlice.reducer;
