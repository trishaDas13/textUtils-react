import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  function changeMode() {
    let body = document.body;

    if (body.classList.contains("dark")) {
        body.classList.add("light");
        body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    } else {
      body.classList.remove("light");
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <header>
      <nav className="nav_left">
        <h1 onClick={() => window.location.reload(false)}>📝 TextUtils</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <nav className="nav_right">
        <div className="checkbox-wrapper-54">
          <label className="switch">
            <input type="checkbox" />
            <span
              className="slider"
              style={{ border: "1px dashed" }}
              onClick={changeMode}
            ></span>
          </label>
        </div>
      </nav>
    </header>
  );
}

export default Header;
