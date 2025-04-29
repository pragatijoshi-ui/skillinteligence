import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './Component/Home/index';
import Fusionintelligence from './Component/Fusion/Fusionintelligence'
import './styles/main.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
function App(){
    useEffect(() => {
      AOS.init({
        duration: 1000, // duration of animation in ms
        once: false,
    mirror: true,
      });
      AOS.refresh();
    }, []);
    return(
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Fusionintelligence" element={<Fusionintelligence />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    );
}
export default App;
