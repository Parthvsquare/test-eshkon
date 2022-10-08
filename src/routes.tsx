import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Profile from "./Pages/Profile";

// 2nd url argument should be a sellerBizId otherwise header restaurantName won't work

const AppRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
