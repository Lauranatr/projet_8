import React, { useState } from "react";
import arrowUp from "../../assets/dropup.svg";
import arrowDown from "../../assets/dropdown.svg";

const Collapse = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="wrapper">
      <div className="item">
        <div className="title" onClick={() => setIsOpen(!isOpen)}>
          <h2>{props.titre}</h2>
          <img
            className="chevron"
            src={isOpen ? arrowUp : arrowDown}
            alt={isOpen ? "fermer" : "ouvrir"}
          />
        </div>

        <div className={isOpen ? "content show" : "content"}>
          <div className="inner">{props.contenu}</div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
