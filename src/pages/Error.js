import React from "react";

const Error = () => {
    document.title = "Kasa - Erreur 404";
    return (
      <div className="containerError">
        <div className="titleError">
          <h1>404</h1>
          <h2>
            Oups! La page que <span className="line-break"></span> vous demandez
            n'existe pas.
          </h2>
        </div>
        <a className="linkError" href="/">
          Retournez sur la page d'accueil
        </a>
      </div>
    );
  };
  
  export default Error;