"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
import BASE_URL from '../../../../utils/constant'
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";
const ResetPassword = () => {

  const [passworrd, setPassword] = useState(null);
  const [cPassworrd, setCPassword] = useState(null);

  const router = useRouter();

  const email = Cookies.get('email');
  console.log(email);

  const SubmitForm = async (e) =>{
    e.preventDefault();
    console.log("passworrd",passworrd);
    console.log("cPassworrd",cPassworrd);

    if(passworrd===cPassworrd){
      //Write Here Api code update password

      const formData = new FormData();
      if (email) {
        formData.append("email", email);
        console.log("emailemailemail",email);
        
      } else {
          console.error("Error: Email cookie is not set or has expired.");
          toast.error("Email Cookie Expired");
          return;
      }
      
      formData.append("password", passworrd);
      formData.append("conform_password", cPassworrd);
      
      try {
        const response = await axios.post(`${BASE_URL}/api/password_create`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
  
        toast.success("Password Updated!");
        router.push('/breeder/sign-in')
      } catch (error) {
        console.error("Error during password update:", error); 
        toast.error("Error updating password. Please try again.");
      }  
    }
    else{
      toast.error("Passwords NOT match");
      return;
    }
  }
  
  return (
    <>
     <main>
        <div className="breeder-signinflow-wrap">
          <div className="breeder-signinflow-inner">
            <div className="breeder-signin-leftsec">
              <img src="/images/Nextpet-imgs/big-logo.svg" alt="" loading="lazy"/>
            </div>
            <div className="breeder-signin-rightsec">
              <form onSubmit={SubmitForm}>
                <h1>Reset Password</h1>
                <label className="login-lbl">
                  <img src="/images/Nextpet-imgs/breeder-signin-imgs/pass-icon.svg"/>
                  <input type="password" className="login-txt" id="password" value={passworrd} onChange={(e)=>setPassword(e.target.value)} placeholder="New Password" required/>
                  <div className="password-eye"><i className="fas fa-eye-slash" id="eye"></i></div>
                  {/* <div className="checkicon-pass">
                    <img src="/images/Nextpet-imgs/breeder-signin-imgs/password-check-icon.svg" alt=""/>
                  </div> */}
                </label>
                <label className="login-lbl">
                  <img src="/images/Nextpet-imgs/breeder-signin-imgs/pass-icon.svg"/>
                  <input type="password" className="login-txt" id="password2" value={cPassworrd} onChange={(e)=>setCPassword(e.target.value)} placeholder="Confirm New Password" required/>
                  <div className="password-eye"><i className="fas fa-eye-slash" id="eye2"></i></div>
                  {/* <div className="checkicon-pass">
                    <img src="/images/Nextpet-imgs/breeder-signin-imgs/password-cross-icon.svg" alt=""/>
                  </div> */}
                </label>
                <input type="submit" className="login-btn" value="Reset Password"/>
              </form>
            </div>
          </div>
        </div>
    </main>
    </>
  )
}

export default ResetPassword;