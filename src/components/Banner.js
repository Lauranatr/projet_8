import React from 'react';
import homebanner from '../assets/homebanner.png'

const Banner = () => {
    return (
        <div className='homeBanner'>
            <img src={homebanner} alt="banner" />
                <div className='opacityBanner'></div>
                    <div className='textBanner'>
                        <h1>Chez vous, partout et ailleurs</h1>
                    </div>
                
                </div>
    );
};

export default Banner;