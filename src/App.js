import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import DashboardLayout from "./layout/DashboardLayout";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Orders from "./pages/Orders";

function App() {
  return (
    <DashboardLayout>
      <Sidebar />
      <div className="bg-lightgrey w-full">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route exact path={homePathname} element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
        </Routes>
      </div>
    </DashboardLayout>
  );
}

export const homePathname = "/dashboard";

export default App;
