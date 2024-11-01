// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header className="bg-black p-4 flex items-center justify-center relative" style={{ height: '100px' }}>
      {/* Header Logo Image */}
      <img
        src="/msn_logo_flat.png" // Make sure this image is in the `public` folder
        alt="M.S.NAATYAKSHETRA Logo"
        className="object-contain"
        style={{
          maxHeight: '150%', // Adjusts image height relative to the header
          maxWidth: '100%', // Keeps image within header width
          zIndex: 1,
        }}
      />
    </header>
  );
}

export default Header;
