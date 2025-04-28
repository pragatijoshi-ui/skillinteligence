import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./ourclients.scss";
import Clientimage from "../../images/client-icon.svg";

function OurClients() {
    const [currentSlide1, setCurrentSlide1] = useState(0);
    const [currentSlide2, setCurrentSlide2] = useState(0);

    const slideData = [
        {
            name: "SUPER CHICKS",
            description: "Rumeno Farmotech is a nutrition and feed supplement technologies company"
        },
        {
            name: "FARM FRESH",
            description: "Providing organic poultry feed with premium nutrients."
        },
        {
            name: "BIO TECH",
            description: "Leader in sustainable livestock health solutions."
        }
    ];

    const slidesToShow = 3;

    const getMiddleSlideIndex = (currentSlide) => {
        const offset = Math.floor(slidesToShow / 2);
        return (currentSlide + offset) % slideData.length;
    };

    const isMiddleSlide1 = (index) => index === getMiddleSlideIndex(currentSlide1);
    const isMiddleSlide2 = (index) => index === getMiddleSlideIndex(currentSlide2);

    const sliderSettings1 = {
        dots: true,
        infinite: true,
        slidesToShow,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        swipeToSlide: true,
        arrows: false, // hides left/right arrows
    dots: false, 
        afterChange: (current) => setCurrentSlide1(current)
    };

    const sliderSettings2 = {
        dots: true,
        infinite: true,
        slidesToShow,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        swipeToSlide: true,
        arrows: false, // hides left/right arrows
    dots: false, 
        afterChange: (current) => setCurrentSlide2(current)
    };

    return (
        <section className="section-ourclients d-flex justify-content-center align-items-center">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="row h-100">
                    {/* Slider 1 */}
                    <div className="col-12 col-md-6 h-100">
                        <div data-aos="fade-right" data-aos-duration="2000" className="slider-container left-slider-container">
                            <Slider {...sliderSettings1}>
                                {slideData.map((client, index) => (
                                    <div
                                        key={index}
                                        className={`slider-inner-div d-flex align-items-center justify-content-start ${
                                            isMiddleSlide1(index) ? "my-slick-current" : ""
                                        }`}
                                    >
                                        <div className="client-img-div d-flex justify-content-center align-items-center">
                                            <img src={Clientimage} alt={client.name} />
                                        </div>
                                        <div className="client-details ml-24">
                                            <h3 className="client-name text-black font-12 text-uppercase be-vietnam-pro-bold">
                                                {client.name}
                                            </h3>
                                            <p className="font-12 text-black be-vietnam-pro-regular mb-2">
                                                {client.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>

                    {/* Slider 2 */}
                    <div className="col-12 col-md-6 h-100">
                        <div data-aos="fade-left" data-aos-duration="2000" className="slider-container right-slider-container">
                            <Slider {...sliderSettings2}>
                                {slideData.map((client, index) => (
                                    <div
                                        key={index}
                                        className={`slider-inner-div d-flex align-items-center justify-content-start ${
                                            isMiddleSlide2(index) ? "my-slick-current" : ""
                                        }`}
                                    >
                                        <div className="client-img-div d-flex justify-content-center align-items-center">
                                            <img src={Clientimage} alt={client.name} />
                                        </div>
                                        <div className="client-details ml-24">
                                            <h3 className="client-name text-black font-12 text-uppercase be-vietnam-pro-bold">
                                                {client.name}
                                            </h3>
                                            <p className="font-12 text-black be-vietnam-pro-regular mb-2">
                                                {client.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurClients;
