// Gallery.js
import React, { useEffect, useState } from 'react';
import Card from './Card2';


function Gallery() {
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  useEffect(() => {
    // Trigger both transitions simultaneously after a delay
    const timer = setTimeout(() => {
      setIsBackgroundVisible(true);
      setIsOverlayVisible(true);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={{ backgroundImage: `url('/MSN_WEB_NOTRANSPARENT.png')` }} className="bg-cover bg-center h-[720px] flex items-center justify-center">
      {/* Semi-Transparent Background Container */}
      <div
        className={`transition-opacity duration-1000 ${
          isBackgroundVisible ? 'opacity-70' : 'opacity-0'
        }`}
        style={{
          position: 'absolute',
          width: '700px',
          height: '200px',
        }}
      >
        <Card showBackgroundOnly={true} />
      </div>

      {/* Overlay Image Container */}
      <div
        className={`transition-opacity duration-1000 ${
          isOverlayVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          position: 'absolute',
          width: '700px',
          height: '200px',
        }}
      >
        <Card showOverlayOnly={true} />
      </div>
    </section>
  );
}

export default Gallery;
