"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import routes from "../config/routes";
import "toastr/build/toastr.min.css";
import BASE_URL from "../app/utils/constant";
import axios from "axios";
import { GoClock } from "react-icons/go";

function Header() {
  const [isOpen, setIsOpen] = useState(true);
  const [userId, setUserId] = useState(null);
  const [breederId, setBreederId] = useState(null);
  const [notificationDetails, setNotificationDetails] = useState(null);

  console.log("notification44", notificationDetails);

  useEffect(() => {
    const breederId = JSON.parse(localStorage.getItem("breeder_user_id"));
    const userId = JSON.parse(localStorage.getItem("user_user_id"));
    if (breederId || userId) {
      setUserId(userId);
      setBreederId(breederId);
    } else {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (userId || breederId) {
      getNotification();
    }
  }, [userId || breederId]);

  const getNotification = async () => {
    let userLogin = breederId
      ? { breeder_id: breederId || "" }
      : { user_id: userId || "" };

    let apiURL = breederId
      ? `${BASE_URL}/api/breeder_notification`
      : `${BASE_URL}/api/user_notification`;
    try {
      const response = await axios.post(apiURL, userLogin);
      if (response.data.code === 200) {
        setNotificationDetails(response.data.data);
        console.log("notification445", response.data.data);
      }
    } catch (err) {
      console.log("error : ", err);
    }
  };

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="topbanner-wrap">
        <div className="container">
          <div className="inner-sectiontop">
            <h2>Follow :</h2>
            <div className="social-icons">
              <Link href="#">
                <Image
                  src="/images/Nextpet-imgs/all-icons/Insta.svg"
                  alt="Instagram"
                  width={21}
                  height={20}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/images/Nextpet-imgs/all-icons/Fb.svg"
                  alt="Facebook"
                  width={21}
                  height={20}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/images/Nextpet-imgs/all-icons/twitter.svg"
                  alt="Twitter"
                  width={21}
                  height={20}
                />
              </Link>
            </div>
            <Notification notificationDetails={notificationDetails} />
          </div>
        </div>
      </div>

      <div className="nav-wrap">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <Link className="navbar-brand" href="/">
                <Image
                  src="/images/Nextpet-imgs/LOGO.png"
                  alt="Logo"
                  width={100}
                  height={50}
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/about-us">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/pets">
                      Pets
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/breeders">
                      Breeders
                    </Link>
                  </li>
                  {!userId ? (
                    <li className="nav-item">
                      <Link
                        className="nav-link user-signin"
                        href="/user/sign-in"
                        onClick={(e) => {
                          localStorage.removeItem("breeder_user_id");
                        }}
                      >
                        User Sign In
                      </Link>
                    </li>
                  ) : null}

                  {isOpen && (
                    <div className="influ-dropdown">
                      <button
                        className="influ-btn influ-drop-btn extra-width-btn"
                        onClick={toggleDropdown}
                        type="button"
                      >
                        <Image
                          src="/images/Nextpet-imgs/all-icons/user.svg"
                          alt=""
                          width={15}
                          height={15}
                        />
                        {userId ? "User Profile" : "Anna Brown"}
                        <i className="far fa-chevron-down"></i>
                      </button>
                      {userId ? (
                        <DropdownUserMenu
                          isOpen={isOpen}
                          closeDropdown={closeDropdown}
                        />
                      ) : (
                        <DropdownMenu
                          isOpen={isOpen}
                          closeDropdown={closeDropdown}
                        />
                      )}
                    </div>
                  )}
                  {!breederId ? (
                    <li className="nav-item">
                      <Link
                        href={routes.breeder_sign_in}
                        className="nav-link breeder-signin"
                        onClick={(e) => {
                          localStorage.removeItem("user_user_id");
                        }}
                      >
                        Breeder Sign In
                      </Link>
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

const Notification = ({ notificationDetails }) => (
  <div className="notification-in">
    <button type="button">
      <img
        src="/images/Nextpet-imgs/all-icons/notification.svg"
        alt="Notification"
      />
    </button>
    <div className="notification-list">
      <div className="notification-heading">
        <h1>Notifications</h1>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="notification-list-inner">
        {notificationDetails ? (
          notificationDetails.map((item, index) => (
            <NotificationItem key={index} item={item} />
          ))
        ) : (
          <p>No notifications available</p>
        )}
      </div>
    </div>
  </div>
);

const NotificationItem = ({ item }) => (
  <div className="notification-list-item">
    <div className="notification-list-item-image">
      <Image
        width={50}
        height={50}
        src={
          item?.user_image
            ? item?.user_image
            : "/images/Nextpet-imgs/notification-imgs/user1.png"
        }
        alt=""
      />
    </div>
    <div className="notification-list-item-text">
      <p>
        {item?.user_name ? item?.user_name : "Richard Brown"} (
        {item.pet_name + " " + item.pet_breed + " " + item.pet_type ||
          "Notification Not Available"}{" "}
        )
      </p>
      <span>
        <i className="far fa-clock"></i>{" "}
        <p>
          <GoClock style={{ margin: "3px", marginBottom: "6px" }} />
          {item.date_time
            ? new Date(item.date_time)
                .toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })
                .replace(",", " |")
            : "Date not available"}
        </p>
      </span>
    </div>
  </div>
);

const DropdownMenu = ({ isOpen, closeDropdown }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="influ-drop-list">
        <div className="">
          <div className="influ-drop-list-item">
            <Link href="/breeder/leads" onClick={closeDropdown}>
              <Image
                src="/images/Nextpet-imgs/all-icons/sms.png"
                alt=""
                width={15}
                height={15}
              />
              &nbsp;Leads
            </Link>
          </div>
          <div className="influ-drop-list-item">
            <Link href="/breeder/posts/no-posts" onClick={closeDropdown}>
              <Image
                src="/images/Nextpet-imgs/all-icons/send.png"
                alt="Posts"
                width={15}
                height={15}
              />
              &nbsp;Posts
            </Link>
          </div>

          <div className="influ-drop-list-item">
            <Link href="/breeder/subscription" onClick={closeDropdown}>
              <Image
                src="/images/Nextpet-imgs/all-icons/copy.png"
                alt="Subscription"
                width={15}
                height={15}
              />
              &nbsp;Subscription
            </Link>
          </div>
          <div className="influ-drop-list-item">
            <Link href="/breeder/breeder-profile" onClick={closeDropdown}>
              <Image
                src="/images/Nextpet-imgs/all-icons/profile.png"
                width={15}
                height={15}
                alt="Profile"
              />
              &nbsp;My Profile
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const DropdownUserMenu = ({ isOpen, closeDropdown }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="influ-drop-list">
        <div className="">
          <div className="influ-drop-list-item">
            <Link href="/user/favourites" onClick={closeDropdown}>
              <Image
                src="/images/Nextpet-imgs/all-icons/send.png"
                alt="Posts"
                width={15}
                height={15}
              />
              &nbsp;Favorites
            </Link>
          </div>

          <div className="influ-drop-list-item">
            <Link href="/user/contacts" onClick={closeDropdown}>
              <Image
                src="/images/Nextpet-imgs/all-icons/copy.png"
                alt="Subscription"
                width={15}
                height={15}
              />
              &nbsp;Contacts
            </Link>
          </div>
          <div className="influ-drop-list-item">
            <Link href="/user/alert" onClick={closeDropdown}>
              <Image
                src="/images/Nextpet-imgs/all-icons/profile.png"
                width={15}
                height={15}
                alt="Profile"
              />
              &nbsp;Alerts
            </Link>
          </div>
          <div className="influ-drop-list-item">
            <Link href="/user/dashboard-user-profile" onClick={closeDropdown}>
              <Image
                src="/images/Nextpet-imgs/all-icons/profile.png"
                width={15}
                height={15}
                alt="Profile"
              />
              &nbsp;My Profile
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
