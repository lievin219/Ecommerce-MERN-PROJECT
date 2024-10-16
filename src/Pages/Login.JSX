

import React, { useEffect, useState } from 'react'
import './css/Login.css'
import Cookies from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify';
import useSignIn from 'react-auth-kit/hooks/useSignIn'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const notify = () => toast.success("Login Succesfully!");
  const notify_error = () => toast.error("Email Or Password Not Found !");
  const signin = useSignIn()
  const [state, setState] = useState('Login')
  const [getcookie, setGetcookie] = useState()
  const navigate = useNavigate()
  const [formData, setformData] = useState({
    role: "",
    email: "",
    password: ""
  });

  const changeHandler = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    const token = Cookies.get('authTokenii')
    setGetcookie(token)
  }, [])

  const LoginFunc = async () => {
    const authToken = Cookies.get('authTokenii')
    let responses = await fetch('https://backend-mernproject-u66q.onrender.com/login', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(formData)
    })

    let dataresponses = await responses.json()
    if (dataresponses.message && dataresponses.token) {
      const isSignedIn = signin({
        auth: {
          token: dataresponses.token,
          type: "Bearer",
        },
        userState: dataresponses.user,
      });

      if (isSignedIn) {
        notify()
        setformData({...formData,email:"",password:""})
        setTimeout(() => {
          navigate('/shop', { replace: true });
          window.location.reload();
        }, 3000); 
       
        
      } else {
        alert("Login failed, unable to sign in")
      }
    } else {
      notify_error()
     setformData({...formData,email:"",password:""})
                                            
    }
  }

  const Signup = async () => {
    try {
      let response = await fetch('https://backend-mernproject-u66q.onrender.com/Register', {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: "include",
        body: JSON.stringify(formData)
      })
      let responseData = await response.json();

      if (responseData.success) {
        navigate('/login', { replace: true })
     
      } else {
        alert(`Error: ${responseData.error}`)
      }
    } catch (err) {
      alert("Registration failed")
    }
  }

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>{state}</h1>
        <div className='loginsignuppage-fields'>
          {state === 'Sign up' && <input type="text" name='role' onChange={changeHandler} value={formData.role} placeholder='Your Role' />}
          <input type="text" name='email' onChange={changeHandler} value={formData.email} placeholder='Email Address' />
          <input type="password" onChange={changeHandler} name='password' value={formData.password} placeholder='Enter your Password' />
        </div>
        <button onClick={() => {
          state === 'Login' ? LoginFunc() : Signup()
        }}>Continue</button>
        {state === 'Login' ?
          <p className='loginsignup-login'>Create an account? <span onClick={() => setState('Sign up')}>Signup Here</span></p> :
          <p className='loginsignup-login'>Already have an account? <span onClick={() => setState("Login")}>Login Here</span></p>}
        <div className='loginsignup-agree'>
          <input type="checkbox" />
          <p>By continuing, you agree to the terms of use and policy</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login

