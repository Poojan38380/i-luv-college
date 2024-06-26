import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { useAuthContext } from "./contexts/useAuthContext";

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="min-h-screen bg-zinc-300">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />

              <Home />
              <Footer />
            </div>
          }
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
    </div>
  );
}

export default App;
