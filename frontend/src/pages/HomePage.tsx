import Unathorized from "../components/Unathorized";
import { useAuthStore } from "../store/useAuthStore";
import AdminDashboard from "./admin/AdminDashboard";
import CustomerDashboard from "./customer/CustomerDashboard";

function HomePage() {
  return <CustomerDashboard />;
}

export default HomePage;
