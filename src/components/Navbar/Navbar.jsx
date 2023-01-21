import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import closeMenu from "../../assets/icon-close.svg";
import HamburgerMenu from "../../assets/icon-hamburger.svg";
import { motion } from "framer-motion";
import "./Navbar.css";
function Navbar() {
  const navMenu = useRef(null);
  function toggleNavMenu() {
    navMenu.current.classList.toggle("show");
  }

  const logoVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 100, duration: 1 },
    },
  };
  const navVariant = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 100, duration: 1 },
    },
  };
  return (
    <>
      <nav className="navbar">
        <motion.img
          variants={logoVariant}
          initial="hidden"
          animate="visible"
          src={logo}
          alt="logo"
        />
        <motion.img
          variants={navVariant}
          initial="hidden"
          animate="visible"
          className="hamburger-menu"
          src={HamburgerMenu}
          alt="open menu icon"
          onClick={toggleNavMenu}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="navbar-nav-wrapper"
          ref={navMenu}
        >
          <img
            src={closeMenu}
            alt="close menu icon"
            className="close-menu"
            onClick={toggleNavMenu}
          />
          <motion.ul
            variants={navVariant}
            initial="hidden"
            animate="visible"
            className="navbar-nav"
          >
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={toggleNavMenu}
              >
                <span>00</span> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/destination"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={toggleNavMenu}
              >
                <span>01</span> Destination
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/crew"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={toggleNavMenu}
              >
                <span>02</span> Crew
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/technology"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={toggleNavMenu}
              >
                <span>03</span> Technology
              </NavLink>
            </li>
          </motion.ul>
        </motion.div>
      </nav>
    </>
  );
}

export default Navbar;
