import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landing";
// import AppNavbar from "./components/AppNavbar";
import Login from "./components/login";
import Signup from "./components/Signup";
import Affirmations from "./pages/Affirmations";
import MainSection from "./components/mainsection";
import ThoughtDump from "./pages/ThoughtDump";
import Report from "./pages/Report";

// Navbar with optional back button
function AppNavbar({ showBack }) {
  const navigate = useNavigate();
  return (
    <nav className="w-full bg-[#FBF3E8] font-poppins sticky top-0 z-50 border-b border-[#e8d5c4] flex items-center justify-between px-4 md:px-12 lg:px-24 h-16">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          navigate("/landing");
        }}
        className="flex items-center h-full"
      >
        <h1 className="font-dancing text-2xl md:text-3xl lg:text-4xl font-bold text-[#3e807f] hover:text-[#2d5f5d] transition-colors duration-200 cursor-pointer">
          Hush
        </h1>
      </a>
      {showBack && (
        <button
          className="ml-auto bg-[#FFBB97] hover:bg-[#ff9f73] text-white font-bold px-4 py-2 rounded-full shadow transition-all duration-150"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      )}
    </nav>
  );
}

function AuthPage({ onAuth }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
      {/* Removed AppNavbar here to avoid duplicate navbar */}
      {showLogin ? (
        <Login onAuth={onAuth} toggle={() => setShowLogin(false)} />
      ) : (
        <Signup onAuth={onAuth} toggle={() => setShowLogin(true)} />
      )}
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/landing" />
            ) : (
              <AuthPage onAuth={() => setIsAuthenticated(true)} />
            )
          }
        />
        {/* Signup (optional direct route) */}
        <Route
          path="/signup"
          element={
            <>
              <AppNavbar showBack={true} />
              <Signup
                onAuth={() => setIsAuthenticated(true)}
                toggle={() => {}}
              />
            </>
          }
        />
        {/* Landing */}
        <Route
          path="/landing"
          element={
            <>
              <LandingPage />
            </>
          }
        />
        {/* MoodLog/MainSection */}
        <Route
          path="/affirmations"
          element={
            <>
              <AppNavbar showBack={true} />
              <Affirmations />
            </>
          }
        />
        {/* ThoughtDump */}
        <Route
          path="/thought-dump"
          element={
            <>
              <AppNavbar showBack={true} />
              <ThoughtDump />
            </>
          }
        />
        {/* Report */}
        <Route
          path="/report"
          element={
            <>
              <AppNavbar showBack={true} />
              <Report />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
