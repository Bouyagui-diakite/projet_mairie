import React, { useEffect, useState } from "react";
import "../styles/adminConnexion.css";
import HeaderAdmin from "../components/HeaderAdmin";
import FooterAdmin from "../components/FooterAdmin";
import { useNavigate } from "react-router-dom";
const AdminDashBord = () => {
  let navigate4 = useNavigate();

  const [authAdmin, setAuthAdmin] = useState("");
  useEffect(() => {
    var authAdmin = localStorage.getItem("loginAdmin");
    setAuthAdmin(authAdmin);
  }, []);
  if (authAdmin === null) {
    navigate4("/adminlogin");
  }

  return (
    <div>
      <div class="divloginAD">
        <HeaderAdmin />
        <div class="footAdmin">
          <FooterAdmin />
        </div>
      </div>
    </div>
  );
};

export default AdminDashBord;
