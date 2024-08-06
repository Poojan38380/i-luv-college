import Profile from "@/pages/Profile";
import { Route, Routes } from "react-router-dom";
import ProtectGaurd from "./Gaurds/ProtectGaurd";
import CommonLayout from "@/components/Layout/CommonLayout";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route
        path="/profile"
        element={<ProtectGaurd element={<CommonLayout />} />}
      >
        <Route index element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default ProtectedRoutes;
