import { Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider } from "@context/ThemeContext";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Register from "@pages/Register";
import ForgotPassword from "@pages/ForgotPassword";
import AboutUs from "@pages/AboutUs";
import Contact from "@pages/Contact";
import Services from "@pages/Services";
import WhoWeHelp from "@pages/WhoWeHelp";
import Founder from "@pages/Founder";

function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      const timer = setTimeout(() => {
        const retryEl = document.querySelector(hash);
        if (retryEl) retryEl.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/who-we-help" element={<WhoWeHelp />} />
          <Route path="/founder" element={<Founder />} />
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
