import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail, MdWidthFull } from "react-icons/md";
import { LuClock3 } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className="footer" >
      <div className="Contacts-title"
       style={{ flex: '0.4'}}
       >
        <h3>Contacts</h3>
      <div className='contact-details'>
        <p>
          <FaLocationDot />
          Main GT Road Muridke
        </p>
        <p>
          <FaPhoneAlt />    
          Phone:
          <a href="tel:0309 1020111">  0309 1020111</a>
        </p>
        <p>
          <MdOutlineEmail />
          Email: 
          <a href="Thegrill492@gmail.com">   Thegrill492@gmail.com</a>
         </p>
      </div> <br /><br /><br />
      <h3>Support</h3>
        <p>Advertise with Us</p>
        <p>Terms of  Service</p>
        <p>Privacy Policy</p>
        <p>Contact us</p>
      </div><br /><br /><br />
      
      <div className="footer-title">
        <h3>Follow Us</h3><br />
        <div className='footer-icons'>
          <FaFacebook />
          <FaTwitter />
          <FaInstagramSquare />
          <FaPinterest />
        </div>
        <div className='elementor-widget-container'>
          <h2>
            SUBSCRIBE TO OUR NEWSLETTER 
          </h2>
          <p>
            Sign up to receive news and updates
          </p>
        </div>
        <div className='email'>
          <input className='footer-email' type="email" placeholder='Enter your email address' />  
          <button className='btn' type='submit'>Subscribe</button>
        </div>
        <div className='notice'>
          <input type="checkbox"
           style={{ marginRight: '10px' }}
           />   
          <span className='notice-copy'>
            I agree to my email address being stored and uses to receive monthly newsletter.
          </span>
        </div>
      </div>
      <div className='location'>
      <div className="location-content">
        <h3>Visit Us</h3>
      <div className='map-section'>
        <iframe width="500" height="320" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"  src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Qamar%20Sialvi%20Rd,%20opp.%20AFC,%20Gulberg%20Colony,%20Gujrat,%2050700+(The%20Grill)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>
      </div>
      </div>
    </div>
    <div className='thankyou'>
      <img src="https://le-mugs.com/wp-content/themes/mugs/images/thankyou.svg" alt="" />
    </div>
    <div id='legal_line'>
      Copyright © The Upper Crust 2025 All Rights Reserved
    </div>
    </>
  )
}

export default Footer