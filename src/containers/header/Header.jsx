import React from 'react';
import "./header.css";
import group from "../../assets/Group 81.png";
import AIimage from "../../assets/Header Illustration.png";

const Header = () => {
    return(
    <div className="gpt3__header section__padding" id='home'>
      <div className='gpt3__header-contents'>
          <h1 className='gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        
        <div className='gpt3__header-contents_input'>
          <input type='email' placeholder='Your Email Address'/>
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt3__header-contents_group'>
          <img src={group} alt='group'/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

        <div className='gpt3__header-image'>
          <img src={AIimage} alt='AIimage'/>
        </div>
    </div>
    );
}

export default Header;