import React, {useState} from 'react';
import arrowUp from "../../assets/dropup.svg";
import arrowDown from "../../assets/dropdown.svg";
import "./Collapse.scss"

const Collapse = (props) => {


    const[isOpen, setIsOpen] = useState(false)
    

    
    return (
        <div className='wrapper'>
                    <div className='accordion'>

                        {/* {aboutData.map((item, i ) => ( */}
                            <div className='item'>

                                <div 
                                className='title' onClick={() => setIsOpen(!isOpen)}>
                                    <h2>{props.titre}</h2>
                                    <img src={isOpen ? arrowUp : arrowDown} alt={isOpen ? "fermer" : "ouvrir"}/>
                                </div>

                                <div 
                                className={isOpen? 'content show' : 'content'}>
                                    <div className='inner'>
                                        {props.contenu}
                                    </div>
                                </div>
                            </div>
                        {/* ))} */}
                    </div>
                </div>
    );
};



export default Collapse;