import React from "react";
import "../styles/Acceuil.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  faIdCard,
  faRoute,
  faCircleExclamation,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
const Acceuil = () => {
  return (
    <div>
      <Header />
      <div class="container main1">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <p>
              <h3 className="text">
                Bienvenue sur la platforme de
                <br />
                demandes de documents
                <br />
                administratifs
              </h3>
              <img
                src="https://label-debarras.fr/wp-content/themes/label//img/bgcontactform.png"
                alt=""
                width="450px"
                height="290px"
              />
              <h5 className="sousImg">
                Faites votre demande depuis votre domicile et
                <br />
                faites vous livrer en toute sécurité.
              </h5>
            </p>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="row justify-content-center">
              <div class="square">
                <div class="content">
                  <div style={{ marginBottom: "8px" }}>
                    <span className="ptitlogo">
                      <FontAwesomeIcon icon={faNewspaper} />
                    </span>
                  </div>
                  <div>
                    <NavLink to="/connexion">
                      <span className="nomTache">
                        Faire une <br />
                        Demande
                      </span>
                    </NavLink>
                  </div>
                  <div>
                    <span className="descTache">
                      Choisissez le type de demande et faites vous livrer à
                      domicile.
                    </span>
                  </div>
                  <div className="divFleche">
                    <span>
                      <NavLink to="/connexion">→</NavLink>
                    </span>
                  </div>
                </div>
              </div>
              <div class="square">
                <div class="content">
                  <div style={{ marginBottom: "8px" }}>
                    <span className="ptitlogo">
                      <FontAwesomeIcon icon={faRoute} />
                    </span>
                  </div>
                  <div>
                    <NavLink to="/connexion">
                      <span className="nomTache">
                        Suivi de ma
                        <br />
                        demande
                      </span>
                    </NavLink>
                  </div>
                  <div>
                    <span className="descTache">
                      Suivez le traitement de votre demande.
                    </span>
                  </div>
                  <div className="divFleche">
                    <span>
                      <NavLink to="/connexion">→</NavLink>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="square">
                <div class="content">
                  <div style={{ marginBottom: "8px" }}>
                    <span className="ptitlogo">
                      <FontAwesomeIcon icon={faIdCard} />
                    </span>
                  </div>
                  <div>
                    <NavLink to="/connexion">
                      <span className="nomTache">
                        Pièces à<br /> fournir
                      </span>
                    </NavLink>
                  </div>
                  <div>
                    <span className="descTache">
                      Consultez les pièces à fournir pour vos demandes.
                    </span>
                  </div>
                  <div className="divFleche">
                    <span>
                      <NavLink to="/connexion">→</NavLink>
                    </span>
                  </div>
                </div>
              </div>
              <div class="square">
                <div class="content">
                  <div style={{ marginBottom: "8px" }}>
                    <span className="ptitlogo">
                      <FontAwesomeIcon icon={faCircleExclamation} />
                    </span>
                  </div>
                  <div>
                    <NavLink to="/apropos">
                      <span className="nomTache">
                        A propos de
                        <br /> la plateforme
                      </span>
                    </NavLink>
                  </div>
                  <div>
                    <span className="descTache">
                      Informations sur la plateforme.
                    </span>
                  </div>
                  <div className="divFleche">
                    <span>
                      <NavLink to="/apropos">→</NavLink>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center AvantBottom">
            Besoin d'aide pour quoi que ce soit?{"  "}
            <NavLink to="/connexion">
              <a className="aide">Get in touch</a>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Acceuil;
