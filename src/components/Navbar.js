import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const mode = props.mode;
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${mode ? "light" : "dark"} bg-${
        mode ? "light" : "dark"
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <i className={`bi bi-newspaper text-${mode ? "primary" : "warning"}`}></i> NewsApp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                <span className={`text-${mode ? "dark" : "light"}`}>Home</span>
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link active" href="#">
                <span className={`text-${mode ? "dark" : "light"}`}>About</span>
              </a>
            </li> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link active dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className={`text-${mode ? "dark" : "light"}`}>Category</span>
              </a>
              <ul className={`dropdown-menu`}>
                <li>
                  <Link className={`dropdown-item`} to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li>
                  <Link className={`dropdown-item`} to="/general">
                    General
                  </Link>
                </li>
                <li>
                  <Link className={`dropdown-item`} to="/science">
                    Science
                  </Link>
                </li>
                <li>
                  <Link className={`dropdown-item`} to="/sports">
                    Sports
                  </Link>
                </li>
                <li>
                  <Link className={`dropdown-item`} to="/health">
                    Health
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/business">
                    Business
                  </Link>
                </li>
              </ul>
              
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/reviews">
                <span className={`text-${mode ? "dark" : "light"}`}>Reviews</span>
              </Link>
            </li>
          </ul>
<div className="d-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#EBE834"
            className="bi bi-brightness-high-fill me-3 mt-1"
            viewBox="0 0 16 16"
          >
            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
          </svg>
          {/* <i className={`bi bi-brightness-high-fill me-3 text-${mode ? "dark" : "light"}`}></i> */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.bar} /*defaultChecked*/
            />
            <i
              className={`bi bi-moon me-3 ms-2 text-${mode ? "dark" : "light"}`}
            ></i>
            {/* <label className={`form-check-label me-2 text-${mode ? "dark" : "light"}`} for="flexSwitchCheckDefault">
              Enable Dark Mode
            </label> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
