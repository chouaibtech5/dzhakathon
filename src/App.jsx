import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import SMSVerification from "./pages/sms.jsx";
import ResetPassword from "./pages/resetPassword.jsx";
import SuccessConfirm from "./pages/sucessconfirm.jsx";
import ResetPasswordConfirm from "./pages/resetPasswordConfirm.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Dashboard from "./admin/pages/Dashboard.jsx";
import Orders from "./admin/pages/Orders.jsx";
import MenuManagement from "./admin/pages/MenuManagement.jsx";
import AddMeal from "./admin/pages/AddMeal.jsx";
import Employees from "./admin/pages/Employees.jsx";
import Clients from "./admin/pages/Clients.jsx";
import Reviews from "./admin/pages/Reviews.jsx";
import Settings from "./admin/pages/Settings.jsx";
import StatisticAI from "./admin/pages/StatisticAI.jsx";
import AddStatisticForMeal from "./admin/pages/AddStatisticForMeal.jsx";
import MealStatisticDetails from "./admin/pages/MealStatisticDetails.jsx";
import Notifications from "./admin/pages/Notifications.jsx";

export default function App() {
  return (
    <Router>
      <div className="min-h-dvh text-gray-900">
        <Routes>
          {/* Customer Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/sms-verification" element={<SMSVerification />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/reset-password-confirm" element={<ResetPasswordConfirm />} />
          <Route path="/success-confirm" element={<SuccessConfirm />} />
          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/menu" element={<MenuManagement />} />
          <Route path="/admin/add-meal" element={<AddMeal />} />
          <Route path="/admin/employees" element={<Employees />} />
          <Route path="/admin/clients" element={<Clients />} />
          <Route path="/admin/reviews" element={<Reviews />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path="/admin/statistics" element={<StatisticAI />} />
          <Route path="/admin/add-statistic" element={<AddStatisticForMeal />} />
          <Route path="/admin/meal-statistic/:id" element={<MealStatisticDetails />} />
          <Route path="/admin/notifications" element={<Notifications />} />
          
          {/* Not Found Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}
