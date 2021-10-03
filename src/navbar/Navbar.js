import React from "react";
import "./navbar.css"

import img from '../img/profile.jpg'

const Navbar = () => {
  return(
    <nav className="nav">
      <div className="wrapper">
        <div className="logo">DnG</div>
        <ul className="nav-links">
          <label htmlFor=""className="btn cancel-btn"><i className="fas fa-times">X</i></label>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li>
            <a href="#" className="desktop-item">Dropdown menu</a>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">Dropdown menu</label>
            <ul className="drop-menu">
              <li><a href="#">Drop Menu 1</a></li>
              <li><a href="#">Drop Menu 2</a></li>
              <li><a href="#">Drop Menu 3</a></li>
              <li><a href="#">Drop Menu 4</a></li>
            </ul>
            </li>
          <li>
            <a  className="desktop-item" href="#">Mega Menu</a>
          <input type="checkbox" id="showMega" />
            <label htmlFor="showMega" className="mobile-item">Mega Menu</label>
          <div className="mega-box">
            <div className="content">
              {/* Row 1 img*/}
              <div className="row">
              <img src={img} alt="" />
              </div>
              {/* Row 2 */}
              <div className="row">
                <header>Design Services</header>
                <ul className="mega-links">
              <li><a href="#">Graphics</a></li>
              <li><a href="#">Vectors</a></li>
              <li><a href="#">Business cards</a></li>
              <li><a href="#">Custom Logo</a></li>
                </ul>
              </div>
              {/* Row 2 */}
              <div className="row">
                <header>Design Services</header>
                <ul className="mega-links">
              <li><a href="#">Graphics</a></li>
              <li><a href="#">Vectors</a></li>
              <li><a href="#">Business cards</a></li>
              <li><a href="#">Custom Logo</a></li>
                </ul>
              </div>
              {/* Row 4 */}
              <div className="row">
                <header>Design Services</header>
                <ul className="mega-links">
              <li><a href="#">Graphics</a></li>
              <li><a href="#">Vectors</a></li>
              <li><a href="#">Business cards</a></li>
              <li><a href="#">Custom Logo</a></li>
                </ul>
              </div>
            </div>
          </div>
          </li>
          <li><a href="#">Contact</a></li>
        </ul>
        <label htmlFor=""className="btn menu-btn"><i className="fas fa-times">menu</i></label>
      </div>
    </nav>
  )
};

export default Navbar;
