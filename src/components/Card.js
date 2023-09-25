import React from "react";
import { Link } from "react-router-dom";
import data from "../data/data.json";

const Card = () => {
  return (
    <div className="containerCards">
      <div className="cards">
        {data.map((location, index) => (
          <Link to={"/logement/" + location.id} key={index + " " + location.id}>
            <article>
              <img src={location.cover} alt={location.title} />
              <h2>{location.title}</h2>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
