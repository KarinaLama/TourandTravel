// Navbar.js
import React, { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "./ManuItem";
import image6 from '../images/image6.jpg';

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav className="top-navbar">
          <div style={{ width: '50%' }}>
          </div>
          <h1 style={{ width: '50%', marginLeft: '20vh' }} className="top-navbar-logo">Champawati <i>Tours & Travels</i></h1>
          {/* Render the right-corner-box only on large screens */}
          <div className="right-corner-box">Best travel company in Kathmandu</div>
        </nav>
    
        <nav className="navbarItem">
          <div style={{ width: '7%' , marginTop: '-45px'}}>
            <img src={image6} alt="Logo" className="navbar-logo" style={{ width: '100%' }} />
          </div>
          <div className="menu-icons" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
