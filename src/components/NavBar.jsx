import React from "react";

function NavBar(props) {
  return (
    <div className="container">
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
              <li key={20} className="nav-item p-2">Documentation</li>
              <li key={22} className="nav-item p-2">Technical Reference</li>
              <li key={23} className="nav-item p-2">API Explorer</li>
              <li key={24} className="nav-item p-2">
                <i className="bi bi-search"></i>
              </li>
            </ul>
          </div>
          <span className="d-flex">STACK15</span>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
