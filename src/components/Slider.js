
'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { src: '/images/Nextpet-imgs/categories-imgs/cate1.png', alt: 'Dog', title: 'Dog' },
    { src: '/images/Nextpet-imgs/categories-imgs/cate2.png', alt: 'Cat', title: 'Cat' },
    { src: '/images/Nextpet-imgs/categories-imgs/cate3.png', alt: 'Rabbit', title: 'Rabbit' },
    { src: '/images/Nextpet-imgs/categories-imgs/cate1.png', alt: 'Dog', title: 'Dog' },
    { src: '/images/Nextpet-imgs/categories-imgs/cate2.png', alt: 'Cat', title: 'Cat' },
    { src: '/images/Nextpet-imgs/categories-imgs/cate3.png', alt: 'Rabbit', title: 'Rabbit' },
    { src: '/images/Nextpet-imgs/categories-imgs/cate1.png', alt: 'Dog', title: 'Dog' },
    { src: '/images/Nextpet-imgs/categories-imgs/cate2.png', alt: 'Cat', title: 'Cat' },
    { src: '/images/Nextpet-imgs/categories-imgs/cate3.png', alt: 'Rabbit', title: 'Rabbit' },
    { src: '/images/Nextpet-imgs/categories-imgs/cate1.png', alt: 'Dog', title: 'Dog' }
  ];

  const itemsPerPage = 6;
  // const numPages = Math.ceil(slides.length / itemsPerPage);
  const numPages = Math.ceil(slides.length - itemsPerPage + 1); 
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + numPages) % numPages);
  };

  return (
    <div className="banner-cat-wrap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="slider-container">
              <button className="slider-button slider-button-prev" onClick={prevSlide}>❮</button>
              <div
                className="slider-slide"
                style={{
                  display: 'flex',
                  transition: 'transform 0.5s ease-in-out',
                  transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="slider-item" style={{ flex: `0 0 ${100 / itemsPerPage}%` }}>
                    <div className="banner-cat-in">
                      <div className="banner-inner-category">
                        <Image src={slide.src} alt={slide.alt} width={45} height={45} />
                        <a href="#">
                          <h3>{slide.title}</h3>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="slider-button slider-button-next" onClick={nextSlide}>❯</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
