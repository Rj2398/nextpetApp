
"use client";
import React, { useState } from "react";
// import { useEffect } from 'react';
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import routes from "../../../../config/routes";
import axios from "axios";
import Cookies from 'js-cookie';
import BASE_URL from '../../../utils/constant'

// import { toast } from 'react-toastify';


const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await axios.post(`${BASE_URL}/api/UserLogin_first`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.data.msg_type === "false") {
        // Display validation errors
        console.log(response.data);
        setErrorMessage(response.data.msg || 'Validation error');
        setSuccessMessage('');
        setError("");
      } else {
        // Display success message
    
        const expireDate = new Date(new Date().getTime() + 190 * 1000);
        Cookies.set('name', name, { expires: expireDate });
        Cookies.set('email', email, { expires: expireDate });
        Cookies.set('password', password, { expires: expireDate });
        Cookies.set('otp_email', response.data.otp, { expires: expireDate });
        
        setSuccessMessage(response.data.msg || 'Registration successful');
        setErrorMessage('');
        router.push(routes.breeder_varification_code);
      }
    } catch (error) {
      // Handle errors
      console.error("Error registering user:", error);
      setErrorMessage('An unexpected error occurred. Please try again.');
      setSuccessMessage('');
    }
    // finally {
    //   setLoading(false);
    // }
    
  };

  return (
    <>
      <div className="breeder-signinflow-wrap">
        <div className="breeder-signinflow-inner">
          <div className="breeder-signin-leftsec">
            <Image
              src="/images/Nextpet-imgs/big-logo.svg"
              alt="Logo"
              width={200}
              height={200}
            />
          </div>
          <div className="breeder-signin-rightsec">
            <form onSubmit={handleSignUp}>
              <h1>Breeder Sign Up</h1>
              <label className="login-lbl">
                <Image
                  src="/images/Nextpet-imgs/breeder-signin-imgs/user.svg"
                  alt="User Icon"
                  width={20}
                  height={20}
                />
                <input
                  type="text"
                  className="login-txt"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="login-lbl">
                <Image
                  src="/images/Nextpet-imgs/breeder-signin-imgs/mail-icon.svg"
                  alt="Email Icon"
                  width={20}
                  height={20}
                />
                <input
                  type="email"
                  className="login-txt"
                  placeholder="Email/Phone"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="login-lbl">
                <Image
                  src="/images/Nextpet-imgs/breeder-signin-imgs/pass-icon.svg"
                  alt="Password Icon"
                  width={20}
                  height={20}
                />
                <input
                  type="password"
                  className="login-txt"
                  id="password"
                  placeholder="Create Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="password-eye">
                  <i className="fas fa-eye-slash" id="eye"></i>
                </div>
              </label>
              {/* ************************************************ */}
              {errorMessage && (
                <div style={{ color: 'red', marginTop: '10px' }}>
                  {errorMessage}
                </div>
              )}
              
              {successMessage && (
                <div style={{ color: 'green', marginTop: '10px' }}>
                  {successMessage}
                </div>
              )}
              {/* **************************************************  */}
              <input type="submit" className="login-btn" value="Sign Up" />
              {error && <p className="error-message">{error}</p>}

              <div className="terms-condition-paragraph">
                <p>
                  By signing up, you agree to our <a href="#">Privacy Policy</a>{" "}
                  and <a href="#">Terms and Conditions</a>.
                </p>
              </div>
              <div className="or-sec-wrap">
                <h3>Or Sign Up using</h3>
              </div>
              {/* SOCIAL LOGIN */}
              <div className="social-login-wrap">
                <a href="#">
                  <Image
                    src="/images/Nextpet-imgs/breeder-signin-imgs/socail1.png"
                    alt="Social 1"
                    width={30}
                    height={30}
                  />
                </a>
                <a href="#">
                  <Image
                    src="/images/Nextpet-imgs/breeder-signin-imgs/social2.png"
                    alt="Social 2"
                    width={30}
                    height={30}
                  />
                </a>
                <a href="#">
                  <Image
                    src="/images/Nextpet-imgs/breeder-signin-imgs/social3.png"
                    alt="Social 3"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
             
             
              <div className="dont-have-accountwrap">
                <p>
                  Don&apos;t have an account?{" "}
                  <Link href={routes.breeder_sign_in}>Sign In</Link>
                </p>
                <p>
                  Not a Breeder? <a href="#">Sign Up</a> as a User?
                </p>
              </div>
             
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
















// "use client";
// import React, { useState } from 'react';
// import axios from 'axios';

// const RegistrationForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("password", password);

//     try {
//       const response = await axios.post("https://admin.nextpetapp.com/api/UserLogin_first", formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response.data.msg_type === "false") {
//         // Display validation errors
//         setErrorMessage(response.data.msg || 'Validation error');
//         // setSuccessMessage('');
//       } else {
//         // Display success message
//         setSuccessMessage(response.data.msg || 'Registration successful');
//         // setErrorMessage('');
//       }
//     } catch (error) {
//       // Handle unexpected errors
//       console.error("Error registering user:", error);
//       setErrorMessage('An unexpected error occurred. Please try again.');
//       setSuccessMessage('');
//     }
//   };

//   return (
//     <form onSubmit={handleSignUp}>
//       <div>
//         <label>Name</label>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </div>
//       <div>
//         <label>Email</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </div>
//       <div>
//         <label>Password</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </div>
//       <button type="submit">Register</button>

//       {errorMessage && (
//         <div style={{ color: 'red', marginTop: '10px' }}>
//           {errorMessage}
//         </div>
//       )}
//       {successMessage && (
//         <div style={{ color: 'green', marginTop: '10px' }}>
//           {successMessage}
//         </div>
//       )}
//     </form>
//   );
// };

// export default RegistrationForm;

