import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import LoginPage from "./pages/LoginPage/LoginPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import UserDetailsPage from "./pages/UserDetailsPage/UserDetailsPage";
import DashboardLayout from "./utils/DashboardLayout";
import ComingSoonPage from "./pages/ComingSoonPage/ComingSoonPage";

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
            <Route path="/dashboard" element={<ComingSoonPage />} />
            <Route path="/dashboard/:id" element={<ComingSoonPage />} />
            <Route path="/dashboard/users" element={<UsersPage />} />
            <Route path="/dashboard/users/:id" element={<UserDetailsPage />} />
          </Route>
        </Routes>
      </AppContextProvider>
    </>
  );
};

export default App;
