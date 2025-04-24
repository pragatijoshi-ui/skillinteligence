import React from 'react';
import './herobanner.scss'
import Heroimage from '../.././images/hero-image-new.png';
import EllipseBM from '../../images/Ellipse-black-medi.svg';
import EllipseBS from '../../images/Ellipse-black-small.svg';
import EllipseLB from '../../images/Ellipse-light-big.svg';
import EllipseDB from '../../images/Ellipse-dark-big.svg';
import EllipseLM from '../../images/Ellipse-light-medi.svg'

const Herobanner = () => {        
    return (
        <>
        <section className='mb-78 section-herobanner'>
            <div className='Herobanner-main-div section-larg-padding-T-B position-relative'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-12 col-md-7'>
                            <p data-aos="fade-up" data-aos-duration="3000" className='text-black font-20 be-vietnam-pro-regular'>Welcom To</p>
                            <h1 data-aos="fade-up" data-aos-duration="2000" className='font-64 be-vietnam-pro-semibold text-black-secondry'>
                                SKILL <br/>INTELLIGENCE<br/> WORLD 
                            </h1>
                            <p data-aos="fade-up" data-aos-duration="1000" className='font-20 be-vietnam-pro-regular text-black w-80'>Our company operates in the education and professional development sector, focusing on delivering high-quality training programs</p>
                        </div>
                        <div className='col-12 col-md-5 d-flex justify-content-end position-relative align-items-end'>
                            <div className='top-ellipse-icons-div'>
                                <img data-aos="fade-left" data-aos-duration="2000" className='top-EllipseDB rotate-slow delay-2' src={EllipseDB} alt="" />
                                <img data-aos="fade-left" data-aos-duration="2000" className='top-EllipseBS rotate-slow delay-3' src={EllipseBS} alt="" />
                                <img data-aos="fade-left" data-aos-duration="2000" className='top-EllipseLM rotate-slow delay-4' src={EllipseLM} alt="" />
                            </div>
                            <div className='SIW-office-image-div'>
                                <img data-aos="zoom-in" data-aos-duration="3000" src={Heroimage} alt="Hero Banner right image" />
                            </div>
                            <div data-aos="zoom-in" data-aos-duration="2000" className='SIW-logo-div'></div>
                            <div className='bottom-ellipse-icons-div'>
                                <img data-aos="fade-left" data-aos-duration="2000" className='bottom-EllipseLB rotate-slow delay-1' src={EllipseLB} alt="" />
                                <img data-aos="fade-left" data-aos-duration="2000" className='bottom-EllipseBM rotate-slow delay-5' src={EllipseBM} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Herobanner;
