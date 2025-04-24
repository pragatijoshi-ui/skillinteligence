import React, { useEffect } from 'react';
import Accordion from '../accordion/accordion';
import Footer from '../footer/footer';
import Herobanner from '../herobanner/herobanner'
import Visionmission from '../visionmission/visionmission';
import BentoContentLayout from '../services/services';
import Heading from '../heading/heading';
import Feature from '../feature/feature';
import OurClients from '../ourclients/ourclients';
import ContactForm from '../getintouch/getintouch';
function Index() {

  return (
    <div>
      <Herobanner/>
      <Visionmission/>
      <Heading heading="Our Services"/>
      <BentoContentLayout/>
      <Heading heading="Our Features"/>
      <Feature/>
      <Heading heading="Our Clients"/>
      <OurClients/>
      <Heading heading="FAQs"/>
      <Accordion/>
      <Heading heading="Get In Touch"/>
      <ContactForm/>
      {/* <Educatorweoffers/>
      <Technology/>
      <WeOffer/>
      <OurProjects/>
      <IntelligenceEducator/> */}
      <div className="mt-40">
      <Footer/>
      </div>
    </div>
  );
}

export default Index;
