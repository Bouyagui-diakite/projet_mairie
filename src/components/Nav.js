import React from "react";
import "bootstrap/dist/css/bootstrap.css";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-md">
          <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">
                Faire une demande
              </a>
              <a class="nav-link" href="#">
                Suivi demande
              </a>
              <a class="nav-link" href="#">
                Piéces à fournir{" "}
              </a>
              <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">
                A propos
              </a>
            </div>
          </div>
          <div class="navbar-nav">
            <a class="nav-link" href="#">
              FAQ{" "}
            </a>
            <a class="nav-link" href="#">
              Aide{" "}
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
