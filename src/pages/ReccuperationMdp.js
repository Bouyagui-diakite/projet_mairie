import React from "react";
import "../styles/Connexion.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
const ReccuperationMdp = () => {
  return (
    <div>
      <Header />
      <div class="divlogin">
        <h1 class="h1prem">
          Recuperation du mot de passe <hr class="hrTitre" />
        </h1>
        <form action="">
          <div class="fistinform">
            <div class="form">
              <input
                type="text"
                id="login"
                name="login"
                class="form__input"
                autoComplete="off"
                placeholder=" "
              />
              <label for="login" class="form__label">
                Email de connexion:
              </label>
            </div>
          </div>
          <div class="sousForm">
            <button class="btnconnect" type="button">
              Récupérer mon mot de passe
            </button>
            <NavLink to="/connexion">
              <span class="link1 pe-3 ps-3">se conneter</span>
            </NavLink>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ReccuperationMdp;
