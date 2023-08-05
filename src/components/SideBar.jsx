import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./SideBar.css";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="sidebar_container">
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <NavLink exact to="/" activeClassName="active-link">
          <div>Token Address</div>
        </NavLink>
        <NavLink to="/pair" activeClassName="active-link">
          <div>Pair Address</div>
        </NavLink>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${showSidebar ? "show-sidebar" : ""}`}>
        <h2>Menu</h2>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active-link">
              Token Address
            </NavLink>
          </li>
          <li>
            <NavLink to="/pair" activeClassName="active-link">
              Pair Address
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">your content</div>
    </div>
  );
};

export default Sidebar;
