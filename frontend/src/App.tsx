import { ToastContainer } from "react-toastify";
import "./App.css";
import CommonRoutes from "./routes/CommonRoutes";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/utils/ScrollToTop";

function App() {
  return (
    <div className="font-poppins">
      <ScrollToTop />

      <CommonRoutes />
      {/*  TODO:Implement a notification system for users when their posts receive comments. */}
      {/*  TODO: Display all the latest topics on homepage */}
      <ToastContainer />
    </div>
  );
}

export default App;
