// src/pages/RT/RT.jsx
import React, { useState } from 'react';
import bgImage from './bgImage.png'; // Ensure this path is correct
import gallery1 from './gallery1.png';
import gallery2 from './gallery2.png';
import gallery3 from './rt_gallery_1.png';
import gallery4 from './rt_gallery_2.png';
import gallery5 from './rt_gallery_3.png';
import gallery6 from './rt_gallery_4.png';
import gallery7 from './rt_gallery_5.png';
import gallery8 from './rt_gallery_6.png';
import gallery9 from './rt_gallery_7.png';
import gallery10 from './rt_gallery_8.png';

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

  const storylineText = `The storyline of this production weaves together the great tales of Rama, beginning with the Shree Ramachandra Kripalu krithis, highlighting the devotion of Tulsidas. It then transitions into the Hanuman Chalisa, where Tulsidas is imprisoned by Emperor Akbar. The production continues with the recitation of the Hanuman Chalisa, depicting key stories from the Ramayana, including Hanuman’s journey to Lanka and the battles fought by Rama and his allies. The production concludes with a divine moment when Tulsidas, having chanted the Hanuman Chalisa, is blessed with a vision of Lord Rama, bringing the narrative full circle.`;

  const musicChoreoText = `This 45-minute Bharatanatyam production, performed by 15 artists, showcases the devotional spirit of the Hanuman Chalisa, with music composed by Shri Praveen D Rao. The Chalisa is explored in depth, using expressive sancharis to bring out its spiritual meaning, while intense jathis highlight the technical prowess of the dancers. The intricate choreography, combined with the emotional depth of the verses, has made this production a profound experience for audiences. Its unique approach has garnered widespread appreciation, resonating deeply with viewers and leaving a lasting impact.`;

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
          <h1 className="text-5xl font-semibold mt-4 text-white">Ramapriya Tulasidasa</h1>
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
              <img 
                src={gallery7} 
                alt="Gallery 7" 
                className="rounded-md cursor-pointer" 
                onClick={() => handleImageClick(gallery7)} 
              />
              <img 
                src={gallery6} 
                alt="Gallery 6" 
                className="rounded-md cursor-pointer" 
                onClick={() => handleImageClick(gallery6)} 
              />
              <img 
                src={gallery10} 
                alt="Gallery 10" 
                className="rounded-md cursor-pointer" 
                onClick={() => handleImageClick(gallery10)} 
              />
              
              <img 
                src={gallery9} 
                alt="Gallery 9" 
                className="rounded-md cursor-pointer" 
                onClick={() => handleImageClick(gallery9)} 
              />
              <img 
                src={gallery8} 
                alt="Gallery 8" 
                className="rounded-md cursor-pointer" 
                onClick={() => handleImageClick(gallery8)} 
              />
              
              <img 
                src={gallery10} 
                alt="Gallery 10" 
                className="rounded-md cursor-pointer" 
                onClick={() => handleImageClick(gallery10)} 
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
