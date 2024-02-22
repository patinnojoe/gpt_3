import React from 'react';
import './footer.css';
import { logoSVG } from '../../assets';
function Footer() {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logoSVG} alt="gpt3__logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Terms & conditions</h4>
          <p>Privacy policy</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <p>ph-lamba-22 Nigeria</p>
          <p>+12 -586 00</p>
          <p>info@gmail.com</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>&copy; All right reserved - Patrick</p>
      </div>
    </div>
  );
}

export default Footer;
