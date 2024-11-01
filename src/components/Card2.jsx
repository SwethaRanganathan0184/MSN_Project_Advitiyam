// Card2.jsx
import React from 'react';

function Card({ showBackgroundOnly, showOverlayOnly }) {
  return (
    <div
      style={{ width: '800px', height: '200px', position: 'relative' }}
      className="rounded-lg shadow-lg overflow-hidden flex items-center justify-center"
    >
      {/* Semi-Transparent Background Image */}
      {showBackgroundOnly && (
        <img
          src="https://via.placeholder.com/500x500/000000/FFFFFF?text="
          alt="Placeholder"
          className="w-full h-full object-cover"
          style={{
            opacity: 1, // 50% transparency for background image
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1, // Positioned behind the overlay image
          }}
        />
      )}

      {/* Fully Opaque Overlay Image */}
      {showOverlayOnly && (
        <img
          src="/Project_Advitiyam.png" // Ensure this is in the public folder and path is correct
          alt="Overlay"
          className="absolute w-[700px] h-[110px] object-cover"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2, // Positioned in front of the semi-transparent background
            opacity: 1, // Fully opaque
          }}
        />
      )}
    </div>
  );
}

export default Card;
