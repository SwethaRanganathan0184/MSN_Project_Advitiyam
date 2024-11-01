// src/components/ContentSection.jsx
import React from 'react';
import Card from './Card';

function ContentSection() {
  return (
    <section className="py-8 px-4" style={{ backgroundColor: '#222222' }}>
      {/* Adjust the div width to match the grid width */}
      <div className="max-w-screen-lg mx-auto text-center mb-8">
        
        <img 
            src="/One Dance, Infinite Stories.png" // Replace with your actual image path
            alt="One Dance, Infinite Stories" 
            className="w-auto h-100 mx-auto mb-6" // Adjust class names for size and positioning
        />

        {/* About Section */}
        <div className="max-w-screen-lg mx-auto text-white text-center px-6">
          <p className="mb-4" style={{ fontSize: '21px',fontFamily:'Times New Roman'}}>
          Project Advitiyam, a creative initiative by Guru. Kousalya Nivas where classical dance meets timeless storytelling. Our vision is to captivate audiences by bringing to life stories from our rich cultural heritage through the graceful art of dance. With an emphasis on reconnecting people to their roots, we aim to bridge the gap between tradition and modernity by making classical narratives accessible and engaging for everyone, especially in the heart of rural India.
<br></br>
<br></br>
Through our productions, we weave intricate tales of devotion, valour, and spirituality, offering audiences a truly unique and unparalleled storytelling experience. In addition, we conduct workshops focused on nurturing acting and dance skills, aiming to spread knowledge and ignite interest in the younger generations.
<br></br>
<br></br>
At Project Advitiyam, our mission is to use the universal language of dance to touch hearts and leave a lasting impact on communities, one performance at a time. Join us as we embark on a journey of "One Dance, Infinite Stories."

          </p>
          {/* Additional paragraphs can be added here */}
        </div>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-screen-lg mx-auto">
        <Card
          title="Ramapriya Tulasidasa"
          link="/RamapriyaTulsidas"
          description="A Classical take on the great Hanuman Chalisa"
          image="/Ramapriya_Tulsidasa.png" 
          customClass="w-1/4"
        />
        <Card
          title="Shri Rama Hanumantha"
          link="/ShriRamaHanumantha"
          description="A Mega Production depicting the Sundarakaandam "
          image="/Shri_Rama_Hanumantha.png" 
          customClass="w-1/4"
        />
        <Card
          title="Mukunda Leela"
          link="/MukundaLeela"
          description="A Mega Production on the life & pastimes of Lord Krishna"
          image="/Mukunda_Leela_3.png"  
          customClass="w-1/4"
        />
        <Card
          title="Shivom Jagathkaarana"
          link="/Shivom"
          description="A One Hour Production dedicated to Lord Shiva"
          image="/Shivom_Jagathkarana.png"
          customClass="w-1/4 ml-20" 
        />
        <Card
          title="Thiruppavai"
          link="/Thiru"
          description="A Solo Thematic Production centered around the Pasurams of Thiruppavai"
          image="/Thiruppavai.png"
          customClass="w-1/4 mr-20" 
        />
        <Card
          title="About the Choreographer"
          link="/KNM"
          description="Kousalya Nivas - Guru & Artistic Director, M.S.Naatyakshetra"
          image="/Kousalya_Nivas_2.png"
          customClass="w-1/4 mr-20" 
        />
      </div>
    </section>
  );
}

export default ContentSection;

