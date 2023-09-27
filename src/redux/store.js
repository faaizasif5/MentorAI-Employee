import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import formErrorReducer from "./reducers/formErrorsSlice";
import lineManagerReducer from "./reducers/lineManagerSlice";
import employeeReducer from "./reducers/employeeSlice";
import projectReducer from "./reducers/projectSlice";
import authuserReducer from "./reducers/AuthUser";

const store = configureStore({
  reducer: {
    auth: authReducer,
    authuser: authuserReducer,
    formError: formErrorReducer,
    lineManager: lineManagerReducer,
    employee: employeeReducer,
    projects: projectReducer,
  },
});

export default store;
