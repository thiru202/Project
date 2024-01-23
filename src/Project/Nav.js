import React from "react";

export default function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm  bg-secondary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Life On Land
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-sm-0 mb-md-0">
              <li class="nav-item">
                <a
                  class="nav-link  text-light btn btn-outline-dark"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-light btn btn-outline-dark"
                  href="Problems"
                >
                  Problems
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-light btn btn-outline-dark"
                  href="contact"
                >
                  Contact
                </a>
              </li>
              <li class="nav-item ">
                <a
                  class="nav-link text-light btn btn-outline-dark"
                  href="About"
                >
                  About Us
                </a>
              </li>
            </ul>
            <div className="m-2 p-2 mb-sm-0 md-md-0">
              <button class="btn text-light btn-outline-dark m-1" type="submit">
                Sign Up
              </button>
              <button class="btn text-light btn-outline-dark m-1" type="submit">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>



    </div>
  );
}
