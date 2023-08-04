import React from 'react';
import photo3 from "./photo3.jpg";
import './Banner.css';

const Banner = () => {
  return (
    <>
      <div className="banner-card">
        <img style={{ width: '100%', height: '10%' }} src={photo3} alt="Banner" />
        <div className="banner-text">
          <h1>Veggie Vibes</h1>
        </div>
        <div className="banner-para">
          <p>Fresh Veggies, Vibrant Life! <br />Welcome to VeggieVibe – Your Green Delight!<br /> Explore Nature's Best, Taste the Joy,<br /> Shop Now, and Savor the Bright!</p>
        </div>
        <div className="banner-para1">
          <p>"Fresh, Flavorful Veggies <br />Delivered to Your Doorstep<br />Discover the Vibrant World of<br /> VeggieVibe Today!"</p>
        </div>
        <div className="banner-para2">
          <button className="button-33" role="button">SHOP MORE WITH US</button>
        </div>
      </div>
    </>
  );
};

export default Banner;
