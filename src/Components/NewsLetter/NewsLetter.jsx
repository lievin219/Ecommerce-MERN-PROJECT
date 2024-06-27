import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offerrs On Your Email</h1>
        <p>Subscribe To Our NewsLetter</p>
        <div>
            <input type="email" placeholder='Enter Email Id '/>
            <button>Subbscribe</button>
        </div>
      
    </div>
  )
}

export default NewsLetter
