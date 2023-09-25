import React, { useState } from "react";
import PropTypes from "prop-types";
import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";

export default function Slideshow({ imagesList }) {
  // Indice de l'image actuelle
  const [currentIndex, setCurrentIndex] = useState(0);

  // Récupération de l'image en fonction de l'indice
  const currentImage = imagesList[currentIndex];

  const slideLeft = () => {
    // Si l'indice actuel est 0, passe à la dernière image, sinon diminue l'indice
    setCurrentIndex(
      currentIndex === 0 ? imagesList.length - 1 : currentIndex - 1
    );
  };

  const slideRight = () => {
    // Si l'indice actuel est le dernier, passe à la première image, sinon augmente l'indice
    setCurrentIndex(
      currentIndex === imagesList.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="descriptionAccommodation">
      <img src={currentImage} alt="Logement" className="imageAccommodation" />

      {/* Si le diaporama contient plus d'une image, affiche les flèches de navigation */}
      {imagesList.length === 1 ? null : (
        <div>
          <img onClick={() => slideLeft()} src={arrowLeft} alt="Précédente" />
          {/* Affiche le numéro de l'image actuelle par rapport au nombre total d'images */}
          <p>
            {currentIndex + 1}/{imagesList.length}
          </p>

          <img onClick={() => slideRight()} src={arrowRight} alt="Suivante" />
        </div>
      )}
    </div>
  );
}

Slideshow.propTypes = {
  imagesList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
