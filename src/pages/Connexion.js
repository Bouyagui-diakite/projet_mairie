import React, { useState, useEffect } from "react";
import "../styles/Connexion.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Connexion = () => {
  const [formDataConnexion, setFormDataConnexion] = useState({
    login: "",
    password: "",
  });

  let navigate2 = useNavigate();

  const [auth, setAuth] = useState("");
  useEffect(() => {
    var auth = localStorage.getItem("login");
    setAuth(auth);
  }, []);
  if (auth !== null) {
    navigate2("/demande");
  }

  const verifierLogin = (event) => {
    event.preventDefault();

    let formDataVerifyUser = new FormData();
    formDataVerifyUser.append("login", formDataConnexion.login);
    formDataVerifyUser.append("password", formDataConnexion.password);

    axios({
      method: "post",
      url: "http://localhost/db/demandeur/logindemandeur.php",
      data: formDataVerifyUser,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    }).then(function (response) {
      console.log(response);
      if (response.data.status === 200) {
        //Handle test
        window.localStorage.setItem("login", response.data.login);
        window.localStorage.setItem("nom", response.data.nom);
        window.localStorage.setItem("prenom", response.data.prenom);
        window.localStorage.setItem("email", response.data.email);
        alert("Connexion réussie.");
        return navigate2(`/demande`);
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
      <Header />
      <div class="divlogin">
        <h1 class="h1prem">
          CONNEXION <hr class="hrTitre" />
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
                value={formDataConnexion.login}
                onChange={(e) =>
                  setFormDataConnexion({
                    ...formDataConnexion,
                    login: e.target.value,
                  })
                }
              />
              <label for="login" class="form__label">
                Identifiant:
              </label>
            </div>
            <div class="form">
              <input
                type="password"
                id="password"
                name="password"
                class="form__input"
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
              <label for="password" class="form__label">
                Mot de passe:
              </label>
            </div>
          </div>
          <div class="sousForm">
            <button
              class="btnconnect"
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
            <NavLink to="/inscription">
              <span class="link1 pe-3 ps-3">S'inscrire</span>
            </NavLink>
            <NavLink to="/recuperation">
              <span class="link1">Mot de passe oublié?</span>
            </NavLink>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Connexion;
