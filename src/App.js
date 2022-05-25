import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import DashboardLayout from "./layout/DashboardLayout";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

function App() {
  return (
    <DashboardLayout>
      <Sidebar />
      <div className="grow text-center border border-white bg-lightgrey">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route exact path="/" element={<Dashboard />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </DashboardLayout>
  );
}

export default App;
