import React from "react";
import './technologywork.scss';
import Technology1 from '../../images/Technology1.png';
import Technology2 from '../../images/Technology2.png';
import Technology3 from '../../images/Technology3.png';
import Technology4 from '../../images/Technology4.png';
import Technology5 from '../../images/Technology5.png';
import Technology6 from '../../images/Technology6.png';
import Technology7 from '../../images/Technology7.png';
import Technology8 from '../../images/Technology8.png';
import Technology9 from '../../images/Technology9.png';
import Technology10 from '../../images/Technology10.png';
import Technology11 from '../../images/Technology11.png';
import Technology12 from '../../images/Technology12.png';
import Technology13 from '../../images/Technology13.png';
import Technology14 from '../../images/Technology14.png';
const Technology = () => {
    return (
        <>
            <section className="section-technology margin-larg-T-B">
                <div className="container section-medium-padding-T-B">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-grid grid-cols-2 techback align-items-center justify-content-center gap-4 w-100 vh-100" id="technology">
                                <div className="section-inner">
                                    <div className="main-container min-vh-100 d-flex align-items-center">
                                        <div className="main position-relative mx-auto my-0">
                                            <div className="big-circle h-100 w-100 position-relative d-flex align-items-center justify-content-center rounded-circle border-2">
                                                <div className="icon-block one tooltip position-absolute d-flex align-items-center justify-content-center rounded-circle">

                                                    <img src={Technology1} alt="Technology1" />
                                                    <span className="tooltip-text">Tooltip Label</span>

                                                </div>
                                                <div className="icon-block tooltip position-absolute d-flex align-items-center justify-content-center rounded-circle">
                                                    <img src={Technology2} alt="Technology2" />
                                                    <span className="tooltip-text">Tooltip Label</span>
                                                </div>
                                                <div className="icon-block tooltip position-absolute d-flex align-items-center justify-content-center rounded-circle">
                                                    <img src={Technology3} alt="Technology3" />
                                                    <span className="tooltip-text">Tooltip Label</span>
                                                </div>
                                                <div className="icon-block tooltip position-absolute d-flex align-items-center justify-content-center rounded-circle">
                                                <img src={Technology4} alt="Technology4" />
                                                    <span className="tooltip-text">Tooltip Label</span>
                                                </div>
                                                <div className="icon-block tooltip position-absolute d-flex align-items-center justify-content-center rounded-circle">
                                                <img src={Technology5} alt="Technology5" />
                                                    <span className="tooltip-text">Tooltip Label</span>
                                                </div>
                                                <div className="icon-block tooltip position-absolute d-flex align-items-center justify-content-center rounded-circle">
                                                <img src={Technology6} alt="Technology6" />
                                                    <span className="tooltip-text">Tooltip Label</span>
                                                </div>
                                            </div>
                                            <div class="position-absolute circle">
                                                <div className="icon-block tooltip position-absolute d-flex align-items-center justify-content-center rounded-circle">
                                                <img src={Technology7} alt="Technology7" />
                                                    <span className="tooltip-text">Tooltip Label</span>
                                                </div>
                                                <div className="icon-block tooltip position-absolute d-flex align-items-center justify-content-center rounded-circle">
                                                <img src={Technology8} alt="Technology8" />
                                                    <span className="tooltip-text">Tooltip Label</span>
                                                </div>
                                                <div className="icon-block tooltip position-absolute d-flex align-items-center justify-content-center rounded-circle">
                                                <img src={Technology9} alt="Technology9" />
                                                    <span className="tooltip-text">Tooltip Label</span>
                                                </div>
                                            </div>
                                            <div class="circle-front position-absolute translate-middle top-50 start-50 rotate-45 rounded-circle">
                                            </div>
                                            <div className="circle-2 position-absolute">
                                                <div className="icon-block tooltip position-absolute d-flex align-items-center justify-content-center rounded-circle">
                                                <img src={Technology10} alt="Technology10" />
                                                    <span className="tooltip-text">Tooltip Label</span>
                                                </div>
                                                <div className="icon-block tooltip position-absolute d-flex align-items-center justify-content-center rounded-circle">
                                                <img src={Technology11} alt="Technology11" />
                                                    <span className="tooltip-text">Tooltip Label</span>
                                                </div>
                                                <div className="icon-block tooltip position-absolute d-flex align-items-center justify-content-center rounded-circle">
                                                <img src={Technology12} alt="Technology12" />
                                                    <span className="tooltip-text">Tooltip Label</span>
                                                </div>
                                                <div className="icon-block tooltip position-absolute d-flex align-items-center justify-content-center rounded-circle">
                                                <img src={Technology13} alt="Technology13" />
                                                    <span className="tooltip-text">Tooltip Label</span>
                                                </div>
                                                <div className="icon-block tooltip position-absolute d-flex align-items-center justify-content-center rounded-circle">
                                                <img src={Technology14} alt="Technology14" />
                                                    <span className="tooltip-text">Tooltip Label</span>
                                                </div>
                                                <div className="icon-block tooltip position-absolute d-flex align-items-center justify-content-center rounded-circle">
                                                    <span className="tooltip-text">Tooltip Label</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    );
};

export default Technology;
