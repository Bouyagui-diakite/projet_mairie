import React, { useState } from "react";
import "../styles/Connexion.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Etape1 from "../components/Etape1";
import Etape2 from "../components/Etape2";
import Etape3 from "../components/Etape3";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

const Inscription = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    datenaiss: "",
    nat: "",
    email: "",
    tel: "",
    genre: "",
    profession: "",
    login: "",
    mdp: "",
    confirm: "",
  });

  let navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    let formDataAddUser = new FormData();
    formDataAddUser.append("nom", formData.nom);
    formDataAddUser.append("prenom", formData.prenom);
    formDataAddUser.append("date", formData.datenaiss);
    formDataAddUser.append("nationalite", formData.nat);
    formDataAddUser.append("email", formData.email);
    formDataAddUser.append("tel", formData.tel);
    formDataAddUser.append("genre", formData.genre);
    formDataAddUser.append("profession", formData.profession);
    formDataAddUser.append("login", formData.login);
    formDataAddUser.append("mdp", formData.mdp);

    axios({
      method: "post",
      url: "http://localhost/db/demandeur/registerdemandeur.php",
      data: formDataAddUser,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    }).then(function (response) {
      //Handle test
      console.log(response);
      if (response.data.status === 200) {
        alert("Utilisateur créé avec succés.");
        return navigate(`/connexion`);
      } else if (response.data.status === 202) {
        alert("Ce login est déjà utilisé.");
        //Login Existant
      } else if (response.data.status === 203) {
        //Email Existant
        alert("Cet Email est déjà utilisé.");
      }
    });
  };

  const PageDisplay = () => {
    if (page === 0) {
      return <Etape1 formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Etape2 formData={formData} setFormData={setFormData} />;
    } else {
      return <Etape3 formData={formData} setFormData={setFormData} />;
    }
  };
  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const goStep2 = () => {
    if (
      page === 0 &&
      (formData.nom === "" ||
        formData.prenom === "" ||
        formData.datenaiss === "")
    ) {
      alert("Tous les champs sont obligatoires. 1");
      document.getElementById("nom").style.borderColor =
        formData.nom === "" ? "red" : "#577cb6";
      document.getElementById("prenom").style.borderColor =
        formData.prenom === "" ? "red" : "#577cb6";
      document.getElementById("date").style.borderColor =
        formData.datenaiss === "" ? "red" : "#577cb6";
    } else {
      setPage((currPage) => (currPage = 1));
    }
  };

  const goStep3 = () => {
    if (
      (page === 0 || page === 1) &&
      (formData.nat === "" ||
        formData.nat === "vide1" ||
        formData.genre === "" ||
        formData.genre === "vide2" ||
        formData.email === "" ||
        formData.tel === "" ||
        formData.profession === "")
    ) {
      alert("Tous les champs sont obligatoires. 2");
      document.getElementById("nationalite").style.borderColor =
        formData.nat === null ? "red" : "#577cb6";
      document.getElementById("nationalite").style.borderColor =
        formData.nat === "vide1" ? "red" : "#577cb6";
      document.getElementById("email").style.borderColor =
        formData.email === "" ? "red" : "#577cb6";
      document.getElementById("tel").style.borderColor =
        formData.tel === "" ? "red" : "#577cb6";
      document.getElementById("genre").style.borderColor =
        formData.genre === "" ? "red" : "#577cb6";
      document.getElementById("genre").style.borderColor =
        formData.genre === "vide2" ? "red" : "#577cb6";
      document.getElementById("profession").style.borderColor =
        formData.profession === "" ? "red" : "#577cb6";
    } else setPage((currPage) => (currPage = 2));
  };

  return (
    <div>
      <Header />
      <div class="divlogin">
        <h1 class="h1prem">
          INSCRIPTION <hr class="hrTitre" />
        </h1>
        <form action="">
          <div class="stepDiv">
            <button
              type="button"
              id="btn1"
              style={{ background: page === 0 ? "#577cb6" : "white" }}
              class="step1 btfocus"
              onClick={() => {
                setPage((currPage) => (currPage = 0));
              }}
            >
              Etape 1
            </button>
            <button
              type="button"
              id="btn2"
              style={{ background: page === 1 ? "#577cb6" : "white" }}
              class="step2 btfocus"
              onClick={() => {
                goStep2();
              }}
            >
              Etape 2
            </button>
            <button
              type="button"
              id="btn3"
              style={{ background: page === 2 ? "#577cb6" : "white" }}
              class="step3 btfocus"
              onClick={() => {
                goStep3();
              }}
            >
              Etape 3
            </button>
          </div>
          <div class="contenu">{PageDisplay()}</div>
          <div class="stepDiv2">
            <button
              id="preced"
              type="button"
              class="btnDiv2 precedent"
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Précédent
            </button>
            <button
              class="btnDiv2 suiv"
              type="button"
              id="submit1"
              onClick={(e) => {
                if (page === FormTitles.length - 1) {
                  if (
                    (formData.login === "",
                    formData.mdp === "",
                    formData.confirm === "")
                  ) {
                    alert("Tous les champs sont obligatoires.");
                  } else if (formData.mdp !== formData.confirm) {
                    alert("Les mots de passe sont différents.");
                  } else {
                    console.log(formData);
                    document
                      .getElementById("submit1")
                      .setAttribute("type", "submit");
                    handleFormSubmit(e);
                  }
                } else {
                  if (
                    page === 0 &&
                    (formData.nom === "" ||
                      formData.prenom === "" ||
                      formData.datenaiss === "")
                  )
                    alert("Tous les champs sont obligatoires.");
                  else if (
                    page === 1 &&
                    (formData.nat === "" ||
                      formData.nat === "vide1" ||
                      formData.genre === "" ||
                      formData.genre === "vide2" ||
                      formData.email === "" ||
                      formData.tel === "" ||
                      formData.profession === "")
                  )
                    alert("Tous les champs sont obligatoires.");
                  else setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "S'inscrire" : "Suivant"}
            </button>
            <span>
              <span class="link1 already">
                <NavLink to="/connexion">j'ai déja un compte</NavLink>
              </span>
            </span>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Inscription;
