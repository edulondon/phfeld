import React from 'react';
import people from '../assets/people.png';
import ai from '../assets/ai.png';
import './banner.css';

const Banner = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text"> PHFELD help&apos;s you achieve your dream</h1>
      <p>The concept of purchasing items in installments is familiar to most people. Rather than paying for the item in full, you pay a little amount over a period of time, usually several months or even years. Most people usually buy their appliances, furniture and even real estate in this manner. This helps you to own that nice piece of item that you want without having to break the bank. Here are a few benefits of series payments.</p>

      {/* <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div> */}

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p> over 1,000 people are already enjoying our services</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Banner;
