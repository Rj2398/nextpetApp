"use client";
import { useState } from "react";
// import { toast } from "react-toastify";
import { toast } from "react-toastify";
const ResetPassword = () => {

  const [passworrd, setPassword] = useState(null);
  const [cPassworrd, setCPassword] = useState(null);

  const SubmitForm = (e) =>{
    e.preventDefault();
    console.log("passworrd",passworrd);
    console.log("cPassworrd",cPassworrd);
    // if(!passworrd || !cPassword){
    //   toast.error("both field required!");
    // }
    if(passworrd===cPassworrd){
      //Write Here Api code update password



      toast.success("Password Updated!");
    }
    else{
      toast.error("Passwords do NOT match");
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