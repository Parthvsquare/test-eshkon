import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";

// 2nd url argument should be a sellerBizId otherwise header restaurantName won't work

const AppRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
