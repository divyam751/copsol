import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <a href="/">Copsol</a>
        </div>
        <div className="nav-links">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="why-copsol"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggleMenu}
          >
            Why Copsol
          </Link>
          <Link
            activeClass="active"
            to="mission-vision"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggleMenu}
          >
            Mission / Vision
          </Link>
          <Link
            activeClass="active"
            to="managing-partner"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggleMenu}
          >
            Managing Partner
          </Link>
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            activeClass="active"
            to="clientele"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggleMenu}
          >
            Clientele
          </Link>
          <Link
            activeClass="active"
            to="contact-us"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      <div className={`slider-menu ${isOpen ? "open" : ""}`}>
        <div className="slider-content">
          {/* Same links as in the navbar, repeated here */}
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="why-copsol"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggleMenu}
          >
            Why Copsol
          </Link>
          <Link
            activeClass="active"
            to="mission-vision"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggleMenu}
          >
            Mission / Vision
          </Link>
          <Link
            activeClass="active"
            to="managing-partner"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggleMenu}
          >
            Managing Partner
          </Link>
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            activeClass="active"
            to="clientele"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggleMenu}
          >
            Clientele
          </Link>
          <Link
            activeClass="active"
            to="contact-us"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
