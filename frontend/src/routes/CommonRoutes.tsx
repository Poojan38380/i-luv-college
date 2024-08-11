import CommonLayout from "@/components/Layout/CommonLayout";
import { useAuthContext } from "@/contexts/useAuthContext";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectGaurd from "./Gaurds/ProtectGaurd";
import NoFooterLayout from "@/components/Layout/NoFooterLayout";
import Colleges from "@/pages/Colleges";
import AddNewCollegePortal from "@/pages/AddNewCollegePortal";
import CollegePage from "@/pages/CollegePage";
import CommentPage from "@/pages/CommentPage";

const CommonRoutes = () => {
  const { authUser } = useAuthContext();
  return (
    <Routes>
      <Route path="" element={<CommonLayout />}>
        <Route index element={<Home />} />
        <Route path="/colleges" element={<Colleges />} />
        <Route path="/colleges/page/:collegeId" element={<CollegePage />} />
        <Route path="/colleges/images/:collegeId" element={<CollegePage />} />
        <Route path="/post/comments/:postId" element={<CommentPage />} />
        <Route
          path="/colleges/add"
          element={<ProtectGaurd element={<AddNewCollegePortal />} />}
        />
      </Route>
      // Routes with no footer
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
