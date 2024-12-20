import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <div>
            <footer>
                <div className=" footer-section flex">
                    <div className="socials flex">
                        <h3>Socials</h3>
                        <ul>
                            <li className="insta flex">
                                <FontAwesomeIcon icon={faInstagram} size="xl" />
                                <Link to="https://www.instagram.com/raimath_420" target="_blank" rel="noreferrer">glance.com</Link>
                            </li>

                            <li className="linkedin flex">
                                <FontAwesomeIcon icon={faLinkedin} size="xl" />
                                <Link to="https://linkedin.com/in/raimath-ali/" target="_blank" rel="noreferrer">Linkedin/glance.com</Link>
                            </li>

                            <li className="github flex">
                                <FontAwesomeIcon icon={faGithub} size="xl" />
                                <Link to="https://github.com/Raimath420" target="_blank" rel="noreferrer">Github/glance.com</Link>
                            </li>

                            <li className="facebook flex">
                                <FontAwesomeIcon icon={faFacebook} size="xl" />
                                <Link to="https://www.facebook.com/" target="_blank" rel="noreferrer">glance.com</Link>
                            </li>

                            <li className="twitter flex">
                                <FontAwesomeIcon icon={faTwitter} size="xl" />
                                <Link to="https://www.twitter.com" target="_blank" rel="noreferrer">glance.com</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navigation footer-navigations flex">
                        <h3>Navigations</h3>
                        <ul className='footer-nav-list flex'>
                            <li><NavLink to={"/home"}> Home</NavLink></li>
                            <li><NavLink to={"/shop"}> Shop</NavLink></li>
                            <li><NavLink to={"/services" }> Services</NavLink></li>
                            <li><NavLink to={"/contact"}> Contact</NavLink></li>
                            <li><NavLink to={"/tc"}> Terms and Conditions</NavLink></li>
                        </ul>
                    </div>
                    <div className=" help flex">
                        <h3>Reach us</h3>
                        <div className='address flex'>
                        <ul >
                            <li className="flex">
                            <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                                website@gmail.com
                            </li>

                            <li className="flex">
                            <FontAwesomeIcon icon={faPhone} size="lg"/>
                            808-9932420420
                            </li>

                            <li className="flex">
                            <FontAwesomeIcon icon={faLocationDot} size="lg"/>
                                <address> glance.com office<br/> Near Bustand GANGAVATHI<br/>  Karnataka 583253 India</address>
                            </li>

                            
                        </ul>
                        </div>
                    </div>

                </div>
                <div className="copy">
                    <h4>Copyrights&copy; All Rights Resevered By glance.com</h4>
                </div>
            </footer>
        </div>
    )
}

export default Footer