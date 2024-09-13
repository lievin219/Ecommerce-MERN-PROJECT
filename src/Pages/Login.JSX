import React, { useEffect } from 'react'
import './css/Login.css'
import Cookies from 'js-cookie'
import { useState } from 'react'
import {replace, useNavigate }from 'react-router-dom';
const Login = () => {


    

         

     const[state,setState]=useState('Login')
      const[getcookie,setGetcookie]=useState()
      const navigate=useNavigate()
      
      const[formData,setformData]=useState({
         role:"",
         email:"",
         password:""
      });
  
       const changeHandler=(e)=>{
          setformData({...formData,[e.target.name]:e.target.value})
       }
        useEffect(()=>{
                  const token=Cookies.get('authTokenii')
                   setGetcookie(token)

        },[])
        
       const LoginFunc=async()=>{

    let responses=await fetch('https://backend-mernproject-u66q.onrender.com/login',{
       method:'POST', headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      credentials:'include',
      body:JSON.stringify(formData)
    })
   
     let dataresponses= await responses.json()
       if(dataresponses.message){
         alert(`${dataresponses.message}`)
     navigate('/shop',{replace:true})
                                                   
       }
      else{
         alert(`it have failed!!`)


         
      }
            
         
       }
         const Signup= async()=>{
           let responseData;

      try{   let response= await fetch('https://backend-mernproject-u66q.onrender.com/Register',{
             method:"POST",
             headers:{
               Accept:'application/json',
               'Content-Type':'application/json'
             },
             body:JSON.stringify(formData)
           })
             responseData=await response.json();
              

          if(responseData.success){
               alert('User registered Succesfully')
              navigate('/login',{replace:true})
            
            }
           else if(responseData.status===400) {
             alert('invalid')
           }
           else{
             alert(`Error:${responseData.error}`)
           }

          }
             catch(err){
               alert(`failed`)
             }
                 
   
         }
   
    
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1> {state}</h1>
        <div className='loginsignuppage-fields'>
        {state==='Sign up'? <input type="text" name='role' onChange={changeHandler} value={formData.role} placeholder='Your Role'/> :<></>}  
          <input type="text" name='email' onChange={changeHandler} value={formData.email}  placeholder='Email Address'/>
          <input type="password" onChange={changeHandler} name='password' value={formData.password} placeholder='Enter your Password'/>

         
        </div>
                  <button onClick={()=>{
                       state==='Login'?LoginFunc():Signup()
                  }}>continue</button>
               {state==='Login'?<p className='loginsignup-login'>Create  an account ?<span onClick={()=>{
                setState('Sign up')
               }}>Signup  Here</span> </p>  :<p className='loginsignup-login'>Already have an account ?<span onClick={()=>{
                 setState("Login")
               }}>Login Here</span> </p>} 
               
                  <div className='loginsignup-agree'>
                    <input type="checkbox"/>
                    <p>by continuing you have to agree to terms of use and policy</p>
                  </div>
      </div>
      
    </div>
  )
}

export default Login
