import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/Assets/hand_icon.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
          <h2>NEW ARRIVAL ONLY</h2>
             <div>
             
                <div className='hand-icon'>
                
                 <p>NEW</p>
                    <img src={hand_icon} alt="" />
                </div>
          
                <p> Collection</p>
                <p> for everyone</p>
            </div>
        </div>
        <div className='hero-right'>

        </div>
      
    </div>
  )
}

export default Hero
