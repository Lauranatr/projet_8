import React from 'react';
import footerLogo from "../assets/footerLogo.svg";

const Footer = () => {
    return (
        
            <footer className="footer">
      <img className="footer-img" src={footerLogo} alt="logo Kasa" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
        
    );
};

export default Footer;