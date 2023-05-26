import React from "react";
import "../styles/Etape.css";
const Etape1 = ({ formData, setFormData }) => {
  return (
    <div>
      <h1 class="titreEtape">Informations Personnelles:</h1>
      {/* <div style={{ textAlign: "center" }}>
        <span
          id="errorStep1"
          style={{
            display: "none",
            fontSize: 20,
            background: "red",
            padding: 5,
            borderRadius: 5,
          }}
        >
          Bonjour
        </span>
      </div> */}
      <div class="fistinform">
        <div class="form">
          <input
            type="text"
            id="nom"
            name="nom"
            class="form__input"
            autoComplete="off"
            placeholder=" "
            value={formData.nom}
            onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
          />
          <label for="login" class="form__label">
            Nom:
          </label>
        </div>
        <div class="form">
          <input
            type="text"
            id="prenom"
            name="prenom"
            class="form__input"
            autoComplete="off"
            placeholder=" "
            value={formData.prenom}
            onChange={(e) =>
              setFormData({ ...formData, prenom: e.target.value })
            }
          />
          <label for="password" class="form__label">
            Prénom:
          </label>
        </div>
        <div class="form">
          <input
            type="date"
            id="date"
            name="date"
            class="form__input"
            autoComplete="off"
            placeholder=" "
            value={formData.datenaiss}
            onChange={(e) =>
              setFormData({ ...formData, datenaiss: e.target.value })
            }
          />
          <label for="password" class="form__label">
            Date naissance:
          </label>
        </div>
      </div>
    </div>
  );
};

export default Etape1;
