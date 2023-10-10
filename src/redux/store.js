import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import formErrorReducer from "./reducers/formErrorsSlice";
import lineManagerReducer from "./reducers/lineManagerSlice";
import employeeReducer from "./reducers/employeeSlice";
import projectReducer from "./reducers/projectSlice";
import googleAuthReducer from "./reducers/AuthReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    AuthReducer: googleAuthReducer,
    formError: formErrorReducer,
    lineManager: lineManagerReducer,
    employee: employeeReducer,
    projects: projectReducer,
  },
});

export default store;
