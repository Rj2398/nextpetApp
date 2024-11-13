"use client";
import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Slider from "../components/Slider";
import Homeabout from "../components/Homeabout";
import Homenearyou from "../components/Homenearyou";
import RecentlyPosted from "../components/RecentlyPosted";
import HomeRecentlyPostedSlider from "../components/HomeRecentlyPostedSlider";
import HomeAppSec from "../components/HomeAppSec";
import HomePopularBreddersSec from "../components/HomePopularBreddersSec";
import HomeTrendingPets from "../components/HomeTrendingPets";
import axios from "axios";
import BASE_URL from "../app/utils/constant";
import { PostLike } from "../app/services/user/post";

function Page() {
  const [homePageData, setHomePageData] = useState([]);
  const [data, setData] = useState({
    msg: "",
    msg_type: "",
    status: "",
    code: null,
    nearyou: [],
    recently_post: [],
    trending_pets: [],
    popular_breeder: [],
  });

  const userId = localStorage.getItem("user_user_id");
  useEffect(() => {
    NearYou();
    getHomePageData();
  }, []);

  const NearYou = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/api/all_post_listing`, {
        user_id: userId,
        latitude: 28.6215001,
        longitude: 77.3905665,
      });
      setData(response.data);
    } catch (err) {
      console.log("error : ", err);
    }
  };

  const NearYouLike = async (breeder_id, post_id, check_like) => {
    let payload;
    if (check_like == "0") {
      payload = {
        user_id: userId,
        post_id: post_id,
        breeder_id: breeder_id,
        like_post: 1,
      };
      console.log(payload);
    } else {
      payload = {
        user_id: userId,
        post_id: post_id,
        breeder_id: breeder_id,
        like_post: 111,
      };
    }

    try {
      const response = await PostLike(payload);

      NearYou();
    } catch (error) {
      console.error("Error in NearYouLike:", error);
    }
  };

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

  const handlePostLike = async (value) => {
    let checkLikeDislike = value?.like_colour == null ? 1 : 111;
    let likeData = {
      user_id: userId,
      breeder_id: value?.breeder_id || "",
      like_post: checkLikeDislike,
    };
    try {
      const response = await axios.post(
        `${BASE_URL}/api/breeder_like`,
        likeData
      );
      if (response.data.code === 200) {
        NearYou();
      }
    } catch (err) {
      console.log("error : ", err);
    }
  };

  return (
    <>
      <Banner homePageData={homePageData} />
      <Slider />
      <Homeabout homePageData={homePageData} />
      <Homenearyou slides={data.nearyou} onLike={NearYouLike} />
      <RecentlyPosted />
      <HomeRecentlyPostedSlider
        slides={data.recently_post}
        onLike={NearYouLike}
      />
      <HomeAppSec homePageData={homePageData} />
      <HomePopularBreddersSec
        slides={data.popular_breeder}
        onClick={handlePostLike}
      />
      <HomeTrendingPets slides={data.trending_pets} onLike={NearYouLike} />
    </>
  );
}

export default Page;
