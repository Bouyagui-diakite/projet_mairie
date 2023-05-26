import React from "react";
import Header from "../components/Header";
const Notfound = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          textAlign: "center",
          fontSize: "50px",
          marginLeft: "50%",
          width: "100%",
          transform: "translateX(-50%)",
          height: "80vh",
          background: "white",
          fontWeight: "bold",
        }}
      >
        <div style={{ paddingTop: "50px" }}>
          Erreur: 404
          <br />
          Page Introuvable !
          <br />
          <img
            src="https://img.freepik.com/free-vector/isometric-error-lost-404-page-network-user-people-concept-lost-network-website-page-error-available-webpage-vector-illustration-found-404-internet-page_229548-1969.jpg"
            //src="https://i.pinimg.com/originals/a8/12/1a/a8121abee959e18cbad25ad4046f76d8.gif"
            width={"45%"}
          />
        </div>
      </div>
    </div>
  );
};

export default Notfound;
