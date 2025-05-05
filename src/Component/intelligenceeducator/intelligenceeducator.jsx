import React from 'react';
import Button from '../button/button';
import Educatorcard2 from '../../images/educator-card2.png';
import Educatorcard1 from '../../images/educator-card1.png';
const IntelligenceEducator= () => {
    return(
        <section className='section-intelligence-educator'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-5'>
                        <div className='left-side-image-section'>
                            <ul className='image-section-nav'>
                                <li data-aos="zoom-in-right" data-aos-duration="2000" className='image-section-list bg-secondary-color educator-image1'>
                                    <img className='h-100 w-100' src={Educatorcard1} alt="" />
                                </li>
                                <li data-aos="zoom-in-down" data-aos-duration="2000" className='image-section-list bg-secondary-color educator-circle'></li>
                                <li data-aos="zoom-in-left" data-aos-duration="2000" className='image-section-list bg-secondary-color educator-image2'>
                                    <img className='h-100 w-100' src={Educatorcard2} alt="" />
                                </li>
                                <li data-aos="zoom-in-down" data-aos-duration="2000" className='image-section-list bg-secondary-color educator-rectangle'></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-12 col-md-7'>
                        <div className='right-side-content-section d-flex justify-content-start align-items-center text-start'>
                            <div className='d-block'>
                                <span data-aos="fade-left" data-aos-duration="2000" className='font-20 be-vietnam-pro-regular text-black'>Welcome To</span>
                                <h2 data-aos="fade-left" data-aos-duration="2000" className='text-black-secondry font-md-64 font-40 be-vietnam-pro-semibold mb-24'>INTELLIGENCE <br/>EDUCATOR</h2>
                                <p data-aos="fade-left" data-aos-duration="2000" className='font-20 text-black be-vietnam-pro-regular mb-48'>If you are looking for a way to expand your knowledge in the field of IT, Intelligence Educators is here to support you every step of the way..</p>
                                <Button label="Visit Site"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default IntelligenceEducator;
    ;