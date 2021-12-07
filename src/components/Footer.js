import React from "react";
import gpt3Logo from '../assets/logo.png';
import './footer.css';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to have those things that seems so expensive</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Pick a payment plan</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="gpt3_logo" />
          <p>PHFELD 2021, <br /> All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>About</p>
          <p>Product</p>
          <p>Gallery</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>G 5b, 2nd Floor, The Shoppes Mall,</p>
          <p>Plot 7 Akinogun Road, Oniru New Market, </p>
          <p>Lekki Phase 1, Lagos</p>
          <p>07049632503, 08086777854</p>
          <p>phfeld@gmail.com, kennethsolomon5560@gmail.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>@2021 PHFELD. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
