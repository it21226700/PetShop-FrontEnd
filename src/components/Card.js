// src/components/Card.js
import React, { useState } from 'react';

const Card = ({ title, image, text, details }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card" style={{ width: '18rem', margin: '1rem' }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <button onClick={handleToggleDetails} className="btn btn-primary">
          {showDetails ? 'Hide Details' : 'More Details'}
        </button>

        {showDetails && (
          <div className="mt-3">
            <p><strong>Details:</strong> {details}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
