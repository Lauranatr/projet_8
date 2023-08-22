import React from 'react';
import data from '../data/data.json';
import { Link } from 'react-router-dom';


const Card = () => {
    return (
        <div className='containerCards'>
            <div className='cards'>
                {data.map((location, index) =>(
                    <Link to={"/logements/" + location.id} key={index + " " + location.id}>

                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Card;