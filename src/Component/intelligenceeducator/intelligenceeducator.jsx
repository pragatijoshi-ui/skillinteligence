import React from 'react';
import './intelligenceeducator.scss';
import Button from '../button/button';

const IntelligenceEducator= () => {
    return(
        <section className='section-intelligence-educator'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-5'>
                        <div className='left-side-image-section'>
                            <ul className='image-section-nav'>
                                <li className='image-section-list bg-secondary-color educator-image1'></li>
                                <li className='image-section-list bg-secondary-color educator-circle'></li>
                                <li className='image-section-list bg-secondary-color educator-image2'></li>
                                <li className='image-section-list bg-secondary-color educator-rectangle'></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-12 col-md-7'>
                        <div className='right-side-content-section d-flex flex-column justify-content-center align-items-center'>
                            <span className='font-20 be-vietnam-pro-regular text-black'>Welcome To</span>
                            <h2 className='text-black-secondry font-64 be-vietnam-pro-semibold mb-24'>INTELLIGENCE <br/>EDUCATOR</h2>
                            <p className='font-20 text-black be-vietnam-pro-regular mb-48'>If you are looking for a way to expand your knowledge in the field of IT, Intelligence Educators is here to support you every step of the way..</p>
                            <Button label="Visit Site"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default IntelligenceEducator;
    ;