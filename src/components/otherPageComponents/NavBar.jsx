import React from "react";

function NavBar(props) {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler outline-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse float-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li key={12} onClick={props.handleClick} className="nav-item p-2">
                <i className="bi bi-list"></i>
              </li>
              <li key={13} className="nav-item p-2">Home</li>
            </ul>
          </div>
          <div>
            <li key={14} className="nav-item p-2"></li>
          </div>
          <div className="d-flex">
            <li key={15} className="nav-item p-2">
              <i className="bi bi-search"></i>
            </li>
            <li key={16} className="nav-item p-2">
              <i className="bi bi-bell"></i>
            </li>
            <li key={17} className="nav-item p-2">
              <i className="bi bi-question-circle"></i>
            </li>
            <li key={18} className="nav-item p-2">Default Account</li>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
