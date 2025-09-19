import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import Home from "./pages/home.jsx";
import Dishes from "./pages/dishes.jsx";
import Login from "./pages/login.jsx";
import Dashboard from "./pages/dashboard.jsx";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-dvh bg-white text-gray-900">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dishes" element={<Dishes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}
