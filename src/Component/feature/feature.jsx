import React from 'react';
import Feature1 from '../../images/feature-icon1.svg';
import Feature2 from '../../images/feature-icon2.svg';
import Feature3 from '../../images/feature-icon3.svg';
import Feature4 from '../../images/feature-icon4.svg';
import Feature5 from '../../images/feature-icon5.svg';
import Feature6 from '../../images/feature-icon6.svg';

const Feature = () => {
  return (   
    <>    
    <section className='Feature-section section-medium-padding-T-B'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <div className='d-grid feature-inner-div'>
                        <div data-aos="fade-down-right" className='trading-section feature-section-bg d-flex flex-column justify-content-center align-items-center text-center d-flex flex-column justify-content-center align-items-center text-center'>
                            <img className='mb-12' src={Feature1} alt="" />
                            <p className='font-18 text-black be-vietnam-pro-semibold'>Robust trading infrastructure</p>
                        </div>
                        <div data-aos="zoom-in-down" className='blank-square-section feature-section-bg d-flex flex-column justify-content-center align-items-center text-center'></div>
                        <div data-aos="zoom-in-down" className='education-section feature-section-bg d-flex flex-column justify-content-center align-items-center text-center'>
                            <img className='mb-12' src={Feature2} alt="" />
                            <p className='font-18 text-black be-vietnam-pro-semibold'> Practical, hands-on education</p>
                        </div>
                        <div data-aos="fade-down-left" className='Innovation-section feature-section-bg d-flex flex-column justify-content-center align-items-center text-center'>
                            <img className='mb-12' src={Feature3} alt="" />
                            <p className='font-18 text-black be-vietnam-pro-semibold'>Innovation- driven Approach</p>
                        </div>
                        <div data-aos="fade-up-right" className='experties-section feature-section-bg d-flex flex-column justify-content-center align-items-center text-center'>
                            <img className='mb-12' src={Feature4} alt="" />
                            <p className='font-18 text-black be-vietnam-pro-semibold'>Synergy of expertise</p>
                        </div>
                        <div data-aos="zoom-in-up" className='brand-identity-section feature-section-bg d-flex flex-column justify-content-center align-items-center text-center'>
                            <img className='mb-12' src={Feature5} alt="" />
                            <p className='font-18 text-black be-vietnam-pro-semibold'>Unified Brand identity and Vision</p>
                        </div>
                        <div data-aos="zoom-in-up" className='blank-circle-section feature-section-bg d-flex flex-column justify-content-center align-items-center text-center'></div>
                        <div data-aos="fade-up-left" className='Comprehensive-section feature-section-bg d-flex flex-column justify-content-center align-items-center text-center'>
                            <img className='mb-12' src={Feature6} alt="" />
                            <p className='font-18 text-black be-vietnam-pro-semibold'>Comprehensive IT solutions</p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <div className='d-grid feature-inner-div'>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default Feature;
