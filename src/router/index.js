import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase";
import MainDashboard from "../components/mainDashboard";
import Login from "../components/login";
import { routes } from "../config/routes";
import LazyLoader from "../components/layout/lazy-loader";

function AppRouter() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <LazyLoader />;
  }

  return (
    <Suspense fallback={<LazyLoader />}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard/*"
          element={user ? <MainDashboard /> : <Login />}
        />
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
