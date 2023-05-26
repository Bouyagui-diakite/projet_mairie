import React, { useState, useEffect } from "react";
import "../styles/adminConnexion.css";
import HeaderAdmin from "../components/HeaderAdmin";
import FooterAdmin from "../components/FooterAdmin";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
  const [formDataConnexion, setFormDataConnexion] = useState({
    login: "",
    password: "",
  });

  let navigate2 = useNavigate();

  const [authAdmin, setAuthAdmin] = useState("");
  useEffect(() => {
    var authAdmin = localStorage.getItem("loginAdmin");
    setAuthAdmin(authAdmin);
  }, []);
  if (authAdmin !== null) {
    navigate2("/dashboardadmin");
  }

  const verifierLogin = (event) => {
    event.preventDefault();

    let formDataVerifyUser = new FormData();
    formDataVerifyUser.append("login", formDataConnexion.login);
    formDataVerifyUser.append("password", formDataConnexion.password);

    axios({
      method: "post",
      url: "http://localhost/db/admin/loginadmin.php",
      data: formDataVerifyUser,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    }).then(function (response) {
      console.log(response);
      if (response.data.status === 200) {
        //Handle Réussi
        window.localStorage.setItem("loginAdmin", response.data.loginAdmin);
        window.localStorage.setItem("nomAdmin", response.data.nomAdmin);
        window.localStorage.setItem("prenomAdmin", response.data.prenomAdmin);
        window.localStorage.setItem("emailAdmin", response.data.emailAdmin);
        alert("Connexion réussie.");
        return navigate2(`/dashboardadmin`);
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
      <div class="divloginAD">
        <HeaderAdmin />
        <h1 class="h1prem">
          CONNEXION ADMINISTRATEUR <hr class="hrTitreAD" />
        </h1>
        <form action="">
          <div class="fistinformAD">
            <div class="form">
              <input
                type="text"
                id="loginAD"
                name="login"
                class="form__inputAD"
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
              <label for="login" class="form__labelAD">
                Identifiant:
              </label>
            </div>
            <div class="form">
              <input
                type="password"
                id="passwordAD"
                name="password"
                class="form__inputAD"
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
              <label for="password" class="form__labelAD">
                Mot de passe:
              </label>
            </div>
          </div>
          <div class="sousForm">
            <button
              class="btnconnectAD"
              type="button"
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

            <a href="/recuperationadmin" class="link1AD ps-5">
              Mot de passe oublié?
            </a>
          </div>
        </form>
        <div class="footAdmin">
          <FooterAdmin />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
