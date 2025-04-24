import React, { useState } from 'react';
import './getintouch.scss';
import PhoneIcon from '../../images/contact-number.svg'
import Location from '../../images/contact-location.svg'
import Email from '../../images/contact-email.svg'
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You could send this data to a backend API here
  };

  return (
    <section className='margin-larg-T-B'>
        <div className='container section-getIntouch'>
            <div className='row'>
                <div className='col-12 col-md-4'>
                    {/* Contact Detail section */}
                    <div className='contact-detail-div' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                        <h4 data-aos="fade-right" data-aos-duration="2000" className='font-20 be-vietnam-pro-bold mb-12 text-black text-center'>Contact Information</h4>
                        <p data-aos="fade-right" data-aos-duration="2000" className='text-black font-14 be-vietnam-pro-regular mb-48'>Our support team is always on call, and ready to help with all your questions!</p>
                        <div data-aos="fade-right" data-aos-duration="2000" className='contact-detail-inner-div d-flex justify-content-start align-items-center mb-52'>
                            <div className='contact-icon-inner'>
                                <img src={PhoneIcon} alt="" />
                            </div>
                            <div className='contact-text ml-24'>
                                <a href="tel:+91 91791-50494" className='contact-number font-14 text-black be-vietnam-pro-regular w-100 d-block'>+91 91791-50494</a>
                                <a href="tel:+91 92388-82696" className='contact-number font-14 text-black be-vietnam-pro-regular'>+91 92388-82696</a>
                            </div>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="2000" className='contact-detail-inner-div d-flex justify-content-start align-items-center mb-52'>
                            <div className='contact-icon-inner'>
                                <img src={Email} alt="" />
                            </div>
                            <div className='contact-text ml-24'>
                                <a href="mailto:skill.intelligence2025@skill.com" className='contact-number font-14 text-black be-vietnam-pro-regular'>skill.intelligence2025@skill.com</a>
                            </div>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="2000" className='contact-detail-inner-div d-flex justify-content-start align-items-center'>
                            <div className='contact-icon-inner'>
                                <img src={Location} alt="" />
                            </div>
                            <div className='contact-text ml-24'>
                            <a className='contact-number font-14 text-black be-vietnam-pro-regular'>11, Manish Bagh Colony, near Vikram Tower,
                            Sapna Sangeeta Road, Indore, MP</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Form detail */}
                <div className='col-12 col-md-8 pt-52 pl-56 pr-68'>
                    <form onSubmit={handleSubmit}>
                        <div className='row mb-32'>
                            <div className='col-12 col-md-6'>
                                <label  data-aos="zoom-in-up" className='font-18 w-100 text-dark-secondary'>
                                    Name:
                                    <input className='input-getintouch'
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    />
                                </label>
                            </div>
                            <div className='col-12 col-md-6'>
                                <label data-aos="zoom-in-up" className='font-18 w-100 text-dark-secondary'>
                                    Email:
                                    <input className='input-getintouch'
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    />
                                </label>
                            </div>
                        </div>
                        <div className='row mb-32'>
                            <div className='col-12'>
                                <label data-aos="zoom-in-up" className='font-18 w-100 text-dark-secondary'>
                                    Your Subject:
                                    <input className='input-getintouch'
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    />
                                </label>
                            </div>
                        </div>
                        <div className='row mb-32'>
                            <div className='col-12'>
                                <label data-aos="zoom-in-up" className='font-18 w-100 text-dark-secondary'>
                                    Message:
                                    <textarea className='textrea-getintouch w-100'
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    required
                                    />
                                </label>
                            </div>
                        </div>
                        <button  data-aos="zoom-in-up" className='btn submit-btn font-18 text-dark-color be-vietnam-pro-bold' type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    
  );
}

export default ContactForm;
