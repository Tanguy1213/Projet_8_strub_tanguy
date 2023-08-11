import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./error.scss";

function Error() {
  return (
    <div>
      <Header />
      <div className="notFound-container">
        <h2>404</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
