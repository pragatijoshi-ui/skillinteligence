import React from 'react';
// import './footer.scss'; // Import the SCSS for styling
import facebook from '../../images/facebook.png'
import Insta from '../../images/insta.png'
import linkdin from '../../images/linkdin.png'
import Whatsapp from '../../images/whatsapp.png'

const Footer = () => {
    return (
        <footer className="footer bg-secondary-color pt-44 pb-44 footer-bottom">
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-4 d-flex justify-content-center align-items-center'>
                        <h4 className='font-30 be-vietnam-pro-semibold text-black-secondry mb-0'>SKILL  INTELLIGENCE  WORLD</h4>                            
                    </div>
                    <div className='col-12 col-md-4 d-flex justify-content-center align-items-center'>
                        <div className="footer-social">
                            <ul className='footer-social-ul mb-0'>                                    
                                <li className='social-link'>
                                    <a href="#" className="social-icon"><img src={facebook} alt="facebook" /></a>
                                </li>
                                <li className='social-link'>
                                    <a href="#" className="social-icon"><img src={Insta} alt="Insta" /></a>
                                </li>
                                <li className='social-link'>
                                    <a href="#" className="social-icon"><img src={linkdin} alt="linkdin" /></a>
                                </li>
                                <li className='social-link'>
                                    <a href="#" className="social-icon"><img src={Whatsapp} alt="Whatsapp" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-end align-items-center">
                        <p className='font-30 mb-0 text-black-secondry be-vietnam-pro-regular'>&copy; 2022 , All rights reserved</p>
                    </div>
                </div>
            </div>
            
        </footer>
    );
};

export default Footer;
