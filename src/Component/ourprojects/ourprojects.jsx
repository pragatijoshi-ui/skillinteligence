import React from 'react';
import './ourprojects.scss';
import Button from '../button/button';
import ProjectImage from '../../images/projectImage.png'
const OurProjects =()=>{
    return(
        <section className='section-ourprojects'>
            <div className='container'>
                <div className='row mb-68'>
                    <div className='col-12 col-md-7'>
                        <div className='project-image-div'>
                            <img data-aos="zoom-in-down" data-aos-duration="2000"  className='project-image h-100 w-100' src={ProjectImage} alt="ProjectImage" />
                        </div>
                    </div>
                    <div className='col-12 col-md-5'>
                        <div className='project-detail-div ml-40 d-flex flex-column justify-content-center'>
                            <h2 data-aos="fade-left" data-aos-duration="2000" className='font-40 text-black be-vietnam-pro-semibold'>Project Title</h2>
                            <p data-aos="fade-left" data-aos-duration="2000" className='be-vietnam-pro-regular font-20 text-black-secondry'>Project description</p>
                            <Button label="Visit Project"/>
                        </div>
                    </div>
                </div>
                <div className='row mt-48 mb-68'>                    
                    <div className='col-12 col-md-5'>
                        <div className='project-detail-div ml-40 d-flex flex-column justify-content-center'>
                            <h2 data-aos="fade-right" data-aos-duration="2000" className='font-40 text-black be-vietnam-pro-semibold'>Project Title</h2>
                            <p data-aos="fade-right" data-aos-duration="2000" className='be-vietnam-pro-regular font-20 text-black-secondry'>Project description</p>
                            <Button label="Visit Project"/>
                        </div>
                    </div>
                    <div className='col-12 col-md-7'>
                        <div className='project-image-div'>
                            <img data-aos="zoom-in-down" data-aos-duration="2000"  className='project-image h-100 w-100' src={ProjectImage} alt="ProjectImage" />
                        </div>
                    </div>
                </div>
                <div className='row mt-48'>
                    <div className='col-12 col-md-7'>
                        <div className='project-image-div'>
                            <img data-aos="zoom-in-down" data-aos-duration="2000"  className='project-image h-100 w-100' src={ProjectImage} alt="ProjectImage" />
                        </div>
                    </div>
                    <div className='col-12 col-md-5'>
                        <div className='project-detail-div ml-40 d-flex flex-column justify-content-center'>
                            <h2 data-aos="fade-left" data-aos-duration="2000" className='font-40 text-black be-vietnam-pro-semibold'>Project Title</h2>
                            <p data-aos="fade-left" data-aos-duration="2000" className='be-vietnam-pro-regular font-20 text-black-secondry'>Project description</p>
                            <Button label="Visit Project"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default OurProjects;