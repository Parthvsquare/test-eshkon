import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./Component/PrivateRoute";
import LoginPage from "./Pages/LoginPage";
import Profile from "./Pages/Profile";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
