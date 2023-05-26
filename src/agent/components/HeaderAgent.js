import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/agent.css";
const HeaderAgent = () => {
  const [authAgent, setAuthAgent] = useState("");
  useEffect(() => {
    var authAgent = localStorage.getItem("loginAgent");
    setAuthAgent(authAgent);
  }, []);

  const LogOutAgent = () => {
    localStorage.removeItem("loginAgent");
    localStorage.removeItem("nomAgent");
    localStorage.removeItem("prenomAgent");
    localStorage.removeItem("emailAgent");
  };

  if (authAgent === null) {
    const leaveSession = document.getElementById("logOutBtnAgent");
    leaveSession.setAttribute("hidden", "");
  }

  return (
    <div>
      <div>
        <header>
          <div className="headerAg">
            <div class="container-md">
              <NavLink to="/agentlogin">
                <span className="logo">
                  <span className="redirect">
                    <img
                      src="https://label-debarras.fr/wp-content/themes/label//img/bgcontactform.png"
                      alt=""
                      width="45px"
                      height="29px"
                    />
                  </span>
                </span>
                <span className="nompltfrm">SAMADOC.SN</span>
              </NavLink>
              <span class="d-flex justify-content-end userName">
                <span id="logOutBtnAgent">
                  <span class="leaveBtn2">
                    <FontAwesomeIcon icon={faCircleUser} />
                  </span>
                  {authAgent} |{" "}
                  <span class="leaveBtn1">
                    <Link
                      to="/agentlogin"
                      onClick={LogOutAgent}
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

export default HeaderAgent;
