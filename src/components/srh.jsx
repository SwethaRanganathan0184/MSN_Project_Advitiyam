// src/pages/RT/srh.jsx
import React, { useState } from 'react';
import bgImage from './ShriRamaHanumantha_Header.png'; // Ensure this path is correct
import gallery1 from './srh_gallery_1.png';
import gallery2 from './srh_gallery_2.png';
import gallery3 from './srh_gallery_3.png';
import gallery4 from './srh_gallery_4.png';
import gallery5 from './srh_gallery_5.png';

// Modal component for displaying images
const ImageModal = ({ isOpen, image, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="relative">
        <img src={image} alt="Expanded view" className="max-w-full max-h-screen" />
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl">✕</button>
      </div>
    </div>
  );
};

// Modal component for displaying storyline
const StorylineModal = ({ isOpen, onClose, storyline }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-gray-800 p-6 rounded-lg max-w-3xl mx-auto text-white relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl">✕</button>
        <h3 className="text-2xl font-bold mb-2">STORY LINE</h3>
        <p className="text-lg">{storyline}</p>
      </div>
    </div>
  );
};

// Modal component for displaying music and choreography
const MusicChoreoModal = ({ isOpen, onClose, musicChoreo }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-gray-800 p-6 rounded-lg max-w-3xl mx-auto text-white relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl">✕</button>
        <h3 className="text-2xl font-bold mb-2">MUSIC AND CHOREO</h3>
        <p className="text-lg">{musicChoreo}</p>
      </div>
    </div>
  );
};

function RT() {
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [isStoryModalOpen, setStoryModalOpen] = useState(false); // State for storyline modal
  const [isMusicModalOpen, setMusicModalOpen] = useState(false); // State for music and choreography modal

  const storylineText = `The production begins with scenes of Bala Hanuman, followed by the story of Hanuman's great strength. The monkey clan, mistaking Rama and Lakshmana for Vali's spies, informs Sugreeva. Hanuman meets Rama, recognizes him, and brings him to Sugreeva. After learning about Sita's abduction, Hanuman is sent to find her. Overcoming obstacles, he reaches Lanka, comforts Sita, and sets the city on fire. He returns to Kishkinda and tells Rama about Sita's condition. They build a bridge to Lanka, and in battle, Hanuman saves Lakshmana. Rama defeats Ravana, reunites with Sita, and returns to Ayodhya, where Hanuman reveals Rama in his heart.`;

  const musicChoreoText = `The *sanchari* sequences and storyline of this production are choreographed based on the *Valmiki Ramayana*, with all characters drawn from the epic. The *jathis*, *thillana*, and songs have been thoughtfully crafted with guidance from my gurus and enriched by my own creative inputs. Every musical piece is intricately woven to complement the choreography, elevating the emotional depth and drama of the Ramayana. The music, composed by Shri Praveen D Rao, further enhances the storytelling. His compositions are deeply rooted in tradition, offering a profound connection to the stories they accompany. The production duration is 1 hour 15 mins and performed by 30 artists.`;

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setImageModalOpen(true);
  };

  const toggleStoryModal = () => {
    setStoryModalOpen((prev) => !prev); // Toggle the storyline modal
  };

  const toggleMusicModal = () => {
    setMusicModalOpen((prev) => !prev); // Toggle the music and choreography modal
  };

  return (
    <div className="min-h-screen bg-black text-orange-500">
      {/* Header Section */}
      <header 
        className="flex flex-col items-center justify-center py-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'center', backgroundSize: 'contain' }} 
      >
       <div className="bg-black bg-opacity-30 p-4 rounded-md">
          <h1 className="text-5xl font-semibold mt-4 text-white">Shri Rama Hanumantha</h1>
      </div>

      </header>

      {/* Content Section */}
      <section className="py-16 px-8" style={{ backgroundColor: '#222120', color: 'white' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          
          {/* STORY LINE Card */}
          <div 
            className="relative group bg-gray-800 p-6 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 transform hover:scale-105"
            onClick={toggleStoryModal} // Open the storyline modal on click
          >
            <h3 className="text-xl font-bold mb-2">STORY LINE</h3>
            <p className="text-sm">{storylineText}</p>
          </div>

          {/* MUSIC AND CHOREO Card */}
          <div 
            className="relative group bg-gray-800 p-6 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 transform hover:scale-105"
            onClick={toggleMusicModal} // Open the music and choreography modal on click
          >
            <h3 className="text-xl font-bold mb-2">MUSIC AND CHOREO</h3>
            <p className="text-sm">{musicChoreoText}</p>
          </div>

          {/* GALLERY Card */}
          <div className="relative group bg-gray-800 p-6 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 transform hover:scale-105">
            <h3 className="text-xl font-bold mb-2">GALLERY</h3>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <img 
                src={gallery1} 
                alt="Gallery 1" 
                className="rounded-md cursor-pointer" 
                onClick={() => handleImageClick(gallery1)} 
              />
              <img 
                src={gallery2} 
                alt="Gallery 2" 
                className="rounded-md cursor-pointer" 
                onClick={() => handleImageClick(gallery2)} 
              />

              <img 
                src={gallery3} 
                alt="Gallery 3" 
                className="rounded-md cursor-pointer" 
                onClick={() => handleImageClick(gallery3)} 
              />

             <img 
                src={gallery4} 
                alt="Gallery 4" 
                className="rounded-md cursor-pointer" 
                onClick={() => handleImageClick(gallery4)} 
              />

            <img 
                src={gallery5} 
                alt="Gallery 5" 
                className="rounded-md cursor-pointer" 
                onClick={() => handleImageClick(gallery5)} 
              />
              
              {/* Add more images as needed */}
            </div>
          </div>

        </div>
      </section>
      
      {/* Modal for expanded images */}
      <ImageModal isOpen={isImageModalOpen} image={currentImage} onClose={() => setImageModalOpen(false)} />
      {/* Modal for storyline */}
      <StorylineModal isOpen={isStoryModalOpen} onClose={toggleStoryModal} storyline={storylineText} />
      {/* Modal for music and choreography */}
      <MusicChoreoModal isOpen={isMusicModalOpen} onClose={toggleMusicModal} musicChoreo={musicChoreoText} />
    </div>
  );
}

export default RT;
