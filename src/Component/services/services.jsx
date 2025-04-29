// import React, { useEffect, useRef, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import './services.scss';

// const BentoContentLayout = () => {
//   const [activeSection, setActiveSection] = useState(0);
//   const sectionRefs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = Number(entry.target.getAttribute('data-index'));
//             setActiveSection(index);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     sectionRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const layouts = [
//     [
//       { id: 1, className: 'tall' },
//       { id: 2 },
//       { id: 3, className: 'wide' },
//       { id: 4 },
//       { id: 5, className: 'big' },
//       { id: 6, className: 'big' }
//     ],
//     [
//       { id: 1 },
//       { id: 2, className: 'wide' },
//       { id: 3 },
//       { id: 4, className: 'tall' },
//       { id: 5, className: 'tall' },
//       { id: 6, className: 'big' }
//     ],
//     [
//       { id: 1, className: 'big' },
//       { id: 2 },
//       { id: 3 },
//       { id: 4, className: 'tall' },
//       { id: 5, className: 'wide' },
//       { id: 6, className: 'tall' }
//     ]
//   ];

//   const sectionContent = [
//     {
//       title: 'Intelligence Fusion Technologies',
//       description:
//         'We offer the best and innovative IT solutions for your business. With a team of skilled professionals, we specialize in a wide range of services, including software development, cybersecurity, and IT consulting.',
//       buttonLabel: 'Know More'
//     },
//     {
//       title: 'Intelligence Trade',
//       description:
//         'Your Success, Our Algorithm. With our expert insights and tailored strategies, we help you to make smart and confident trading decisions.',
//       buttonLabel: 'Coming Soon'
//     },
//     {
//       title: 'Intelligence Educator',
//       description:
//         'If you are looking for a way to expand your knowledge in the field of IT, Intelligence Educators is here to support you every step of the way.',
//       buttonLabel: 'Know More'
//     }
//   ];

//   const currentLayout = layouts[activeSection];

//   return (
//     <section className="service-section">
//       <div className="container">
//         <div className="row">

//           {/* Left Side: Bento Grid */}
//           <div className="col-12 col-md-6">
//             <div data-aos-duration="2000" className="bento-grid">
//               <AnimatePresence mode="popLayout">
//                 {currentLayout.map(({ id, className }) => (
//                   <motion.div
//                     key={id}
//                     layout
//                     layoutId={`box-${id}`}
//                     className={`bento-box ${className || ''}`}
//                     transition={{ layout: { duration: 0.6, ease: 'easeInOut' } }}
//                   >
//                     Box {id}
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* Right Side: Scroll Content */}
//           <div className="col-12 col-md-6">
//             <div className="right-section">
//               {sectionContent.map((content, i) => (
//                 <div
//                   key={i}
//                   className="right-section-inner"
//                   ref={(el) => (sectionRefs.current[i] = el)}
//                   data-index={i}
//                 >
//                   <h2 data-aos="fade-left" data-aos-duration="2000" className="font-40 be-vietnam-pro-semibold text-black mb-8">
//                     {content.title}
//                   </h2>
//                   <p data-aos="fade-left" data-aos-duration="2000" className="font-20 be-vietnam-pro-regular text-black-secondry mb-60">
//                     {content.description}
//                   </p>
//                   <div className='w-100 text-start'>
//                   <button className="bg-light-color p-12 text-black font-16 be-vietnam-pro-semibold btn-know-more">
//                     {content.buttonLabel}
//                   </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default BentoContentLayout;
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import './services.scss';

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
      { id: 1, className: 'tall' },
      { id: 2 },
      { id: 3, className: 'wide' },
      { id: 4 },
      { id: 5, className: 'big' },
      { id: 6, className: 'big' }
    ],
    [
      { id: 1 },
      { id: 2, className: 'wide' },
      { id: 3 },
      { id: 4, className: 'tall' },
      { id: 5, className: 'tall' },
      { id: 6, className: 'big' }
    ],
    [
      { id: 1, className: 'big' },
      { id: 2 },
      { id: 3 },
      { id: 4, className: 'tall' },
      { id: 5, className: 'wide' },
      { id: 6, className: 'tall' }
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
                {currentLayout.map(({ id, className }) => (
                  <motion.div
                    key={id}
                    layout
                    layoutId={`box-${id}`}
                    className={`bento-box ${className || ''}`}
                    transition={{ layout: { duration: 0.6, ease: 'easeInOut' } }}
                  >
                    Box {id}
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
