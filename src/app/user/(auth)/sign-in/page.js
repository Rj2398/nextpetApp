"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginBreeder } from "../../../services/user/loginService"; // Import the login service
import routes from "../../../../config/routes";

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("emailOrPhone", email);
    formData.append("password", password);

    try {
      const response = await loginBreeder(formData);

      if (response.data.status_code !== 200) {
        setValidationError(response.data.message);
      } else {
        // Store user data in localStorage or cookies as required

        localStorage.setItem("name", response.data.data.name);
        localStorage.setItem("email", response.data.data.email);
        localStorage.setItem("user_user_id", response.data.data.user_id);
        // router.push("/");
        window.location.href = "/";
      }
    } catch (error) {
      setValidationError(error.message || "Please enter valid credentials.");
    }
  };

  return (
    <div className="breeder-signinflow-wrap">
      <div className="breeder-signinflow-inner">
        <div className="breeder-signin-leftsec">
          <Image
            src="/images/Nextpet-imgs/big-logo.svg"
            alt="Logo"
            width={150}
            height={150}
          />
        </div>
        <div className="breeder-signin-rightsec">
          <form onSubmit={handleSubmit}>
            <h1>User Sign In</h1>
            <label htmlFor="email" className="login-lbl">
              <Image
                src="/images/Nextpet-imgs/breeder-signin-imgs/mail-icon.svg"
                alt="Mail Icon"
                width={20}
                height={20}
              />
              <input
                type="email"
                id="email"
                name="name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-txt"
                placeholder="Email/Phone"
                required
              />
            </label>
            <label htmlFor="password" className="login-lbl">
              <Image
                src="/images/Nextpet-imgs/breeder-signin-imgs/pass-icon.svg"
                alt="Password Icon"
                width={20}
                height={20}
              />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                className="login-txt"
                placeholder="Password"
                required
              />
              <div className="password-eye">
                <i className="fas fa-eye-slash" id="eye"></i>
              </div>
            </label>
            {validationError && (
              <p className="error-message">{validationError}</p>
            )}
            <div className="rembr-me">
              <Link href="/user/forget-password">Forgot Password?</Link>
            </div>
            <input type="submit" className="login-btn" value="Sign In" />
            <div className="or-sec-wrap">
              <h3>Or Sign In using</h3>
            </div>
            <div className="social-login-wrap">
              <a href="#">
                <Image
                  src="/images/Nextpet-imgs/breeder-signin-imgs/socail1.png"
                  alt="Social 1"
                  width={40}
                  height={40}
                />
              </a>
              <a href="#">
                <Image
                  src="/images/Nextpet-imgs/breeder-signin-imgs/social2.png"
                  alt="Social 2"
                  width={40}
                  height={40}
                />
              </a>
              <a href="#">
                <Image
                  src="/images/Nextpet-imgs/breeder-signin-imgs/social3.png"
                  alt="Social 3"
                  width={40}
                  height={40}
                />
              </a>
            </div>
            <div className="dont-have-accountwrap">
              <p>
                Don’t have an account? <Link href="/user/sign-up">Sign Up</Link>
              </p>
              <p>
                Not a User? <Link href="/breeder/sign-in">Sign In</Link> as a
                Breeder?
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
