import CommonLayout from "@/components/Layout/CommonLayout";
import { useAuthContext } from "@/contexts/useAuthContext";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectGaurd from "./Gaurds/ProtectGaurd";
import Profile from "@/pages/Profile";

const CommonRoutes = () => {
  const { authUser } = useAuthContext();
  return (
    <Routes>
      <Route path="" element={<CommonLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
      </Route>
      <Route
        path="/profile"
        element={<ProtectGaurd element={<CommonLayout />} />}
      >
        <Route index element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default CommonRoutes;
