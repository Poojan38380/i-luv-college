import "./App.css";
import CommonRoutes from "./routes/CommonRoutes";
import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
  return (
    <div className="">
      <CommonRoutes />

      <ProtectedRoutes />
    </div>
  );
}

export default App;
