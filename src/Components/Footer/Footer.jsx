import React from 'react'
import './Footer.css'
import footer_image from '../Assets/Assets/logo_big.png'
import instagram_icon from '../Assets/Assets/instagram_icon.png'
import pintester_icon from '../Assets/Assets/pintester_icon.png'
import whatsapp_icon  from '../Assets/Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'> 
       <img src={footer_image} alt="" />
       
        <p>Shooper</p>

      </div>
       <ul className='footer-links'>
          <li>Company</li>
          <li>Products</li>
          <li>About</li>
          <li>Offices</li>
          <li>Contacts</li>
       </ul>
        <div className='footer-social-icon'>
           
               <div className='footer-icons-container'>
                 <img src={instagram_icon} alt="" />

                </div>
                   <div className='footer-icons-container'>
                      <img src={pintester_icon} alt="" />

                   </div>
                   <div className='footer-icons-container'>
                <img src={whatsapp_icon} alt="" />

            </div>

        </div>
              <div className='footer-copyright'>
                <hr />
                <p>Gakiza_L copyright @2024 - all rights reserved</p>
                


              </div>
    </div>
  )
}

export default Footer
