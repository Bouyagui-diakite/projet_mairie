import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import FooterAgent from "../components/FooterAgent";
import HeaderAgent from "../components/HeaderAgent";
import axios from "axios";
import "../styles/agent.css";
const AgentLogin = () => {
  const [formDataConnexion, setFormDataConnexion] = useState({
    login: "",
    password: "",
  });

  let navigateagent = useNavigate();

  const [authAgent, setAuthAgent] = useState("");
  useEffect(() => {
    var authAgent = localStorage.getItem("loginAgent");
    setAuthAgent(authAgent);
  }, []);
  if (authAgent !== null) {
    navigateagent("/agentdashboard");
  }

  const verifierLogin = (event) => {
    event.preventDefault();

    let formDataVerifyUser = new FormData();
    formDataVerifyUser.append("login", formDataConnexion.login);
    formDataVerifyUser.append("password", formDataConnexion.password);

    axios({
      method: "post",
      url: "http://localhost/db/agent/loginagent.php",
      data: formDataVerifyUser,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    }).then(function (response) {
      console.log(response);
      if (response.data.status === 200) {
        //Handle Réussi
        window.localStorage.setItem("loginAgent", response.data.loginAgent);
        window.localStorage.setItem("nomAgent", response.data.nomAgent);
        window.localStorage.setItem("prenomAgent", response.data.prenomAgent);
        window.localStorage.setItem("emailAgent", response.data.emailAgent);
        alert("Connexion réussie.");
        return navigateagent(`/agentdashboard`);
      } else if (response.data.status === 202) {
        //Handle Echoué
        alert("Le mot de passe est incorrecte.");
      } else if (response.data.status === 203) {
        //Handle Echoué
        alert("Le Login est incorrecte.");
      }
    });
  };
  return (
    <div>
      <div class="divloginAg">
        <HeaderAgent />
        <h1 class="h1prem">
          CONNEXION AGENT <hr class="hrTitreAg" />
        </h1>
        <form action="">
          <div class="fistinformAg">
            <div class="form">
              <input
                type="text"
                id="loginAg"
                name="login"
                class="form__inputAg"
                autoComplete="off"
                placeholder=" "
                value={formDataConnexion.login}
                onChange={(e) =>
                  setFormDataConnexion({
                    ...formDataConnexion,
                    login: e.target.value,
                  })
                }
              />
              <label for="login" class="form__labelAg">
                Identifiant:
              </label>
            </div>
            <div class="form">
              <input
                type="password"
                id="passwordAg"
                name="password"
                class="form__inputAg"
                autoComplete="off"
                placeholder=" "
                value={formDataConnexion.password}
                onChange={(e) =>
                  setFormDataConnexion({
                    ...formDataConnexion,
                    password: e.target.value,
                  })
                }
              />
              <label for="password" class="form__labelAg">
                Mot de passe:
              </label>
            </div>
          </div>
          <div class="sousForm">
            <button
              class="btnconnectAg"
              type="submit"
              onClick={(e) => {
                if (
                  formDataConnexion.login === "" ||
                  formDataConnexion.password === ""
                ) {
                  alert("Tous les champs sont obligatoires.");
                } else {
                  console.log(formDataConnexion);
                  verifierLogin(e);
                }
              }}
            >
              Connexion
            </button>
            <NavLink to="/recuperationagent">
              <span class="link1Ag ps-5">Mot de passe oublié?</span>
            </NavLink>
          </div>
        </form>
        <div class="footAg">
          <FooterAgent />
        </div>
      </div>
    </div>
  );
};

export default AgentLogin;
