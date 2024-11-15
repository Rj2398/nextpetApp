"use client";
import React, { useEffect, useState } from "react";
import BASE_URL from "../app/utils/constant";
import axios from "axios";
import Image from "next/image";
import Script from "next/script";

function Footer() {
  const [homePageData, setHomePageData] = useState([]);
  useEffect(() => {
    getHomePageData();
  }, []);

  const getHomePageData = async () => {
    let apiURL = `${BASE_URL}/api/get_homepage`;
    try {
      const response = await axios.get(apiURL);
      if (response.data.code === 200) {
        setHomePageData(response.data.data);
      }
    } catch (err) {
      console.log("error : ", err);
    }
  };

  return (
    <>
      <footer>
        <div className="footer-wrap">
          <div className="container">
            <div className="footer-logo-wrap">
              <img
                src={
                  homePageData?.section_four_logo_image
                    ? `${BASE_URL}${"/"}${
                        homePageData?.section_four_logo_image
                      }`
                    : "/images/Nextpet-imgs/banner-imgs/dog.png"
                }
                alt="Footer Logo"
              />
              <p>{homePageData?.section_four_footer_text}</p>
            </div>
            <div className="footer-quick-links">
              <a href="index.html">Home</a>
              <a href="#">About</a>
              <a href="#">Pets</a>
              <a href="#">Breeders</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
            <div className="footer-social-wrap">
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src="/images/Nextpet-imgs/all-icons/twitter-x.svg"
                      alt="Twitter"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-bottom-wrap">
              <a href="#">Copyright ©2024. All Rights Reserved.</a>
              <div className="download-footer-applink">
                <p>Download the NextPet App!</p>
                <a href="#">
                  <Image
                    src="/images/Nextpet-imgs/download-app-imgs/appstore.png"
                    alt="App Store"
                    width={135}
                    height={40}
                  />
                </a>
                <a href="#">
                  <Image
                    src="/images/Nextpet-imgs/download-app-imgs/googleplay.png"
                    alt="Google Play"
                    width={135}
                    height={40}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Script src="/js/jquery.js" strategy="beforeInteractive" />
      <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
      <Script src="/js/custom.js" strategy="beforeInteractive" />
      <Script src="/js/owl-slider.js" strategy="beforeInteractive" />
      <Script src="/js/animation.js" strategy="beforeInteractive" />
      {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" strategy="beforeInteractive" /> */}
      {/* <Script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"/> */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" />
    </>
  );
}

export default Footer;
