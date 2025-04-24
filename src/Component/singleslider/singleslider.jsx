import React from "react";
import Slider from "react-slick";
import './singleslider.scss'
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
    <section className="section-simpleslider bg-gradient-slider w-100 margin-medium-T-B">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-11 col-md-12">
                    <Slider {...settings}>
                        <div className="row d-flex justify-content-center">
                            <div className="col-10 col-md-6">
                                <div className="review-container d-flex justify-content-center flex-column align-items-center w-100">
                                    <div className="review-quote text-center">
                                        <blockquote className="quote-text font-24 text-white be-vietnam-pro-medium mb-24">This product has greatly improved my productivity! Highly recommend it.</blockquote>
                                    </div>
                                    <div className="client-info d-flex align-items-center flex-row">
                                        <img src="" alt="client Image" className="client-image mr-16" />
                                        <div className="client-detail">
                                            <p className="client-name text-white font-18 be-vietnam-pro-medium mb-8">John Doe</p>
                                            <p className="client-designation font-16 be-vietnam-pro-regular mb-0">Project Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-10 col-md-6">
                                <div className="review-container d-flex justify-content-center flex-column align-items-center w-100">
                                    <div className="review-quote text-center">
                                        <blockquote className="quote-text font-24 text-white be-vietnam-pro-medium mb-24">This product has greatly improved my productivity! Highly recommend it.</blockquote>
                                    </div>
                                    <div className="client-info d-flex align-items-center flex-row">
                                        <img src="" alt="client Image" className="client-image mr-16" />
                                        <div className="client-detail">
                                            <p className="client-name text-white font-18 be-vietnam-pro-medium mb-8">John Doe</p>
                                            <p className="client-designation font-16 be-vietnam-pro-regular mb-0">Project Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-10 col-md-6">
                                <div className="review-container d-flex justify-content-center flex-column align-items-center w-100">
                                    <div className="review-quote text-center">
                                        <blockquote className="quote-text font-24 text-white be-vietnam-pro-medium mb-24">This product has greatly improved my productivity! Highly recommend it.</blockquote>
                                    </div>
                                    <div className="client-info d-flex align-items-center flex-row">
                                        <img src="" alt="client Image" className="client-image mr-16" />
                                        <div className="client-detail">
                                            <p className="client-name text-white font-18 be-vietnam-pro-medium mb-8">John Doe</p>
                                            <p className="client-designation font-16 be-vietnam-pro-regular mb-0">Project Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>        
    </section>
    </>
    
  );
}