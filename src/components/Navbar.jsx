import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
   const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

    const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <>
      <nav className="navbar">
        {/* Left - Logo */}
        <div className="nav-left">
          <img src={logo} alt="AIXAM Logo" className="logo" />
          <span className="brand">AIXAM</span>
        </div>

        {/* Center - Links */}
        <ul className="nav-center">
          <li className="active"  onClick={() => { scrollToSection("home"); setMenuOpen(false); }}>Home</li>
          <li   onClick={() => { scrollToSection("about"); setMenuOpen(false); }}>About</li>
          <li  onClick={() => { scrollToSection("whyus"); setMenuOpen(false); }}>Why Us</li>
        </ul>

        {/* Right - Buttons & Theme */}
        <div className="nav-right">
          <button className="btn student" onClick={() => navigate("/login-student")}>Student</button>
          <button className="btn teacher" onClick={() => navigate("/login-teacher")}>Teacher</button>

          <div
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "🌙" : "☀️"}
          </div>
        </div>
      </nav>

      {/* CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          transition: background 0.4s ease;
        }

        body.dark {
          background: radial-gradient(circle at top, #1a132b, #0b0617);
          color: #ffffff;
        }

        body.light {
          background: #f5f7fb;
          color: #111;
        }

        .navbar {
          width: 95%;
          margin: 20px auto;
          padding: 14px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(18px);
          border-radius: 22px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 20px 40px rgba(0,0,0,0.35);
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo {
          width: 46px;
          height: 56px;
        }

        .brand {
          font-size: 22px;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .nav-center {
          display: flex;
          gap: 32px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .nav-center li {
          cursor: pointer;
          font-size: 15px;
          opacity: 0.85;
          position: relative;
        }

        .nav-center li:hover {
          opacity: 1;
        }

        .nav-center .active::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #7cf3c4, #79cfff);
          bottom: -8px;
          left: 0;
          border-radius: 10px;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .btn {
          padding: 10px 18px;
          border-radius: 14px;
          border: none;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #0b0617;
        }

        .btn.student {
          background: linear-gradient(135deg, #e7f6ff, #9edcff);
        }

        .btn.teacher {
          background: linear-gradient(135deg, #eafff3, #9ff0c6);
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(0,0,0,0.25);
        }

        .theme-toggle {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          cursor: pointer;
          font-size: 18px;

          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          transition: all 0.3s ease;
        }

        .theme-toggle:hover {
          transform: rotate(12deg) scale(1.05);
        }
      `}</style>
    </>
  );
};

export default Navbar;
