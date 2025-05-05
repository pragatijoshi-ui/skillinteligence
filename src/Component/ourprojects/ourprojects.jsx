import React from 'react';
// import './ourprojects.scss';
import Button from '../button/button';
import Project1 from '../../images/project1.png';
import Project2 from '../../images/project2.png';
const OurProjects =()=>{
    return(
        <section className='section-ourprojects'>
            <div className='container'>
                <div className='row mb-68'>
                    <div className='col-12 col-md-7'>
                        <div className='project-image-div'>
                            <img data-aos="zoom-in-down" data-aos-duration="2000"  className='project-image h-100 w-100' src={Project1} alt="ProjectImage" />
                        </div>
                    </div>
                    <div className='col-12 col-md-5'>
                        <div className='project-detail-div ml-40 d-flex flex-column justify-content-center'>
                            <h2 data-aos="fade-left" data-aos-duration="2000" className='font-40 text-black be-vietnam-pro-semibold'>Rumeno</h2>
                            <p data-aos="fade-left" data-aos-duration="2000" className='be-vietnam-pro-regular font-20 text-black-secondry'>Rumeno Farmotech offers a wide range of products, including Probiotics, milk replacer, Macro & Micro Minerals, Multi Vitamins, Enzymes, Amino Acids, feed additives, premixes, concentrates, and specialty products for livestock, poultry, and aquaculture. These products are designed to address specific nutritional needs and challenges faced by farmers and producers, such as improving growth rates, enhancing immune function, increasing feed efficiency, and reducing environmental impact.</p>
                            <Button label="Visit Project" onClick={() => window.open('https://rumeno.in/', '_blank')}/>
                        </div>
                    </div>
                </div>
                <div className='row mt-48 mb-68'>                    
                    <div className='col-12 col-md-5 order-2 order-md-1'>
                        <div className='project-detail-div h-100 d-flex flex-column justify-content-center'>
                            <h2 data-aos="fade-right" data-aos-duration="2000" className='font-40 text-black be-vietnam-pro-semibold'>Gauswarn</h2>
                            <p data-aos="fade-right" data-aos-duration="2000" className='be-vietnam-pro-regular font-20 text-black-secondry'>Gauswarn is a dedicated initiative to revive the ancient art of crafting pure A2 Ghee through the Vedic Bilona method. Our project focuses on preserving indigenous cow breeds, promoting sustainable dairy practices, and delivering health-rich, chemical-free ghee that honors time-tested traditions.</p>
                            <Button label="Visit Project" onClick={() => window.open('https://gauswarn.com/', '_blank')}/>
                        </div>
                    </div>
                    <div className='col-12 col-md-7 order-1 order-md-2'>
                        <div className='project-image-div'>
                            <img data-aos="zoom-in-down" data-aos-duration="2000"  className='project-image h-100 w-100' src={Project2} alt="ProjectImage" />
                        </div>
                    </div>
                </div>
                <div className='row mt-48'>
                    <div className='col-12 col-md-7'>
                        <div className='project-image-div'>
                            <img data-aos="zoom-in-down" data-aos-duration="2000"  className='project-image h-100 w-100' src={Project2} alt="ProjectImage" />
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