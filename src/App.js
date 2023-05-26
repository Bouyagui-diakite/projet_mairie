import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import Inscription from "./pages/Inscription";
import Connexion from "./pages/Connexion";
import Notfound from "./pages/Notfound";
import ReccuperationMdp from "./pages/ReccuperationMdp";
import FaireDemande from "./pages/FaireDemande";
import AdminLogin from "./admin/pages/AdminLogin";
import RecupererMdpAdmin from "./admin/pages/RecupererMdpAdmin";
import AgentLogin from "./agent/pages/AgentLogin";
import RecupererMdpAgent from "./agent/pages/RecupererMdpAgent";
import AdminDashBord from "./admin/pages/AdminDashBord";
import Apropos from "./pages/Apropos";
import AgentDashBord from "./agent/pages/AgentDashBord";
import Pagination from "./pages/Pagination";
// import BulletinNaiss from "./pages/Documents/BulletinNaiss";
// import CertificatResi from "./pages/Documents/CertificatResi";
// import CertificatsNationalite from "./pages/Documents/CertificatsNationalite";
// import Legalisation from "./pages/Documents/Legalisation";
// import Passeport from "./pages/Documents/Passeport";
// import Casier from "./pages/Documents/Casier";
// import SaufConduit from "./pages/Documents/SaufConduit";
// import ActeMariage from "./pages/Documents/ActeMariage";
// import AutoristaionConstruct from "./pages/Documents/AutoristaionConstruct";
// import BulletinDeces from "./pages/Documents/BulletinDeces";
// import CertificatDocument from "./pages/Documents/CertificatDocument";
function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          {/* Liens Pages Demandeurs*/}

          <Route path="/" exact element={<Acceuil />} />
          <Route path="/demande" exact element={<FaireDemande />} />
          <Route path="/connexion" exact element={<Connexion />} />
          <Route path="/inscription" exact element={<Inscription />} />
          <Route path="/recuperation" exact element={<ReccuperationMdp />} />
          <Route path="/apropos" exact element={<Apropos />} />
          <Route path="/faq" exact element={""} />
           <Route path="/pagination" exact element= {<Pagination />} />

          {/* Liens Pages Admin*/}
          <Route path="/adminlogin" exact element={<AdminLogin />} />
          <Route
            path="/recuperationadmin"
            exact
            element={<RecupererMdpAdmin />}
          />
          <Route path="/dashboardadmin" exact element={<AdminDashBord />} />

          {/* Liens Pages Agents*/}
          <Route path="/agentlogin" exact element={<AgentLogin />} />
          <Route
            path="/recuperationagent"
            exact
            element={<RecupererMdpAgent />}
          />
          <Route path="/agentdashboard" exact element={<AgentDashBord />} />
         

          {/* Page d'erreur 404*/}
          <Route path="*" element={<Notfound />} />
          {/* liens pour les differnets types de documents */}
          {/* <Route path="/BulletinNaiss" exact element={<BulletinNaiss/>}/>
          <Route path="/CertificatResidence" exact element={<CertificatResi/>}/>
          <Route path="/Nationalite" exact element={<CertificatsNationalite/>}/>
          <Route path="/Legalisation" exact element={<Legalisation/>} />
          <Route path="/passeport" exact element={<Passeport/>} />
          <Route path="/Casier"  exact element={<Casier/>}/>
          <Route path="/SaufConduit" exact element ={<SaufConduit/>}/>
          <Route path="/ActeMariage" exact element={<ActeMariage/>}/>
          <Route path="/Autorisation" exact element={<AutoristaionConstruct/>}/>
          <Route path="Bulletin_deces" exact element={<BulletinDeces/>}/>
          <Route path="/Certificat" exact element={<CertificatDocument/>} /> */}
          <Route />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
