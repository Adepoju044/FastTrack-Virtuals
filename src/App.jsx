import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider } from "@context/ThemeContext";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Register from "@pages/Register";
import ForgotPassword from "@pages/ForgotPassword";
import AboutUs from "@pages/AboutUs";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
