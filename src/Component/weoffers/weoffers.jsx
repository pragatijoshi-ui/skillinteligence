import React from 'react';
import Weoffer1 from '../../images/weoffer1.png';
import Weoffer2 from '../../images/weoffer2.png';
import Weoffer3 from '../../images/weoffer3.png';
import Weoffer4 from '../../images/weoffer4.png';
import Weoffer5 from '../../images/weoffer5.png';
import Weoffer6 from '../../images/weoffer6.png';
const WeOffer =()=>{
    return(
    <section className='section-weoffers section-medium-padding-T-B'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='weoffer-card-container'>
                        <ul className='card-nav'>
                            <li data-aos="zoom-in-down" data-aos-duration="1000"  className='card-list position-relative mb-36 text-center d-flex justify-content-center align-items-center'>
                                <div className='weoffer-card-body'>
                                    <div className='weoffer-icon-div d-flex justify-content-center align-itmes-center' data-aos="zoom-in-down" data-aos-duration="1500">
                                        <img data-aos="zoom-in-down" data-as-duration="2000"   className='weoffer-icon' src={Weoffer1} alt="Software Development" />
                                    </div>
                                    <p data-aos="fade-left" data-aos-duration="3000"   className='font-16 text-black be-vietnam-pro-regular mb-0'>Software Development</p>
                                </div>
                            </li>
                            <li data-aos="zoom-in-down" data-aos-duration="1000" className='card-list position-relative mb-36 text-center d-flex justify-content-center align-items-center'>
                                <div className='weoffer-card-body'>
                                    <div className='weoffer-icon-div d-flex justify-content-center align-itmes-center' data-aos="zoom-in-down" data-aos-duration="1500">
                                        <img data-aos="zoom-in-down" data-aos-duration="2000" className='weoffer-icon' src={Weoffer2} alt="Web App Development" />
                                    </div>
                                    <p data-aos="fade-left" data-aos-duration="3000" className='font-16 text-black be-vietnam-pro-regular mb-0'>Web App Development</p>
                                </div>
                            </li>
                            <li data-aos="zoom-in-down" data-aos-duration="1000" className='card-list position-relative mb-36 text-center d-flex justify-content-center align-items-center'>
                                <div className='weoffer-card-body'>
                                    <div className='weoffer-icon-div d-flex justify-content-center align-itmes-center' data-aos="zoom-in-down" data-aos-duration="1500">
                                        <img data-aos="zoom-in-down" data-aos-duration="2000" className='weoffer-icon' src={Weoffer3} alt="Mobile App Development" />
                                    </div>
                                    <p data-aos="fade-left" data-aos-duration="3000" className='font-16 text-black be-vietnam-pro-regular mb-0'>Mobile App Development</p>
                                </div>
                            </li>
                            <li data-aos="zoom-in-down" data-aos-duration="1000" className='card-list position-relative mb-36 text-center d-flex justify-content-center align-items-center'>
                                <div className='weoffer-card-body'>
                                    <div className='weoffer-icon-div d-flex justify-content-center align-itmes-center' data-aos="zoom-in-down" data-aos-duration="1500">
                                        <img data-aos="zoom-in-down" data-aos-duration="2000" className='weoffer-icon' src={Weoffer4} alt="Artificial Intelligence Machine Learning Services" />
                                    </div>
                                    <p data-aos="fade-left" data-aos-duration="3000" className='font-16 text-black be-vietnam-pro-regular mb-0'>Artificial Intelligence Machine Learning Services</p>
                                </div>
                            </li>
                            <li data-aos="zoom-in-down" data-aos-duration="1000" className='card-list position-relative mb-36 text-center d-flex justify-content-center align-items-center'>
                                <div className='weoffer-card-body'>
                                    <div className='weoffer-icon-div d-flex justify-content-center align-itmes-center' data-aos="zoom-in-down" data-aos-duration="1500">
                                        <img data-aos="zoom-in-down" data-aos-duration="2000" className='weoffer-icon' src={Weoffer5} alt="IT Consulting" />
                                    </div>
                                    <p data-aos="fade-left" data-aos-duration="3000" className='font-16 text-black be-vietnam-pro-regular mb-0'>IT Consulting</p>
                                </div>
                            </li>
                            <li data-aos="zoom-in-down" data-aos-duration="1000" className='card-list position-relative mb-36 text-center d-flex justify-content-center align-items-center'>
                                <div className='weoffer-card-body'>
                                    <div className='weoffer-icon-div d-flex justify-content-center align-itmes-center' data-aos="zoom-in-down" data-aos-duration="1500">
                                        <img data-aos="zoom-in-down" data-aos-duration="2000" className='weoffer-icon' src={Weoffer6} alt="Security Audit" />
                                    </div>
                                    <p data-aos="fade-left" data-aos-duration="3000" className='font-16 text-black be-vietnam-pro-regular mb-0'>Security Audit</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default WeOffer;