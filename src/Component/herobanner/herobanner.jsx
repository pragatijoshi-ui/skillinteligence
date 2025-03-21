import React from 'react';
import './herobanner.scss'
import Content from '../content/content';
import Card from '../servicecard/singlecard';
import Feature1 from '../../images/feature1.png';
import Feature2 from '../../images/feature2.png';
import Feature3 from '../../images/feature3.png';
const Herobanner = () => {
    return (
        <>
        <section className='mb-78 section-herobanner'>
            <div className='Herobanner-main-div section-larg-padding-T-B position-relative'>
                <div className='container'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-12 col-md-8 text-center'>
                            <Content heading="Welcome to My Site" description="The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!."/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container herobanner-card-position'>
                <div className='row justify-content-center position-relative'>
                    <div className='col-12 col-md-8'>
                        <div className="card-position">
                            <Card
                            title="Beautiful Nature"
                            description="Explore the marvels of modern architecture around the world."
                            imageUrl={Feature1}
                            showLink={false}
                            />
                            <Card
                            title="Amazing Architecture"
                            description="Explore the marvels of modern architecture around the world."
                            imageUrl={Feature2}
                            showLink={false}
                            />
                            <Card
                            title="Amazing Architecture"
                            description="Explore the marvels of modern architecture around the world."
                            imageUrl={Feature3}
                            showLink={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Herobanner;
