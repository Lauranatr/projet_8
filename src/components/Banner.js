import React from "react";
import homebanner from "../assets/homeBanner.png";
import aboutbanner from "../assets/aboutBanner.png";
import { useLocation } from "react-router";

const Banner = () => {
  let location = useLocation();

  return (
    <div className="homeBanner">
      <img
        src={location.pathname === "/a-propos" ? aboutbanner : homebanner}
        alt="banner"
      />
      <div className="opacityBanner"></div>
      {location.pathname === "/" ? (
        <div className="textBanner">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      ) : null}
    </div>
  );
};

export default Banner;
