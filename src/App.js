import { Route, Routes, Navigate } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./components/login/firebase";
import MainDashboard from "./components/mainDashboard";
import Login from "./components/login";
import { useDarkMode } from "./context/DarkModeContext";
import "./App.css";

const Profile = lazy(() => import("./components/profile"));
const Dashboard = lazy(() => import("./components/dashboard"));

function App() {
  const [user] = useAuthState(auth);
  const { isDarkMode } = useDarkMode();
  return (
    <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard/*"
          element={user ? <MainDashboard /> : <Navigate to="/" />}
        >
          <Route
            path="home"
            element={
              <Suspense fallback={<CircularProgress />}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="profile"
            element={
              <Suspense fallback={<CircularProgress />}>
                <Profile />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
