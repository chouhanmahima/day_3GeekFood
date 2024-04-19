import React from 'react'
import './HeroSection.css'
import imageOfHouse from "../assets/images/imageOfHouse.avif"
import HeroImg from "./../assets/images/heroSectionBackground.avif";

const HeroSection = () => {

  return (
    <div className="hero-section-main">

      <div id='hero-section'>
        <div>
          <h1><span>Let us find your</span> <span>Forever Food.</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
          <div>
            <button className='btn1'>Search Now</button>
            <button className='btn2'>Know more</button>
          </div>
        </div>
      </div>

      <div id='second-section'>
        <div></div>
        <div id='second-section-gray-div'></div>
        <div id='second-section-content'>
          <img src={imageOfHouse} alt="image of a house" />
          <div>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
            <p className='para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
            <button className='btn3'>Get In Touch</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HeroSection