import React, { useState } from "react";
import Logo from "../Assets/Images/Logo.PNG";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Logo"/>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Products </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/login"> Login </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="../Pages/Home">Home</Link>
        <Link to="../Pages/Products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="../Pages/Login">Login</Link>
        <button onClick={toggleNavbar}></button>
      </div>
    </div>
  );
}

export default Navbar;
