import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/main-menu";
import { DashBoard } from "./pages/Dashboard";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </>
  );
}

export default App;
