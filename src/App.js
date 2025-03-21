import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Accordion from './Component/accordion/accordion';
import Header from './Component/header/header'
import Footer from './Component/footer/footer'
import Servicecard from './Component/servicecard/servicecard'
import SimpleSlider from './Component/singleslider/singleslider';
import MultipleItemsSlider from './Component/feature/feature';
import Content from './Component/content/content';
import AboutUs from './Component/imagetext/imagetext'
import Herobanner from './Component/herobanner/herobanner'

function App() {
  return (
    <div>
      <Header/>
      <Herobanner/>
      <section className="section-larg-padding-T-B">
      <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <div>
            <AboutUs/>
          </div>
        </div>
        <div className="col-12 col-md-6 mt-62">
          <div className="d-flex align-items-center">
            <div className="aboutus-inner">
            <Content heading="Welcome to SIW , where we believe in Transforming Ideas into IT Realities" description="We are a dynamic group dedicated to empowering individuals and businesses through our complete range of services in IT, trading, and education." />
            <Content description="At Skill Intelligence World, we believe in pushing the boundaries of technology to achieve greater heights and capabilities to create opportunities and drive success. Our vision is to Transform Tech Challenges into Victories."/>
            <button className="bg-secondary-color p-12 border-0 mt-20 text-white font-16 be-vietnam-pro-regular">Know More</button>
            </div>
          </div>
        </div>
      </div>
    
    </div>
      </section>
      <div className="container section-larg-padding-T-B">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-8">
          <Content heading="our services make us" description="We are a dynamic group dedicated to empowering individuals and businesses through our complete range of services in IT, trading, and education." />
          </div>
        </div>
      </div>
      <Servicecard/>
      <div className="container section-larg-padding-T-B">
        <div className="row">
          <div className="col-12 col-md-4">
          <Content heading="Your Thought with my answere" description="We are a dynamic group dedicated to empowering individuals and businesses through our complete range of services in IT, trading, and education." />
          </div>
          <div className="col-12 col-md-8">
          <Accordion/>
          </div>
        </div>
      </div>
      <div className="simpleslider section-medium-padding-T-B">
        <SimpleSlider/>
      </div>
      <div className="section-medium-padding-T-B">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-8">
          <Content heading="our services make us" description="We are a dynamic group dedicated to empowering individuals and businesses through our complete range of services in IT, trading, and education." />
          </div>
        </div>
      </div>
        <MultipleItemsSlider/>
      </div>
      <div className="mt-40">
      <Footer/>
      </div>
    </div>
  );
}

export default App;
