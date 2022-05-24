import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import MainView from "./components/main-view/MainView";
import DashboardLayout from "./layout/DashboardLayout";

function App() {
  return (
    <DashboardLayout>
      <Sidebar />
      <MainView />
    </DashboardLayout>
  );
}

export default App;
