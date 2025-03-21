import React from 'react';
import './servicecard.scss'; 
import Card from './singlecard';
import Feature1 from '../../images/feature1.png';
import Feature2 from '../../images/feature2.png';
import Feature3 from '../../images/feature3.png';
import Feature4 from '../../images/feature4.png';
import Feature5 from '../../images/feature5.png';
import Feature6 from '../../images/feature6.png';

const ServiceCard = ({ title, description, imageUrl }) => {
  return (   
    <>    
    <section className='servicecard-section section-medium-padding-T-B'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className="card-position">
                        <Card
                        title="Beautiful Nature"
                        description="Discover the stunning beauty of nature with this scenic view."
                        imageUrl={Feature1}
                        />
                        <Card
                        title="Amazing Architecture"
                        description="Explore the marvels of modern architecture around the world."
                        imageUrl={Feature2}
                        />
                        <Card
                        title="Amazing Architecture"
                        description="Explore the marvels of modern architecture around the world."
                        imageUrl={Feature3}
                        />
                        <Card
                        title="Amazing Architecture"
                        description="Explore the marvels of modern architecture around the world."
                        imageUrl={Feature4}
                        />
                        <Card
                        title="Amazing Architecture"
                        description="Explore the marvels of modern architecture around the world."
                        imageUrl={Feature5}
                        />
                        <Card
                        title="Amazing Architecture"
                        description="Explore the marvels of modern architecture around the world."
                        imageUrl={Feature6}
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default ServiceCard;
