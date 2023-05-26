import React from "react";
import FooterAgent from "../components/FooterAgent";
import HeaderAgent from "../components/HeaderAgent";
import { NavLink } from "react-router-dom";
import "../styles/agent.css";
const RecupererMdpAgent = () => {
  return (
    <div>
      <div class="divloginAg">
        <HeaderAgent />
        <h1 class="h1prem">
          Recuperation du mot de passe <hr class="hrTitreAD" />
        </h1>
        <form action="">
          <div class="fistinform">
            <div class="form">
              <input
                type="text"
                id="reccupAg"
                name="login"
                class="form__inputAg"
                autoComplete="off"
                placeholder=" "
              />
              <label for="login" class="form__labelAg">
                Email de connexion:
              </label>
            </div>
          </div>
          <div class="sousForm">
            <button class="btnconnectAg" type="button">
              Récupérer mon mot de passe
            </button>
            <NavLink to="/agentlogin">
              <span class="link1Ag pe-3 ps-3">se conneter</span>
            </NavLink>
          </div>
        </form>
        <div class="footAdmin">
          <FooterAgent />
        </div>
      </div>
    </div>
  );
};

export default RecupererMdpAgent;
