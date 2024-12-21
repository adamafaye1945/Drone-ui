import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/main-menu";
import { DashBoard } from "./pages/Dashboard";
function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  );
}

export default App;
