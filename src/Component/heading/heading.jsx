
import React from 'react';
// import './heading.scss';
import EllipseBM from '../../images/Ellipse-black-medi.svg';
import EllipseBS from '../../images/Ellipse-black-small.svg';
import EllipseLB from '../../images/Ellipse-light-big.svg';
import EllipseDB from '../../images/Ellipse-dark-big.svg';
import EllipseLM from '../../images/Ellipse-light-medi.svg';

const Heading = ({ heading }) => {
  return (
    <section className='section-heading section-larg-padding-T-B'>
      <div className='container'>
        <div className='row justify-content-center text-center'>
          <div className='col-12'>
            <div className="Heading position-relative">
              <div className='left-ellipse-icons-div'>
                <img data-aos="zoom-in" data-aos-duration="2000" className='left-EllipseDB rotate-slow delay-1' src={EllipseDB} alt="EllipseDB" />
                <img data-aos="zoom-in" data-aos-duration="2000" className='left-EllipseBS rotate-slow delay-2' src={EllipseBS} alt="EllipseBS" />
                <img data-aos="zoom-in" data-aos-duration="2000" className='left-EllipseLM rotate-slow delay-3' src={EllipseLM} alt="EllipseLM" />
              </div>
              <div data-aos="fade-up" data-aos-duration="2000" className='heading-text font-64 be-vietnam-pro-medium position-relative'>
                {heading}
              </div>
              <div className='right-ellipse-icons-div'>
                <img data-aos="zoom-in" data-aos-duration="2000" className='right-EllipseLM rotate-slow delay-4' src={EllipseLM} alt="EllipseLM" />
                <img data-aos="zoom-in" data-aos-duration="2000" className='right-EllipseBS rotate-slow delay-5' src={EllipseBS} alt="EllipseBS" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heading;
