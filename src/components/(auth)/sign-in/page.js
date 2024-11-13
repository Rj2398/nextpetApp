'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import routes from '../../../../config/routes'; 
// import { FormEvent } from 'react'
import { useRouter } from "next/navigation";
import axios from "axios";
// import Cookies from 'js-cookie';
import BASE_URL from '../../../utils/constant'
// import routes from "../../../../config/routes";

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validation_error, validationError] = useState('');
 
  const handleSubmit = async (e) => {
    e.preventDefault()
 
    const formData = new FormData();
    formData.append("emailOrPhone", email);
    formData.append("password", password);

    try {

      const response = await axios.post(`${BASE_URL}/api/login`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      //Login Successfully!!
      console.log(response);
      if(response.data.status_code!==200){
        validationError(response.data.message);
        console.log(response.data.message);
      }
      else{
        localStorage.setItem('name', response.data.data.name);
        localStorage.setItem('email', response.data.data.email);
        localStorage.setItem('breeder_user_id', response.data.data.user_id); 
        // const expireDate = new Date(new Date().getTime() + 15000 * 1000);
        // Cookies.set('name', response.data.data.name, { expires: expireDate });
        // Cookies.set('email', response.data.data.email, { expires: expireDate });
        // Cookies.set('user_id', response.data.data.user_id, { expires: expireDate });
        // Cookies.set('otp_email', response.data.otp, { expires: expireDate });
        router.push('/'); 
      }
    }
    catch (error) {
      // Handle errors
      validationError("Please Enter valid Email");
      console.log(error);
      
    }
  }
  return (
    <>
    <div className="breeder-signinflow-wrap">
      <div className="breeder-signinflow-inner">
        <div className="breeder-signin-leftsec">
          <Image src="/images/Nextpet-imgs/big-logo.svg" alt="Logo" width={150} height={150}/>
        </div>
        <div className="breeder-signin-rightsec">
          <form action="/index-withlogin" onSubmit={handleSubmit}>
            <h1>Breeder Sign In</h1>
            <label htmlFor="email" className="login-lbl">
              <Image src="/images/Nextpet-imgs/breeder-signin-imgs/mail-icon.svg" alt="Mail Icon" width={20} height={20}/>
              <input type="email" id="email" name="name" onChange={(e) => setEmail(e.target.value)} className="login-txt" placeholder="Email/Phone" required/>
            </label>
            <label htmlFor="password" className="login-lbl">
              <Image src="/images/Nextpet-imgs/breeder-signin-imgs/pass-icon.svg" alt="Password Icon" width={20} height={20}/>
              <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} name="password" className="login-txt" placeholder="Password" required/>
              <div className="password-eye"><i className="fas fa-eye-slash" id="eye"></i></div>
            </label>
            <p>{validation_error}</p>
            <div className="rembr-me">
              <Link href={routes.breeder_forget_password}>Forgot Password?</Link>
            </div>
            <input type="submit" className="login-btn" value="Sign In"/>
            <div className="or-sec-wrap">
              <h3>Or Sign In using</h3>
            </div>
        
            <div className="social-login-wrap">
              <a href="#"><Image src="/images/Nextpet-imgs/breeder-signin-imgs/socail1.png" alt="Social 1" width={40} height={40}/></a>
              <a href="#"><Image src="/images/Nextpet-imgs/breeder-signin-imgs/social2.png" alt="Social 2" width={40} height={40}/></a>
              <a href="#"><Image src="/images/Nextpet-imgs/breeder-signin-imgs/social3.png" alt="Social 3" width={40} height={40}/></a>
            </div>

            <div className="dont-have-accountwrap">
              <p>Don’t have an account? <Link href={routes.breeder_sign_up}>Sign Up</Link></p>
              
              <p>Not a Breeder? <Link href="#">Sign In</Link> as a User?</p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignIn;


