import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import UsersPage from "./pages/UsersPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import DashboardLayout from "./utils/DashboardLayout";

import { AppContextProvider } from "./context/AppContext";

const App = () => {
  return (
    <>
      <AppContextProvider>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* private routes */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboard/users" element={<UsersPage />} />
            <Route path="/dashboard/users/:id" element={<UserDetailsPage />} />
          </Route>
        </Routes>
      </AppContextProvider>
    </>
  );
};

export default App;
