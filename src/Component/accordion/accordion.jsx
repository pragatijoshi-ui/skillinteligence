import React, { useState } from 'react';
import '../../App.scss'
import './accordion.scss'

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className="accordion">
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="accordion-item p-16 mb-12">
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
                                        <p className='be-vietnam-pro-regular font-16 mb-0'>This is the content for Accordion Item {index + 1}.</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
