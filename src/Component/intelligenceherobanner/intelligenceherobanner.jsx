import React from 'react';
// import './intelligenceherobanner.scss';
import Maskimage from '../../images/Mask-img.png';
import Logo from '../../images/SIWlogo.png';
import Button from '../button/button';

const Intelligenceherobanner = () => {        
    return (
        <>
        <section className='section-intelligenceherobanner'>
            <div className='intelligence-herobanner-main-div position-relative'>
                <div className='container-fluid'>
                    <div className='row align-items-center'>
                        <div className='col-12 col-md-7'>
                            <div className='ml-68'>
                                <p data-aos="fade-up" data-aos-duration="3000" className='text-black font-20 be-vietnam-pro-regular mb-0'>Welcom To</p>
                                <h1 data-aos="fade-up" data-aos-duration="2000" className='font-64 be-vietnam-pro-semibold text-black-secondry mb-0'>
                                INTELLIGENCE  <br/>FUSION<br/> TECHNOLOGIES 
                                </h1>
                                <p data-aos="fade-up" data-aos-duration="1000" className='font-20 be-vietnam-pro-regular text-black w-80 mb-10'>We helps in providing best technology solutions tailored to your business needs. From software development and cybersecurity to cloud services and IT consultancy. We ensure you stay ahead in this Tech-leading world.</p>
                                <Button label="Visit Site"/>
                            </div>
                        </div>
                        <div className='col-12 col-md-5 d-flex'>
                            <div className='IFT-image-div'>
                            </div>
                            <div className='mask-image-div'>
                                <img className='h-100 w-100' src={Maskimage} alt="Maskimage" />
                            </div>
                            <div data-aos="zoom-in" data-aos-duration="2000" className='SIW-logo-div'>
                                <img src={Logo} alt="Logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Intelligenceherobanner;
