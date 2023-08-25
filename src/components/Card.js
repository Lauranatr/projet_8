import React from 'react';
import data from '../data/data.json';


const Card = () => {


    return (
        <div className='containerCards'>
            
            <div className='cards'>
                {data.map((location, index) =>(  
                    <article>
                        <img src={location.cover}
                        alt={location.title} />
                        <h2>{location.title}</h2>
                    </article>  
                ))}
            </div>
        </div>
    );
};

export default Card;