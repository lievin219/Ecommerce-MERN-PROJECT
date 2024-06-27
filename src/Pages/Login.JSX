import React from 'react'
import './css/Login.css'

const Login = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1> signup</h1>
        <div className='loginsignuppage-fields'>
          <input type="text"  placeholder='Your Name'/>
          <input type="text"  placeholder='Email Address'/>
          <input type="password" placeholder='Enter your password'/>

        </div>
                  <button>continue</button>
                  <p className='loginsignup-login'>Already have an account ?<span>Login Here</span> </p>
                  <div className='loginsignup-agree'>
                    <input type="checkbox"/>
                    <p>by continuing you have to agree to terms of use and policy</p>
                  </div>
      </div>
      
    </div>
  )
}

export default Login
