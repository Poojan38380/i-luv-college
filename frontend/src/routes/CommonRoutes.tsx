import CommonLayout from "@/components/Layout/CommonLayout";
import { useAuthContext } from "@/contexts/useAuthContext";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectGaurd from "./Gaurds/ProtectGaurd";
import Profile from "@/pages/Profile";
import NoFooterLayout from "@/components/Layout/NoFooterLayout";
import Colleges from "@/pages/Colleges";

const CommonRoutes = () => {
  const { authUser } = useAuthContext();
  return (
    <Routes>
      <Route path="" element={<CommonLayout />}>
        <Route index element={<Home />} />
        <Route path="/colleges" element={<Colleges />} />
      </Route>
      <Route
        path="/profile"
        element={<ProtectGaurd element={<CommonLayout />} />}
      >
        <Route index element={<Profile />} />
      </Route>
      <Route path="/auth" element={<NoFooterLayout />}>
        <Route
          path="login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
      </Route>
    </Routes>
  );
};

export default CommonRoutes;
