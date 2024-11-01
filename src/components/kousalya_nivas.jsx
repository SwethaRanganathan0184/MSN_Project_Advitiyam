// src/pages/RT/AboutGuru.jsx
import React from 'react';
import guruImage from './Kousalya_Mam_desc_pic.jpg'; // Ensure this path is correct
import guruImage_bg from './bgImage_KNM.png';

function AboutGuru() {
  const awards = [
    "1.NRITYA RATNAM ,2024 from Sri paripoorna Sanathana charitable trust, Neela Mangala, Bengaluru.",

"2.ABINAYA CHOODAMANI,2023 from Sri Sri Yadugiri Yathiraja Narayana Ramanuja Jeeyar Swami,Malleshwaram,Bengaluru.",

"3.Vocational excellance National award ,2023 from International Institute for social reforms, Bengaluru",

"4.KALA RATNA,2022 at Nrityantara Festival at chowdaih memorial hall,Bengaluru.",

"5.NATYA KALA RATNA ,2022 from Guru.Smt.Revathy Muthuswamy,Srirangam Bharathanatyalaya ,Srirangam",
"6.MAHADEVAPURA RATNA TITLE, JAN 12, 2020 - by Honorable Mahadevapura Vidhana Sabha MLA, Ex-Minister of Higher Education & Health, Karnataka and BJP State General Secretary Shri Arvind Limbavali.",

"7.SOUTH INDIAN WOMEN ACHIEVER AWARD(SIWAA) 2019, ART & CULTURE - By Syrafills Media Ltd, Chennai for significantly contributing and achieving in the Art & Culture domain",

"8.NADAM KALABHOOSHAN TITLE, NOV 17, 2018 - by Shri.Dhananjayans and Smt. Shantha Dhananjayans for performing in International Classical Dance festival, Nrithyakalakeli, Dubai, UAE.",

"9.TRAINING EXCELLENCE AWARD, FEB 2018 - by Vagdevi Vilas Sangeetha Kala Mandira for providing excellent Bharatanatyam training for Kalamandira students.",

"10.BEST SUPPORTING ALUMNI AWARD, 2014 - by Sri Ramakrishna Engineering College Alumni Association for supporting Alumni events with various cultural activities.",

"11.BEST STUDENT AWARD, 2008 - by Indian Society of Technical Education (ISTE), Delhi for outstanding performance in academics and extra-curricular activities.",

"12.RAJINI AWARD, 2000 - by Smt. Latha Rajinikanth for winning State level Bharatanatyam Competition – Dayaa 2000",

"13.NATYA PEROLI, 1995 - by Kamban Kazhagam"

    // Add more awards as needed
  ];

  return (
    <div className="min-h-screen bg-black text-orange-500 flex flex-col justify-between">
      
      {/* Header Section */}
      <header 
        className="flex flex-col items-center justify-center py-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${guruImage_bg})`, backgroundPosition: 'center', backgroundSize: 'contain' }}
      >
        <div className="bg-black bg-opacity-0 p-4 rounded-md">
          <h1 className="text-6xl font-semibold mt-4 text-black font-serif">About the Guru</h1>
        </div>
      </header>

      {/* Content Section */}
      <section className="py-16 px-8" style={{ backgroundColor: '#222120', color: 'white' }}>
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src={guruImage} 
            alt="Guru Image" 
            style={{ width: '500px', height: '500px' }}
            className="mx-auto rounded-full object-cover mb-8"
          />

          {/* Paragraphs of content */}
          <p className="text-lg mb-6">
          Kousalya Nivas is the Guru and Artistic Director of M.S.Naatyakshetra in Bangalore. With a B.Tech in IT, an M.Tech in Computer Networks, and an MFA in Bharathanatyam, she combines her technical background with a deep dedication to dance. She has trained under acclaimed Bharathanatyam gurus, including Kalaimamani Smt. Revathy Muthuswamy and has taught over 300 students. As a performer, her journey started at age four, and she has graced 990 stages, showcasing her talent at various temples, cultural events, and prestigious festivals across India and internationally.
          </p>
          <p className="text-lg mb-6">
          Kousalya’s Bharathanatyam performances span from her early years in Trichy to events in Coimbatore and later, high-profile stages in Bangalore and beyond. Notable performances include Mysore Dasara, international festivals in Dubai, and cultural gatherings at prestigious venues like Ravindra Kalakshetra and ITC Hotel. Her versatility shines through roles taken up in traditional and contemporary performances, connecting with audiences in settings ranging from temple celebrations to international art festivals.
          </p>
          <p className="text-lg mb-6">
          Specializing in male roles from Puranic tales, Kousalya has portrayed iconic figures like Lord Muruga, Hanuman, Krishna, and Shiva, blending dance with acting techniques. She excels in choreography, scriptwriting, composing jathis, and designing dance drama props, making her productions dynamic and immersive. This range of skills enhances her productions, showcasing a blend of storytelling and artistic mastery that has made her a respected figure in the Bharathanatyam community.
          </p>

          {/* Awards list */}
          <h3 className="text-2xl font-bold mt-12 mb-4">Awards and Recognitions</h3>
          <ul className="list-disc list-inside text-lg space-y-2">
            {awards.map((award, index) => (
              <li key={index}>{award}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black py-4 text-center text-gray-400">
        
      </footer>
    </div>
  );
}

export default AboutGuru;
