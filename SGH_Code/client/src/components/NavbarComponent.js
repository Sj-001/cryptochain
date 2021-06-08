import React, { Component } from "react";
import "../assets/css/Navbar.css";
import icon from "../assets/img/icon4.png";
class NavbarComponent extends Component {
  render() {
    return (
      <div className="navbar-area">
        <div className="container">
          <nav className="site-navbar">
            <a href="#home" className="site-logo" style={{ marginLeft: "-5%" }}>
              VERGIO
            </a>
            <img
              src={icon}
              style={{
                width: "7%",
                marginLeft: "-45%",
              }}
            />
            <ul>
              <li>
                <a style={{ fontSize: "200%" }} href="/">
                  home
                </a>
              </li>
              <li>
                <a style={{ fontSize: "200%" }} href="/about">
                  about
                </a>
              </li>
              <li>
                <a style={{ fontSize: "200%" }} href="/services">
                  services
                </a>
              </li>
              <li>
                <a style={{ fontSize: "200%" }} href="/team">
                  Team
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavbarComponent;
