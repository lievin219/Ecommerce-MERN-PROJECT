import React from 'react'
import './css/Login.css'
import { useState } from 'react'
import {useNavigate }from 'react-router-dom';
const Login = () => {


    

         

     const[state,setState]=useState('Login')
      const navigate=useNavigate()
      const[formData,setformData]=useState({
         role:"",
         email:"",
         password:""
      });
  
       const changeHandler=(e)=>{
          setformData({...formData,[e.target.name]:e.target.value})
       }
        
       const LoginFunc=async()=>{

    let responses=await fetch(' http://localhost:4000/Login',{
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
         window.location.replace('/')
       
       }
            
         
       }
         const Signup= async()=>{
           let responseData;

      try{   let response= await fetch('http://localhost:4000/Register',{
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
               navigate.push('/')
            
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
