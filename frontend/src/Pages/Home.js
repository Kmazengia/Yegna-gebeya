import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1> Yegna Gebeya </h1>
        <p> Shop Smart Shop Easy!</p>
        <Link to="/menu">
          <button> Purchase Now </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
