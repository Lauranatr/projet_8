import React, {useState} from 'react';
import arrowUp from "../../assets/dropup.svg";
import arrowDown from "../../assets/dropdown.svg";
import "./Collapse.scss"

const Collapse = () => {

    const[selected, setSelected] = useState(null)
    
    const toggle = i => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }
    
    return (
        <div className='wrapper'>
                    <div className='accordion'>

                        {aboutData.map((item, i ) => (
                            <div className='item'>

                                <div 
                                className='title' onClick={() => toggle(i)}>
                                    <h2>{item.titre}</h2>
                                    <img src={selected === i ? arrowUp : arrowDown} alt={selected === i ? "fermer" : "ouvrir"}/>
                                </div>

                                <div 
                                className={selected === i ? 'content show' : 'content'}>
                                    <div className='inner'>
                                        {item.contenu}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
    );
};

const aboutData = [
    {
        titre: 'Flexibilité', 
        contenu: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
    },
    {
        titre: 'Respect', 
        contenu: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    },
    {
        titre: 'Service', 
        contenu: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    },
    {
        titre: 'Sécurité', 
        contenu: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l hôte qu au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
    },
]

export default Collapse;