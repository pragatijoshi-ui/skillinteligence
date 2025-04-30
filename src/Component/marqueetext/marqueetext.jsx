import React from 'react';
const MarqueeSection = () => {
    return (
        <>
            <div className='back-bg-black bg-black'></div> 
            <section className='section-marquee bg-secondry-color'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="marquee-container">
                                <div className="marquee-content font-20 text-black-secondry be-vietnam-pro-regular">
                                    -- Website Under Construction ---- Website Under Construction ---- Website Under Construction ------ Website Under Construction ------ Website Under Construction ------ Website Under Construction ------ Website Under Construction ------ Website Under Construction --
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default MarqueeSection;