import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Tribaloo is a thoughtfully curated e-commerce platform
           dedicated to celebrating the rich heritage of Northeast India. The website 
           brings together an array of traditional treasures from handwoven garments
            and indigenous foods to handcrafted accessories offering users a glimpse
             into the region’s vibrant culture and craftsmanship.
        </p>
        <p>
         Tribaloo aims to connect artisans and local creators with a wider audience, 
         making it easier for people to discover, appreciate, and support authentic 
         Northeastern products. Whether you're seeking unique clothing, traditional delicacies, 
         or soulful handmade crafts, Tribaloo is your gateway to the heart of the Northeast.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
