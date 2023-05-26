import React, { useEffect, useState } from "react";
import "../styles/FaireDemande.css";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Pagination from "../pages/Pagination";
import Step from "../components/Step.tsx";


const FaireDemande = () => {
  let navigate3 = useNavigate();
  const [auth, setAuth] = useState("");
  useEffect(() => {
    var auth = localStorage.getItem("login");
    setAuth(auth);
  }, []);
  if (auth === null) {
    navigate3("/connexion");
  }
  const [posts, setPosts] = useState([
    {
    userId: 1,
      id: 1,
      title:"Bulletin de Naissance",
      body:
        "Reproduction succincte de l’acte de naissance. Il renseigne sur le centre d’enregistrement de l’acte, la date et le lieu de naissance et la filiation.",
       url: <a href="/BulletinNaiss">➡</a>
    },
    {
      userId: 1,
      id: 2,
      title: "Certficat de Résidence",
      body:
        " Le certificat de résidence atteste qu’une personne réside effectivement dans une localité donnée.",
        url: <a href="/CertificatResidence">➡</a>
    },
    {
      userId: 1,
      id: 3,
      title: "Bulletin de Décès",
      body:
        "Le bulletin de décès est la reproduction succincte de l’acte de décès.",
        url: <a href="/Bulletin_deces">➡</a>
    },
    {
      userId: 1,
      id: 4,
      title: "Passeport numerisé",
      body:
        "Le passeport numérisé est un document de voyage qui peut être demandé pour entrer dans un pays étranger.",
        url: <a href="/passeport">➡</a>
    },
    {
      userId: 1,
      id: 5,
      title: "Autorisation de construire",
      body:
        "L’autorisation de construire est obligatoire pour démarrer le travaux de construction ou de modification importante d’un bâtiment.",
        url: <a href="/Autorisation">➡</a>
    },
    {
      userId: 1,
      id: 6,
      title: "Extrait du casier judiciaire",
      body:
        " L’extrait du casier judiciaire est un document qui permet de connaître le passé pénal d’un citoyen.",
        url: <a href="/Casier">➡</a>
    },
    {
      userId: 1,
      id: 7,
      title: "Sauf-conduit",
      body:
        " Le sauf-conduit est un document temporaire de voyage délivré pour faire face à une urgence.",
        url: <a href="/SaufConduit">➡</a>
    },
    {
      userId: 1,
      id: 8,
      title: "Acte de Mariage",
      body:
        "est un acte juridique de l'etat civil. C'est un acte authentique etabli par un officier d'etat civil qui fait la preuve de la situation maritale des epoux",
        url: <a href="/ActeMariage">➡</a>
    },
    {
      userId: 1,
      id: 9,
      title: "Certification de Document",
      body:
        "Certification de vos documents administratifs",
        url: <a href="/Certificat">➡</a>
    },
    {
      userId: 1,
      id: 10,
      title: "Légalisation de signature",
      body:
        "La légalisation de signature permet de faire authentifier votre propre signature sur un acte qui a ete rédige et signe sans la présence d'un notaire. Cette demarche est soumise a certaines conditions",
        url: <a href="/Legalisation">➡</a>
    },
    {
      userId: 2,
      id: 11,
      title: "Certificats de Nationalite",
      body:
        "Le certificat de nationalité est un document officiel delivré par les autorités d'un pays, qui sert a prouver la nationalité d'un individu",
        url: <a href="/Nationalite">➡</a>
    },
   
  ])
  const [showPerPage, setShowPerPage] = useState(4);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  return (
    <div>
      <Header />
      <Nav />
      <div class="container">
        <button type="button" class="btn">
          <a href="#">Tout</a>
        </button>{" "}
        &nbsp;&nbsp;
        <button type="button" class="btn ">
          <a href="#">Catégorie 1</a>
        </button>
        &nbsp;&nbsp;
        <button type="button" class="btn">
          <a href="#">Catégorie 2</a>
        </button>
        &nbsp;&nbsp;
        <button type="button" class="btn">
          <a href="#">Catégorie 3</a>
        </button>
        <div class="input-group mt-3">
          <input
            type="text"
            class="form-control"
            placeholder="Rechercher"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
        </div>
      </div>
      <div className="App">
      <div className="container">
        <div className="row">
          {posts.slice(pagination.start, pagination.end).map((post) => (
            <div className="col-md-3 mb-3" key={post.id}>
              <div className="card" >
              <img src="log.jpg" className="card-img-top" alt="ma description"/>
                <div className="card-body btn btn-secondary">
                  <h5 className="text-info">
                    {post.title}
                  </h5>
                  <p className="fw-bold" >{post.body}</p>
                 <p>{post.url}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={posts.length}
        />
      </div>
    </div>

      <Footer />
    </div>
  );
};

export default FaireDemande;
