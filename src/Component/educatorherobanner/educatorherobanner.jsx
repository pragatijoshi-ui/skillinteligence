import React from 'react';
import './educatorherobanner.scss'

const EducatorHeroBanner =()=>{
    return(
        <section className='section-educator-herobanner position-relative'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>

                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-10'>
                        <div className='position-absolute services-cards-div mb-68'>
                            <ul className='d-grid services-card-nav'>
                                <li className='services-card-list'></li>
                                <li className='services-card-list'></li>
                                <li className='services-card-list'></li>
                                <li className='services-card-list'></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default EducatorHeroBanner;
