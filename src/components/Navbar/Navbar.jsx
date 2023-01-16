import React, { useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/logo.svg";
import closeMenu from "../../assets/icon-close.svg";
import HamburgerMenu from "../../assets/icon-hamburger.svg";
import "./Navbar.css";
function Navbar() {
  const navMenu = useRef(null);
  function toggleNavMenu() {
    navMenu.current.classList.toggle("show");
  }
  return (
    <>
      <nav className="navbar p-10">
        <img src={logo} alt="logo" />
        <img
          className="hamburger-menu"
          src={HamburgerMenu}
          alt="open menu icon"
          onClick={toggleNavMenu}
        />
        <div className="navbar-nav-wrapper" ref={navMenu}>
          <img
            src={closeMenu}
            alt="close menu icon"
            className="close-menu"
            onClick={toggleNavMenu}
          />
          <ul className="navbar-nav">
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
          </ul>
        </div>
      </nav>

      <Outlet></Outlet>
    </>
  );
}

export default Navbar;
