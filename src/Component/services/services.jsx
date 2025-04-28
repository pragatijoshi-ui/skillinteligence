import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import Service1 from '../../images/service1.svg';
import Service2 from '../../images/service2.svg';
import Service3 from '../../images/service3.svg';
import Service4 from '../../images/service4.svg';
import Service5 from '../../images/service5.svg';
import Service6 from '../../images/service6.svg';
import Service11 from '../../images/service11.png'; 
import Service12 from '../../images/service12.png'; 
import Service13 from '../../images/service13.png'; 
import Service14 from '../../images/service14.png'; 
import Service15 from '../../images/service15.png'; 
import Service16 from '../../images/service16.png'; 
import Service17 from '../../images/service17.png'; 
import Service21 from '../../images/service21.png'; 
import Service22 from '../../images/service22.png'; 
import Service23 from '../../images/service23.png'; 
import Service24 from '../../images/service24.png'; 
import Service25 from '../../images/service25.png'; 
import Service26 from '../../images/service26.png'; 

import 'aos/dist/aos.css';
import './services.scss';
import { image } from 'framer-motion/client';

const BentoContentLayout = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [activeSection]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveSection(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const layouts = [
    [
      { id: 1, className: 'tall',image:Service1},
      { id: 2,image:Service2},
      { id: 3, className: 'wide',image:Service4 },
      { id: 4,image:Service3 },
      { id: 5, className: 'big',image:Service5 },
      { id: 6, className: 'big',image:Service6 }
    ],
    [
      { id: 1,image:Service21},
      { id: 2, className: 'wide',image:Service24},
      { id: 3,image:Service23},
      { id: 4, className: 'tall',image:Service26},
      { id: 5, className: 'tall',image:Service22},
      { id: 6, className: 'big',image:Service25}
    ],
    [
      { id: 1, className: 'big',image:Service12 },
      { id: 2,image:Service17},
      { id: 3,image:Service13 },
      { id: 4, className: 'tall',image:Service14},
      { id: 5, className: 'wide',image:Service15 },
      { id: 6, className: 'tall',image:Service16}
    ]
  ];

  const sectionContent = [
    {
      title: 'Intelligence Fusion Technologies',
      description:
        'We offer the best and innovative IT solutions for your business. With a team of skilled professionals, we specialize in a wide range of services, including software development, cybersecurity, and IT consulting.',
      buttonLabel: 'Know More'
    },
    {
      title: 'Intelligence Trade',
      description:
        'Your Success, Our Algorithm. With our expert insights and tailored strategies, we help you to make smart and confident trading decisions.',
      buttonLabel: 'Coming Soon'
    },
    {
      title: 'Intelligence Educator',
      description:
        'If you are looking for a way to expand your knowledge in the field of IT, Intelligence Educators is here to support you every step of the way.',
      buttonLabel: 'Know More'
    }
  ];

  const currentLayout = layouts[activeSection];

  return (
    <section className="service-section">
      <div className="container">
        <div className="row">

          {/* Left Side: Bento Grid */}
          <div className="col-12 col-md-6">
            <div data-aos="fade-right" data-aos-duration="2000" className="bento-grid">
              <AnimatePresence mode="popLayout">
                {currentLayout.map(({ id, className,image }) => (
                  <motion.div
                    key={id}
                    layout
                    layoutId={`box-${id}`}
                    className={`bento-box ${className || ''}`}
                    transition={{ layout: { duration: 0.6, ease: 'easeInOut' } }}
                  >
                    {/* Box {id} */}
                    <img
                      src={image}
                      alt={`Box ${id}`}
                      className="bento-image"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side: Scroll Content */}
          <div className="col-12 col-md-6">
            <div className="right-section">
              {sectionContent.map((content, i) => (
                <div
                  key={i}
                  className="right-section-inner"
                  ref={(el) => (sectionRefs.current[i] = el)}
                  data-index={i}
                  
                  
                >
                  <h2 className="font-40 be-vietnam-pro-semibold text-black mb-8">
                    {content.title}
                  </h2>
                  <p className="font-20 be-vietnam-pro-regular text-black-secondry mb-60">
                    {content.description}
                  </p>
                  <div className='w-100 text-start'>
                    <button className="bg-light-color p-12 text-black font-16 be-vietnam-pro-semibold btn-know-more">
                      {content.buttonLabel}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoContentLayout;
