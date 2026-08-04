import Unathorized from "../components/Unathorized";
import { useAuthStore } from "../store/useAuthStore";
import AdminDashboard from "./admin/AdminDashboard";
import CustomerDashboard from "./customer/CustomerDashboard";

function HomePage() {
  const { user } = useAuthStore();

  switch (user?.role) {
    case "customer":
      return <CustomerDashboard />;
    case "admin":
      return <AdminDashboard />;
    default:
      return <Unathorized />;
  }
}

export default HomePage;
