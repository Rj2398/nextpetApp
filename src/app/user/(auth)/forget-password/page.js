"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
// import OtpInput from 'react-otp-input';
import Cookies from 'js-cookie';
import BASE_URL from '../../../utils/constant'

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [validation_error, validationError] = useState('');
  //Res

  const router = useRouter();
  const handleEmailVarification = async (e) => {
    e.preventDefault()
 
    const formData = new FormData();
    formData.append("email", email);

    try {
      // API call to register the user
      const response = await axios.post(`${BASE_URL}/api/user_forget_password`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      //Login Successfully!!
      // console.log(response.data);
      if(response.data.code!==200){
        validationError(response.data.message);
        // console.log(response.data.message);
      }
      else{
        const expireDate = new Date(new Date().getTime() + 1800 * 1000);
        Cookies.set('email', response.data.email, { expires: expireDate });
        // Cookies.set('otp_email',  response.data.otp, { expires: expireDate });
        // Cookies.set('otp_email', response.data.otp, { expires: expireDate });
        Cookies.set('otp_email', response.data.otp, { expires: expireDate });
        // console.log(response);
        router.push("/user/forget-password/otp_varification");
      }
    }
    catch (error) {
      console.log(error);
      
    }
  }

  return (
    <>
      <>
      <div className="breeder-signinflow-wrap">
        <div className="breeder-signinflow-inner">
          <div className="breeder-signin-leftsec">
            <Image src="/images/Nextpet-imgs/big-logo.svg" alt="" width={50} height={15}/>
          </div>
          <div className="breeder-signin-rightsec">
            <form method="POSt" onSubmit={handleEmailVarification}>
              <h1>U Forgot Password</h1>
              <label for="" className="login-lbl">
                <Image src="/images/Nextpet-imgs/breeder-signin-imgs/mail-icon.svg" alt="" width={50} height={15}/>
                <input type="email" className="login-txt" onChange={(e) => setEmail(e.target.value)} placeholder="Email/Phone" required/>
              </label>
              <spam>{validation_error}</spam>
              <input type="submit" className="login-btn" value="Send Verification"/>
            </form>
          </div>
        </div>
      </div>
      </>
    </>
  )
}

export default ForgetPassword