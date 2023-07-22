import React from 'react';
import "./footer.css";
import logo from '../../assets/GPT-3.svg'
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-title'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>

      <div className='gpt3__footer-button'>
        <button type='button'>Request Early Access</button>
      </div>

      <div className='gpt3__footer-content'>
        <div className='gpt3__footer-content_logo'>
          <img src={logo} alt='logo'/>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        
        <div className='gpt3__footer-content_links'>
          <h1>Links</h1>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className='gpt3__footer-content_company'>
          <h1>Company</h1>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className='gpt3__footer-content_contact'>
        <h1>Get in touch</h1>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
        </div>
      </div>
      
      <div className='gpt3__footer-last'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>

    </div>
  )
}

export default Footer