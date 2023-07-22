import React from 'react';
import "./feature.css";
import design from "../../assets/design.png";
const Feature = ({title, text}) => {
  return (
    <div className='gpt3__feature-containers__feature'>
      <div className='gpt3__feature-containers__title'>
        <img src={design} alt='design'/>
        <h1>{title}</h1>
      </div>
      <div className='gpt3__feature-containers__text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature
