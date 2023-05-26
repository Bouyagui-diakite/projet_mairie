import "../styles/adminConnexion.css";
import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
const HeaderAdmin = () => {
  const [authAdmin, setAuthAdmin] = useState("");
  useEffect(() => {
    var authAdmin = localStorage.getItem("loginAdmin");
    setAuthAdmin(authAdmin);
  }, []);

  const LogOutAdmin = () => {
    localStorage.removeItem("loginAdmin");
    localStorage.removeItem("nomAdmin");
    localStorage.removeItem("prenomAdmin");
    localStorage.removeItem("emailAdmin");
  };

  if (authAdmin === null) {
    const leaveSession = document.getElementById("logOutBtnAdmin");
    leaveSession.setAttribute("hidden", "");
  }

  return (
    <div>
      <div>
        <header>
          <div className="headerAdmin">
            <div class="container-md">
              <NavLink to="/adminlogin">
                <span className="logo">
                  <a className="redirect">
                    <img
                      src="https://label-debarras.fr/wp-content/themes/label//img/bgcontactform.png"
                      alt=""
                      width="45px"
                      height="29px"
                    />
                  </a>
                </span>
                <span className="nompltfrm">SAMADOC.SN</span>
              </NavLink>
              <span class="d-flex justify-content-end userName">
                <span id="logOutBtnAdmin">
                  <span class="leaveBtn2">
                    <FontAwesomeIcon icon={faCircleUser} />
                  </span>
                  {authAdmin} |{" "}
                  <span class="leaveBtn1">
                    <Link
                      to="/adminlogin"
                      onClick={LogOutAdmin}
                      class="logOutBtn"
                    >
                      <FontAwesomeIcon icon={faRightFromBracket} />
                    </Link>
                  </span>
                </span>
              </span>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default HeaderAdmin;
