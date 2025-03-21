import React from 'react';
import './servicecard.scss'; // Import the SCSS file

const Card = ({ title, description, imageUrl, showTitle = true, showLink = true,showDescription= true }) => {
  return (
    <div className="card">
      <div className='image-div'>
        {imageUrl && <img src={imageUrl} alt="Card" className="card-image" />}
      </div>  
      <div className="card-content">
        {showTitle && (
          <h3 className="card-title font-24 text-black be-vietnam-pro-medium">{title}</h3>
        )}
        {showDescription && (
          <p className="card-description text-grey font-16 be-vietnam-pro-regular">{description}</p>
        )}
        {showLink && (
          <a href="#" className='know-more-link text-black font-14 be-vietnam-pro-medium'>Know More</a>
        )}
      </div>
    </div>
  );
};

export default Card;
