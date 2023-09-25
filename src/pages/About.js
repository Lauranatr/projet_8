import React from "react";
import Banner from "../components/Banner";

import Collapse from "../components/Collapse/Collapse";

const About = () => {
  const aboutData = [
    {
      titre: "Flexibilité",
      contenu:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      titre: "Respect",
      contenu:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      titre: "Service",
      contenu:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      titre: "Sécurité",
      contenu:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l hôte qu au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  const collapses = [];

  for (let i = 0; i < aboutData.length; i++) {
    const aboutDataElement = aboutData[i];
    collapses.push(
      <Collapse
        titre={aboutDataElement.titre}
        contenu={aboutDataElement.contenu}
      />
    );
  }

  return (
    <div>
      <Banner />
      {collapses}
    </div>
  );
};

export default About;
