import React from "react";
import "../styles/Etape.css";
const Etape3 = ({ formData, setFormData }) => {
  return (
    <div>
      <h1 class="titreEtape">Informations de connexion:</h1>
      <div class="fistinform">
        <div class="form">
          <input
            type="text"
            id="login"
            name="login"
            class="form__input"
            autoComplete="off"
            placeholder=" "
            value={formData.login}
            onChange={(e) =>
              setFormData({ ...formData, login: e.target.value })
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
            value={formData.mdp}
            onChange={(e) => setFormData({ ...formData, mdp: e.target.value })}
          />
          <label for="password" class="form__label">
            Mot de passe:
          </label>
        </div>
        <div class="form">
          <input
            type="password"
            id="confpassword"
            name="confpassword"
            class="form__input"
            autoComplete="off"
            placeholder=" "
            value={formData.confirm}
            onChange={(e) =>
              setFormData({ ...formData, confirm: e.target.value })
            }
          />
          <label for="confpassword" class="form__label">
            Confirmé le mot de passe:
          </label>
        </div>
      </div>
    </div>
  );
};

export default Etape3;
