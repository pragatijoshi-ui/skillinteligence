import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Educatorweoffers = () => {
    const settings = {
        dots: true,
        infinite: true,
        // centerPadding: '20px',
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768, // Below this width
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true
                }
            }
        ]
    };
    return (
        <section className='section-educator-weoffer margin-larg-T-B'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className="slider-container">
                            <Slider {...settings}>
                                <div className='weoffer-card'>
                                    <div className='card-inner d-flex justify-content-center align-items-center'>

                                    </div>
                                </div>
                                <div className='weoffer-card'>
                                    <div className='card-inner d-flex justify-content-center align-items-center'>

                                    </div>
                                </div>
                                <div className='weoffer-card'>
                                    <div className='card-inner d-flex justify-content-center align-items-center'>

                                    </div>
                                </div>
                                <div className='weoffer-card'>
                                    <div className='card-inner d-flex justify-content-center align-items-center'>

                                    </div>
                                </div>
                                <div className='weoffer-card'>
                                    <div className='card-inner d-flex justify-content-center align-items-center'>

                                    </div>
                                </div>
                                <div className='weoffer-card'>
                                    <div className='card-inner d-flex justify-content-center align-items-center'>

                                    </div>
                                </div>
                                <div className='weoffer-card'>
                                    <div className='card-inner d-flex justify-content-center align-items-center'>

                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Educatorweoffers;