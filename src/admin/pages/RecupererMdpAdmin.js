import React from "react";
import "../styles/adminConnexion.css";
import HeaderAdmin from "../components/HeaderAdmin";
import Footer from "../../components/Footer";
import { NavLink } from "react-router-dom";
const RecupererMdpAdmin = () => {
  return (
    <div>
      <div class="divloginAD">
        <HeaderAdmin />
        <h1 class="h1prem">
          Recuperation du mot de passe <hr class="hrTitreAD" />
        </h1>
        <form action="">
          <div class="fistinform">
            <div class="form">
              <input
                type="text"
                id="reccupAD"
                name="login"
                class="form__inputAD"
                autoComplete="off"
                placeholder=" "
              />
              <label for="login" class="form__labelAD">
                Email de connexion:
              </label>
            </div>
          </div>
          <div class="sousForm">
            <button class="btnconnectAD" type="button">
              Récupérer mon mot de passe
            </button>
            <NavLink to="/adminlogin">
              <span class="link1AD pe-3 ps-3">se conneter</span>
            </NavLink>
          </div>
        </form>
        <div class="footAdmin">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default RecupererMdpAdmin;
