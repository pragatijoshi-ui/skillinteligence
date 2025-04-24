import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './educatorweoffers.scss';
const Educatorweoffers = () => {
    const settings = {
        dots: true,
        infinite: true,
        // centerPadding: '20px',
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
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
                                <div>
                                    <h3>2</h3>
                                </div>
                                <div>
                                    <h3>3</h3>
                                </div>
                                <div>
                                    <h3>4</h3>
                                </div>
                                <div>
                                    <h3>5</h3>
                                </div>
                                <div>
                                    <h3>6</h3>
                                </div>
                                <div>
                                    <h3>7</h3>
                                </div>
                                <div>
                                    <h3>8</h3>
                                </div>
                                <div>
                                    <h3>9</h3>
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