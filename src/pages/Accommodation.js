import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data/data.json";
import SlideShow from "../components/Slideshow";
import Collapse from "../components/Collapse/Collapse";

import starActive from "../assets/star-active.png";
import starInactive from "../assets/star-inactive.png";

export default function Accommodation() {
  const params = useParams();
  const id = params.id;

  const navigate = useNavigate();

  const selectedItem = data.find((item) => item.id === id);

  // si aucun élément n'est trouvé, rediriger l'utilisateur
  useEffect(() => {
    if (!selectedItem) {
      navigate("*");
    }
  }, [selectedItem, navigate]);

  // Si un élément correspondant a été trouvé, afficher ses détails
  if (selectedItem) {
    const {
      pictures,
      title,
      location,
      host,
      tags,
      rating,
      description,
      equipments,
    } = selectedItem;

    //   La fonction parseInt en JavaScript est utilisée pour analyser (ou convertir)
    //  une chaîne de caractères en un entier (nombre entier)
    const ratingNumber = parseInt(rating);

    // Création des étoiles pour la notation
    const stars = Array.from({ length: 5 }, (_, index) => (
      <img
        key={index}
        src={index < ratingNumber ? starActive : starInactive}
        alt={index < ratingNumber ? "star" : "empty-star"}
      />
    ));

    return (
      <section className="accommodationContent">
        <SlideShow imagesList={pictures} />
        {/* Affichage du diaporama d'images */}

        <div className="titleLocationHostStars">
          <div className="titleLocation">
            <div>
              <h1>{title}</h1>
              <p>{location}</p>
            </div>
            <ul>
              {/* Affichage des tags de l'hébergement */}
              {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className="hostStars">
            <div className="host">
              <p>{host.name}</p>
              <img src={host.picture} alt={host.name} />
            </div>
            <div className="stars">{stars}</div>{" "}
            {/* Affichage des étoiles de notation */}
          </div>
        </div>
        <div className="accommodationCollapse">
          {/* Affichage descriptions et équipements */}
          <Collapse titre="Description" contenu={description} />
          <Collapse
            titre="Équipements"
            contenu={
              <ul>
                {equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </section>
    );
  }
}
