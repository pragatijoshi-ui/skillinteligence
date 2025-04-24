import React, { useEffect } from 'react';
import Intelligenceherobanner from '../intelligenceherobanner/intelligenceherobanner';
import Heading from '../heading/heading';
import OurProjects from '../ourprojects/ourprojects';
import IntelligenceEducator from '../intelligenceeducator/intelligenceeducator';
import WeOffer from '../weoffers/weoffers';
import Educatorweoffers from '../educatorweoffers/educatorweoffers';
import Technology from '../technologywork/technologywork';
import Getintouch from '../getintouch/getintouch';
import Footer from '../footer/footer';

function Fusionintelligence() {

  return (
    <div>
      <Intelligenceherobanner/>      
      <Heading heading="We Offer"/> 
      <WeOffer/>
      <Heading heading="Technologies We Work On"/>
      <Technology/>
      <Heading heading="Our Top 3 Projects"/>
      <OurProjects/>
      <Heading heading="Get In Touch"/>
      <Getintouch/>
      <div className="mt-40">
      <Footer/>
      </div>
    </div>
  );
}

export default Fusionintelligence;
