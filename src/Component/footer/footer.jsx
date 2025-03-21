import React from 'react';
import './footer.scss'; // Import the SCSS for styling
import facebook from '../../images/facebook.svg'
import Twiter from '../../images/twiter.svg'
import linkdin from '../../images/linkdin.svg'
import Email from '../../images/email.svg'
import Contact from '../../images/contact.svg'
import Location from '../../images/location.svg'

const Footer = () => {
    return (
        <footer className="footer bg-white">
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div className="footer-logo">
                            <h2>MyLogo</h2>
                            <ul className='contact-detail-ul pl-0 mt-40'>
                                <li className='mb-20'>
                                    <a className='text-grey-15 font-18 be-vietnam-pro-regular text-decoration-none' href="mailto:hello@skillbridge.com"><img className='mr-8' src={Email} alt="Email" />hello@skillbridge.com</a>
                                </li>
                                <li className='mb-20'>
                                    <a className='text-grey-15 font-18 be-vietnam-pro-regular text-decoration-none' href="tel:+91 91813 23 2309"><img className='mr-8' src={Contact} alt="Contact" />+91 91813 23 2309</a>
                                </li>
                                <li className='mb-20'>
                                    <a className='text-grey-15 font-18 be-vietnam-pro-regular text-decoration-none' href=""><img className='mr-8' src={Location} alt="Location" />Somewhere in the World</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className='footer-content mb-20'>
                            <div className="footer-links">
                                <ul className='footer-links-ul'>
                                    <li className="mb-12 text-grey-15 font-20 be-vietnam-pro-semibold">Home</li>
                                    <li className="mb-8"><a href="#" className='text-grey-35 font-18 be-vietnam-pro-regular mb-8'>Home</a></li>
                                    <li className="mb-8"><a href="#" className='text-grey-35 font-18 be-vietnam-pro-regular mb-8'>About</a></li>
                                    <li className="mb-8"><a href="#" className='text-grey-35 font-18 be-vietnam-pro-regular mb-8'>Services</a></li>
                                    <li className="mb-8"><a href="#" className='text-grey-35 font-18 be-vietnam-pro-regular mb-8'>Contact</a></li>
                                </ul>
                            </div>
                            <div className="footer-links">
                                <ul className='footer-links-ul'>
                                    <li className="mb-12 text-grey-15 font-20 be-vietnam-pro-semibold">About</li>
                                    <li className="mb-8"><a href="#" className='text-grey-35 font-18 be-vietnam-pro-regular mb-8'>Home</a></li>
                                    <li className="mb-8"><a href="#" className='text-grey-35 font-18 be-vietnam-pro-regular mb-8'>About</a></li>
                                    <li className="mb-8"><a href="#" className='text-grey-35 font-18 be-vietnam-pro-regular mb-8'>Services</a></li>
                                    <li className="mb-8"><a href="#" className='text-grey-35 font-18 be-vietnam-pro-regular mb-8'>Contact</a></li>
                                </ul>
                            </div>
                            <div className="footer-social">
                            <h4 className="mb-12 text-grey-15 font-20 be-vietnam-pro-semibold">Social Profiles</h4>
                                <ul className='footer-social-ul'>                                    
                                    <li className='p-14'>
                                        <a href="#" className="social-icon"><img src={facebook} alt="facebook" /></a>
                                    </li>
                                    <li className='p-14'>
                                        <a href="#" className="social-icon"><img src={Twiter} alt="Twiter" /></a>
                                    </li>
                                    <li className='p-14'>
                                        <a href="#" className="social-icon"><img src={linkdin} alt="linkdin" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className='font-14 pt-44 pb-44 mb-0'>&copy; 2025 MyLogo. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
