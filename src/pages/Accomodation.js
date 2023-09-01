import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import Error from "./Error"
import SlideShow from "../components/Slideshow";

import starActive from "../assets/star-active.png"
import starInactive from "../assets/star-inactive.png"

const Accomodation = () => {

    const params = useParams();
    const id = params.id;
    const selectedItem = data.find((item) => item.id === id);

    if (selectedItem) {

        const { pictures, title, location, host, tags, rating, description, equipments } = selectedItem
    
        const numberStars = parseInt(data.rating);
        const stars = [];
  
        for (let i = 0; i < numberStars; i++) {
            stars.push(
            <img src={starActive} alt="notation" key={i} className="" />
            );
        }

    if (!data) {

        return <Error />;

      } else {

        return (
            <section className="accomodation-container">
            {/* <SlideShow images={pictures} /> */}
            <div className="container">
                    <div className="titleLocation">
                        <div>
                            <h1>{title}</h1>
                            <p>{location}</p>
                        </div>
            </div>
            </div>

            </section>
    );
    }}};

export default Accomodation;