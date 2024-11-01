// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 " style={{ backgroundColor: 'black' }}>
      
      <div className="max-w-screen-lg mx-auto grid grid-cols-2 gap-4 text-sm flex space-x-48">
      
        <div>
          <h4 className="font-semibold mb-2">Smt.Kousalya Nivas - Guru & Artistic Director, 
            <br>
            </br>M.S.Naatyakshetra</h4>
          <ul>
            <li>Phone Number - 9663680808</li>
            <li>E-mail - name@gmail.com</li>
            
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Shri. Nivas Venkataramanan - Chairman, M.S.Naatyakshetra </h4>
          <ul>
            <li>Phone Number - 9632233226</li>
            <li>Email - name@gmail.com</li>
          </ul>
        </div>
        
      </div>
      <div className="bg-black py-4 text-center text-gray-400">
        <p>© 2023 M.S.Naatyakshetra. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
