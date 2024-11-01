import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Gallery from './components/Gallery';
import ContentSection from './components/ContentSection'; // This will only be used in the home route
import Footer from './components/Footer';
import RT from './components/rt'; // Ensure this path is correct
import SRH from './components/srh';
import ML from './components/ml';
import SJ from './components/shiv';
import TP from './components/thiru';
import KN from './components/kousalya_nivas';



function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<><Gallery /><ContentSection /></>} /> {/* Home route with both Gallery and ContentSection */}
          <Route path="/RamapriyaTulsidas" element={<RT />} /> {/* Route to RT component */}
          <Route path="/ShriRamaHanumantha" element={<SRH />} /> {/* Route to RT component */}
          <Route path="/MukundaLeela" element={<ML />} /> {/* Route to RT component */}
          <Route path="/Shivom" element={<SJ />} /> {/* Route to RT component */}
          <Route path="/Thiru" element={<TP />} /> {/* Route to RT component */}
          <Route path="/KNM" element={<KN />} /> {/* Route to RT component */}
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
