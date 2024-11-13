"use client";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HomeRecentlyPostedSlider = ({ slides, onLike }) => {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setSlidesPerView(1);
      } else if (window.innerWidth <= 1000) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(4);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log("Recently Posted ::", slides);

  return (
    <div className="recentposted-cat-dog-wrap" style={{ position: "relative" }}>
      <div className="custom-navigation">
        <button ref={prevRef} className="swiper-button-prev" />
        <button ref={nextRef} className="swiper-button-next" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="col-lg-12">
              <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={30}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div
                      id="recentposted-cat-dog-slider"
                      className="owl-carousel"
                    >
                      <div className="recentposted-cat-dog-in">
                        <div className="recentposted-catimg-wrap">
                          <img src={slide.image[0]} alt="" loading="lazy" />
                          <div className="heart-icon-wrap">
                            <img
                              src="/images/Nextpet-imgs/dashboard-imgs/heart-border2.svg"
                              alt=""
                            />
                            <img
                              src="/images/Nextpet-imgs/dashboard-imgs/heart-fill.svg"
                              alt=""
                              className="active"
                            />
                            <span>
                              {slide.total_like ? slide.total_like : "0"}
                            </span>
                          </div>
                        </div>
                        <div className="recentposted-content-card">
                          <div className="before-curve-icons">
                            <img
                              src="/images/Nextpet-imgs/dashboard-imgs/all-cards-before.svg"
                              alt=""
                            />
                          </div>
                          <div className="heading-content">
                            <h3>{slide.name ? slide.name : "Name"}</h3>
                            <div className="mail-boxwrap">
                              <img
                                src="/images/Nextpet-imgs/newyear-cats-imgs/mail.svg"
                                alt=""
                              />
                              <div
                                className="mail-count"
                                data-bs-target="#previous-information"
                                data-bs-toggle="modal"
                              >
                                <span>
                                  {slide.total_contact
                                    ? slide.total_contact
                                    : "0"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <p>
                            {slide.description
                              ? slide.description
                                  .split(" ")
                                  .slice(0, 10)
                                  .join(" ")
                              : " "}
                          </p>
                          <div className="viewmore-wrap">
                            <h4>${slide.price ? slide.price : "Price"}</h4>
                            <div className="action-wrap">
                              <a href="./User/contact-pet-details.html">
                                View More&nbsp;
                                <i className="fas fa-angle-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          z-index: 10;
          pointer-events: none;
        }

        .swiper-button-prev,
        .swiper-button-next {
          pointer-events: auto;
          background-color: white;
          color: rgba(0, 0, 0, 0.5);
          padding: 15px 15px;
          font-size: 12px;
          font-weight: bold;
          cursor: pointer;
          margin: 0 50px;
          border: none;
          border-radius: 15px 0 0 15px;
        }

        .swiper-button-next {
          border-radius: 0 15px 15px 0;
        }
        .recentposted-cat-dog-wrap {
          --swiper-navigation-size: 15px;
        }
      `}</style>
    </div>
  );
};

export default HomeRecentlyPostedSlider;
