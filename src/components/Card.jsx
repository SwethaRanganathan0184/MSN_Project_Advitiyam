// src/components/Card.jsx
import React from 'react';

function Card({ title, link, description, image }) {
  return (
    <div className="bg-black-100 p-4 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-800">
      {/* Image Section */}
      {image ? (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-40 object-cover rounded mb-4" 
        />
      ) : (
        <div className="bg-gray-300 h-40 w-full rounded mb-4"></div> // Placeholder if no image
      )}
      
      {/* Title and Description */}
      <a 
        href={link} 
        className="font-semibold text-orange-500 hover:text-yellow-500 hover:underline"
      >
        {title}
      </a>
      <p className="text-white text-sm">{description}</p>
    </div>
  );
}

export default Card;