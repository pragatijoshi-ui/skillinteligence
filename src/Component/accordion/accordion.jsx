// import React, { useState } from 'react';
// // import '../../App.scss'
// import './accordion.scss';
// import FAQImage from '../../images/FAQ-image.png'

// const Accordion = () => {
//     const [activeIndex, setActiveIndex] = useState(null);

//     const toggleAccordion = (index) => {
//         setActiveIndex(activeIndex === index ? null : index);
//     };

//     return (
//         <section className='section-accordion'>
//             <div className='container'>
//                 <div className='row justify-content-center align-items-center'>
//                     <div className='col-12 col-md-6'>
//                         <div className='faq-image-div'>
//                             <img data-aos="fade-right" data-aos-duration="2000" className='faq-image' src={FAQImage} alt="" />
//                         </div>
//                     </div>
//                     <div className='col-12 col-md-6'>
//                         <div className="accordion" data-aos="fade-left" data-aos-duration="2000">
//                             {[...Array(4)].map((_, index) => (
//                                 <div key={index} className={`accordion-item p-16 mb-12 ${activeIndex === index ? 'active' : ''}`}>

//                                     <div
//                                         className="accordion-header font-18 d-flex justify-content-between be-vietnam-pro-medium"
//                                         onClick={() => toggleAccordion(index)}
//                                     >
//                                         <span>Accordion Item {index + 1}</span>
//                                         <span className="icon">
//                                             {activeIndex === index ? '−' : '+'}
//                                         </span>
//                                     </div>
//                                     {activeIndex === index && (
//                                         <div className="accordion-body p-10">
//                                             <p className='be-vietnam-pro-regular font-16 mb-48'>This is the content for Accordion Item {index + 1}.</p>
//                                             <div className='accordion-body-link p-24'><a href="#" className='font-16 be-vietnam-pro-medium text-black text-decoration-none'>This is the content for Accordion Item </a>
//                                             </div>
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
        
//     );
// };

// export default Accordion;
import React, { useState } from 'react';
import './accordion.scss';
import FAQImage from '../../images/FAQ-image.png';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: 'What technologies do you use?',
            content: (
                <>
                    <p className="font-16 mb-16 be-vietnam-pro-regular">We in IFT utilize technologies depending on the type of projects we are working on. The technologies on which we generally work on and have expertise in are : Front-end :- HTML, CSS, JavaScript and frameworks like React, Angular, or Vue.js, Back-end :- Python, Java, C#, PHP, Node.js, Databases :- MySQL, Oracle, MongoDB, etc. , For Version Control :- Git tools , project management tools like :- Jira and Asana.</p>
                </>
            )
        },
        {
            title: 'What qualifications do you need to trade stocks?',
            content: (
                <>
                    <p className="font-16 mb-16 be-vietnam-pro-regular">Anyone can safely start investing/trading in stocks, but there is always a risk of losing money. So, it is important to approach it with proper research, education, and a long-term perspective. Hence, it is better to have a degree in relevant subjects like management, business, economy or finance.</p>
                </>
            )
        },
        {
            title: 'How do you approach risk management in your trading strategies?',
            content: (
                <>
                    <p className="font-16 mb-16 be-vietnam-pro-regular">By integrating strategies like Diversification, Stop-Loss Orders, Continuous Monitoring, Utilizing advanced technology and algorithms and regularly conducting stress tests to assess how different scenarios could impact portfolios, we effectively navigate the complexities of the financial markets and protect capital against various risks.</p>
                </>
            )
        },
        {
            title: 'Do you provide maintenance and updates in the Projects?',
            content: (
                <>
                    <p className="font-16 mb-16 be-vietnam-pro-regular">Yes, we ensure that a project, such as software or a system, remains functional, secure, and relevant over time. This include bug fixes, performance improvements, security updates, feature enhancements, compliance and backup and Recovery of the software.</p>
                </>
            )
        },
        {
            title: 'Is a degree necessary to succeed in IT, or are there Alternative routes?',
            content: (
                <>
                    <p className="font-16 mb-16 be-vietnam-pro-regular">No, In IT sector having a degree is not necessary where skills and experience often hold more weight than formal education, but having one can give you an advantage when finding a job. Building a strong portfolio, having relevant certifications, participating in internships, and showcasing your abilities through projects or freelance work can all help you secure a job in the tech industry without a degree.</p>
                </>
            )
        },
        {
            title: 'How do I find entry-level jobs in IT companies?',
            content: (
                <>
                    <p className="font-16 mb-16 be-vietnam-pro-regular">You can easily get an entry-level job in an IT company if you have skills and experience in working on web-development on your own. If not, then you can develop web development skills by doing a certification course in frontend, backend or full-stack development.</p>
                </>
            )
        }
    ];

    return (
        <section className='section-accordion'>
            <div className='container'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-12 col-md-6'>
                        <div className='faq-image-div'>
                            <img
                                data-aos="fade-right"
                                data-aos-duration="2000"
                                className='faq-image'
                                src={FAQImage}
                                alt="FAQ Illustration"
                            />
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='accordion-section'>
                        <div className="accordion" data-aos="fade-left" data-aos-duration="2000">
                            {accordionData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`accordion-item p-16 mb-12 ${activeIndex === index ? 'active' : ''}`}
                                >
                                    <div
                                        className="accordion-header font-18 d-flex justify-content-between be-vietnam-pro-medium"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <span>{item.title}</span>
                                        <span className="icon">{activeIndex === index ? '−' : '+'}</span>
                                    </div>
                                    {activeIndex === index && (
                                        <div className="accordion-body p-10">
                                            {item.content}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accordion;
