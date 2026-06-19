import React from 'react'
const Home = () => {
  return (
    <>
    
    {/* smooth scroll py chlany k liye hum ny esy id di. R text ko image py likhny k liye hmy is class(content) ko home k ander likhna ho ga otherwise ye text image py nhi blky image k nichy show ho gi */}
      
      <section className='home' id='home'>
        <video
        className="video-bg"
        src="https://v1.pinimg.com/videos/mc/720p/b7/c9/72/b7c9726ae9c07e341ff9a5c9c2458541.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
        <div className='content'>
          <h3>Crafted with <span>Freshness,</span> Served with <span>Love</span></h3>  
          <p>Every meal is a masterpiece made with fresh ingredients and passion. Come enjoy the perfect blend of taste and quality in every bite.</p>
          <button className='btn'>Get Yours Now</button>
        </div>
      </section>
    </>
  )
}
export default Home;