import React from 'react'

import AboutImg from "../../assets/images/proxy-image (30).jpg"
const About = () => {
  return (
    <>
      <section className='about' id='about'>
      <h1 className='heading'>
        <span>about</span> us
        </h1>
      <div className='row'>
        <div className='image'>
            <img src={AboutImg} alt=''/>
        </div>
        <div className='content'>
          <h3>What Makes Our Food Special?</h3>
          <p>We use only the freshest ingredients and timeless recipes to create dishes full of flavor and heart. Every meal is prepared with care to give you a satisfying and memorable taste.</p>
          <p>Our passion for quality and taste shines through in every bite you enjoy.</p>
          <button className='btn'>Learn More</button>
        </div>
      </div>
      </section>
    </>
  )
}
export default About;
