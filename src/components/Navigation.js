import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink
            to={"/"}
            className={(nav) => (nav.isActive ? "nav-active" : null)}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/a-propos"
            className={(nav) => (nav.isActive ? "nav-active" : null)}
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
