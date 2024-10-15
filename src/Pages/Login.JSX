// import React, { useEffect } from 'react'
// import './css/Login.css'
// import Cookies from 'js-cookie'
// import useSignIn from 'react-auth-kit/hooks/useSignIn'

// import { useState } from 'react'
// import {replace, useNavigate }from 'react-router-dom';
 
// const Login = () => {

//   const signin=useSignIn()
    

         

//      const[state,setState]=useState('Login')
//       const[getcookie,setGetcookie]=useState()
//       const navigate=useNavigate()
      
//       const[formData,setformData]=useState({
//          role:"",
//          email:"",
//          password:""
//       });
  
//        const changeHandler=(e)=>{
//           setformData({...formData,[e.target.name]:e.target.value})
//        }
//         useEffect(()=>{
//                   const token=Cookies.get('authTokenii')
//                    setGetcookie(token)

//         },[])
        
//        const LoginFunc=async()=>{
//         const authToken=Cookies.get('authTokenii')
//     let responses=await fetch('http://localhost:4000/login',{
//        method:'POST', headers:{
//        'Authorization': `Bearer ${authToken}`,
//         'Content-Type':'application/json'
//       },
//       credentials:'include',
//       body:JSON.stringify(formData)
//     })
   
//      let dataresponses= await responses.json()
//        if(dataresponses.message){
//         if (dataresponses.token) {
//           signin({
//              token: dataresponses.token,
//              expiresIn: 5,
//              tokenType: "Bearer",
//              authState: { email: formData.email }
//           });
//        } else {
//           alert("Login failed, token not provided");
//        }
//          alert(`${dataresponses.message}`)
//          navigate('/shop',{replace:true})    
//          window.location.reload()
         
                                                   
//        }
//       else{
//          alert(`input password or email may not be correct`)


         
//       }
            
         
//        }
//          const Signup= async()=>{
//            let responseData;

//       try{   let response= await fetch('http://localhost:4000/Register',{
//              method:"POST",
//              headers:{
//                Accept:'application/json',
//                'Content-Type':'application/json'
//              },
//              credentials:"include",
//              body:JSON.stringify(formData)
//            })
//              responseData=await response.json();
              

//           if(responseData.success){
//                alert('User registered Succesfully')
//               navigate('/login',{replace:true})
            
//             }
//            else if(responseData.status===400) {
//              alert('invalid')
//            }
//            else{
//              alert(`Error:${responseData.error}`)
//            }

//           }
//              catch(err){
//                alert(`failed`)
//              }
                 
   
//          }
   
    
//   return (
//     <div className='loginsignup'>
//       <div className='loginsignup-container'>
//         <h1> {state}</h1>
//         <div className='loginsignuppage-fields'>
//         {state==='Sign up'? <input type="text" name='role' onChange={changeHandler} value={formData.role} placeholder='Your Role'/> :<></>}  
//           <input type="text" name='email' onChange={changeHandler} value={formData.email}  placeholder='Email Address'/>
//           <input type="password" onChange={changeHandler} name='password' value={formData.password} placeholder='Enter your Password'/>

         
//         </div>
//                   <button onClick={()=>{
//                        state==='Login'?LoginFunc():Signup()
//                   }}>continue</button>
//                {state==='Login'?<p className='loginsignup-login'>Create  an account ?<span onClick={()=>{
//                 setState('Sign up')
//                }}>Signup  Here</span> </p>  :<p className='loginsignup-login'>Already have an account ?<span onClick={()=>{
//                  setState("Login")
//                }}>Login Here</span> </p>} 
               
//                   <div className='loginsignup-agree'>
//                     <input type="checkbox"/>
//                     <p>by continuing you have to agree to terms of use and policy</p>
//                   </div>
//       </div>
      
//     </div>
//   )
// }

// export default Login

import React, { useEffect, useState } from 'react'
import './css/Login.css'
import Cookies from 'js-cookie'
import useSignIn from 'react-auth-kit/hooks/useSignIn'
import { useNavigate } from 'react-router-dom';

const Login = () => {
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
        alert('for the user')
        navigate('/cart', { replace: true })
        window.location.reload()
      } else {
        alert("Login failed, unable to sign in")
      }
    } else {
      alert("Invalid email or password")                                                        
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
    </div>
  )
}

export default Login

