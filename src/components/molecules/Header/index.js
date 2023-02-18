import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <Link to={"/"}>
        <h1 className="logo-app">MERN Blogs</h1>
      </Link>
      <Link to={"/login"} className="menu-item">
        Logout
      </Link>
    </div>
  );
};

export default Header;
