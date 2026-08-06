import { Navigate, Route, Routes } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useAuthStore } from "./store/useAuthStore";
import { Toaster } from "react-hot-toast";
import BookingWizard from "./pages/customer/booking-old/BookingWizard";
import BookingMarketplace from "./pages/customer/BookingMarketplace";
import Checkout from "./pages/customer/Checkout";
import ReviewExperience from "./pages/customer/checkout/ReviewExperience";
import PaymentComingSoon from "./pages/customer/payment/PaymentComingSoon";
import Dashboard from "./pages/customer/CustomerDashboard";
function App() {
  const { checkAuth, isCheckingAuth, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <Loader2 className="h-10 w-10 animate-spin text-gray-400" />
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<AboutPage />} />

        {/* PROTECTED ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/customer/booking" element={<BookingMarketplace />} />

        <Route path="/customer/booking-old" element={<BookingWizard />} />
        <Route path="/customer/checkout" element={<Checkout />} />
        <Route path="/customer/review" element={<ReviewExperience />} />
        <Route path="/customer/dashboard" element={<Dashboard />} />
        <Route path="/customer/payment" element={<PaymentComingSoon />} />
        {/* BUYER ROUTES */}

        {/* FALLOUT */}
      </Routes>

      <Toaster />
    </>
  );
}

export default App;
