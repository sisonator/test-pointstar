import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { FaSyringe, FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <FaSyringe className="navbar-icon" />
              VACCINESIA
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/news"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/sign-up"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>
              </li>
            </ul>
            <Link to="/sign-up" className="btn-mobile">
              {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
            </Link>
            <Link to="/login" className="btn-mobile">
              {button && <Button buttonStyle="btn--outline">Login</Button>}
            </Link>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
