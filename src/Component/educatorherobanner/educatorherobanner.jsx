import React from 'react';
import career from '../../images/hero-career.png';
import skilled from '../../images/hero-skilled.png';
import lifelong from '../../images/hero-lifelong.png';
import suport from '../../images/hero-suport.png';
const EducatorHeroBanner =()=>{
    return(
        <section className='section-educator-herobanner position-relative mb-72'>
            <div className='container'>
                <div className='row d-flex justify-content-center align-items-center educator-herobanner-inner'>
                    <div className='col-12 col-md-10'>
                        <h1 data-aos="fade-up" data-aos-duration="2000" className='text-white font-64 be-vietnam-pro-semibold'>INTELLIGENCE EDUCATOR</h1>
                        <p data-aos="fade-up" data-aos-duration="1000" className='font-20 be-vietnam-pro-regular text-white'>We aim to Craft A person in such a way that he/ she shall be able to master the desired skills. Our courses involve outlining key topics, skills, and tools that learners will need to master.</p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-10'>
                        <div className='position-absolute services-cards-div mb-68'>
                            <ul className='d-grid services-card-nav'>
                                <li data-aos="fade-left" data-aos-duration="1000" className='services-card-list text-center d-flex justify-content-center align-items-center'>
                                    <div className='services-card-inner'>
                                        <img data-aos="zoom-in" data-aos-duration="1000" className='mb-52' src={skilled} alt="skilled" />
                                        <p data-aos="fade-up" data-aos-duration="1000"  className='font-20 text-primary-color be-vietnam-pro-bold '>Skilled Instructors</p>
                                    </div>
                                </li>
                                <li data-aos="fade-left" data-aos-duration="2000" className='services-card-list text-center d-flex justify-content-center align-items-center'>
                                    <div className='services-card-inner'>
                                        <img data-aos="zoom-in" data-aos-duration="1000" className='mb-52' src={suport} alt="suport" />
                                        <p data-aos="fade-up" data-aos-duration="1000"  className='font-20 text-primary-color be-vietnam-pro-bold '>Personalized Support</p>
                                    </div>
                                </li>
                                <li data-aos="fade-left" data-aos-duration="3000" className='services-card-list text-center d-flex justify-content-center align-items-center'>
                                    <div className='services-card-inner'>
                                        <img data-aos="zoom-in" data-aos-duration="1000" className='mb-52' src={lifelong} alt="lifelong" />
                                        <p data-aos="fade-up" data-aos-duration="1000"  className='font-20 text-primary-color be-vietnam-pro-bold '>Lifelong Learning</p>
                                    </div>
                                </li>
                                <li data-aos="fade-left" data-aos-duration="4000" className='services-card-list text-center d-flex justify-content-center align-items-center'>
                                    <div className='services-card-inner'>
                                        <img data-aos="zoom-in" data-aos-duration="1000" className='mb-52' src={career} alt="career" />
                                        <p data-aos="fade-up" data-aos-duration="1000"  className='font-20 text-primary-color be-vietnam-pro-bold '>Career Service</p>
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
export default EducatorHeroBanner;
