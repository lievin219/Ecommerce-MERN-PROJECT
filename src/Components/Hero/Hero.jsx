import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/Assets/arrow.png'
import hero_image from '../Assets/Assets/hero_image.png'
import hand_icon from '../Assets/Assets/hand_icon.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
               <h2>NEW ARRIVAL ONLY</h2>
            <div>
             
                <div className='hero-hand-icon'>
                
                 <p>NEW</p>
                    <img src={hand_icon} alt="" />
                </div>
          
                <p> Collection</p>
                <p> for everyone</p>
            </div>
             <div className='hero-lastest-icon'>
                <div> lastest collection</div>
                <img src={arrow_icon} alt="" />
             </div>
        </div>
        <div className='hero-right'>
            <img src={hero_image} alt="" />

        </div>
      
    </div>
  )
}

export default Hero
