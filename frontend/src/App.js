import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Hero from "./components/Hero";
import Treks from "./components/Treks";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";

import AboutUs from "./pages/AboutUs";  // ⭐ Correct import
import AuthProvider from "./context/AuthContext";

import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

export default function App() {
  return (
    <AuthProvider>
      <Router>

        <ToastContainer position="top-center" autoClose={2000} theme="dark" />

        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/treks" element={<Treks />} />
          <Route path="/about" element={<AboutUs />} />   {/* ⭐ ADD THIS */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        <Footer />

      </Router>
    </AuthProvider>
  );
}
