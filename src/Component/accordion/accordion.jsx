import React, { useState } from 'react';
// import '../../App.scss'
// import './accordion.scss';
import FAQImage from '../../images/FAQ-image.png'

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className='section-accordion'>
            <div className='container'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-12 col-md-6'>
                        <div className='faq-image-div'>
                            <img data-aos="fade-right" data-aos-duration="2000" className='faq-image' src={FAQImage} alt="" />
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className="accordion" data-aos="fade-left" data-aos-duration="2000">
                            {[...Array(4)].map((_, index) => (
                                <div key={index} className={`accordion-item p-16 mb-12 ${activeIndex === index ? 'active' : ''}`}>

                                    <div
                                        className="accordion-header font-18 d-flex justify-content-between be-vietnam-pro-medium"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <span>Accordion Item {index + 1}</span>
                                        <span className="icon">
                                            {activeIndex === index ? '−' : '+'}
                                        </span>
                                    </div>
                                    {activeIndex === index && (
                                        <div className="accordion-body p-10">
                                            <p className='be-vietnam-pro-regular font-16 mb-48'>This is the content for Accordion Item {index + 1}.</p>
                                            <div className='accordion-body-link p-24'><a href="#" className='font-16 be-vietnam-pro-medium text-black text-decoration-none'>This is the content for Accordion Item </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    );
};

export default Accordion;
