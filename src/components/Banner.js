import React from "react";
import BASE_URL from "../app/utils/constant";
import Image from "next/image";

function Banner({ homePageData }) {
  return (
    <>
      <div className="banner-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <div className="banner-inner">
                <h1>{homePageData?.section_one_heading_one}</h1>
                <p>{homePageData?.section_one_heading_two}</p>
                <form action="">
                  <label htmlFor="search-input">
                    <input
                      id="search-input"
                      type="text"
                      placeholder="Search by Animal Type, Breed or Location"
                    />
                    <button type="submit">
                      <Image
                        src="/images/Nextpet-imgs/all-icons/arrow.png"
                        alt="Search"
                        width={20}
                        height={20}
                      />
                    </button>
                  </label>
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="dog-right-banner">
                <Image
                  src={`${BASE_URL}${"/"}${
                    homePageData?.section_one_image_banner ||
                    "/images/Nextpet-imgs/banner-imgs/dog.png"
                  }`}
                  alt="Dog"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
