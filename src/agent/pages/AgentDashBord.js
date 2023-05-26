import React, { useEffect, useState } from "react";
import HeaderAgent from "../components/HeaderAgent";
import FooterAgent from "../components/FooterAgent";
import { useNavigate } from "react-router-dom";
// import Logo from "../../../src/image.png";

const AgentDashBord = () => {
  let navigate5 = useNavigate();

  const [authAgent, setAuthAgent] = useState("");
  useEffect(() => {
    var authAgent = localStorage.getItem("loginAgent");
    setAuthAgent(authAgent);
  }, []);
  if (authAgent === null) {
    navigate5("/agentlogin");
  }
  return (
    <div>
      <div class="divloginAg">
      <HeaderAgent />
        <div class="container">Hey
        <br/>
          {/* <img src={Logo} width={300}/> */}
        </div>
        <div class="footAg">
          <FooterAgent />
        </div>
      </div>
    </div>
  );
};

export default AgentDashBord;
