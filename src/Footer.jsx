import React from "react";
import heart_icon_path from './assets/images/heart.svg'

function Footer() {
    return (    
    <footer className="footer">
        <span className="footer__text"> from
        <a className="footer__link" href="https://binary-studio.com"> binary studio</a> with
        <img className="footer__icon" src={heart_icon_path} alt="heart icon" />
        </span>
    </footer>
    );
}

export default Footer;