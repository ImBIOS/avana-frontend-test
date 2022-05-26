import Sidebar from "./components/sidebar/Sidebar";
import DashboardLayout from "./layout/DashboardLayout";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import NotFound from "./pages/NotFound";
import Orders from "./pages/Orders";
import AllProduct from "./pages/AllProduct";
import { homePathname } from "./data/constant";

function App() {
  return (
    <DashboardLayout>
      <Sidebar />
      <div className="bg-lightgrey w-full">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route exact path={homePathname} element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="product-allproduct" element={<AllProduct />} />
        </Routes>
      </div>
    </DashboardLayout>
  );
}

export default App;
