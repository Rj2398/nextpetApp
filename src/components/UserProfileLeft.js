"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "react-modal";

const UserProfileLeft = ({ userPages }) => {
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false);

  const customStyles = {
    content: {
      top: "0%", // Start from the top (animation will handle transition)
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, 0%)", // Adjust the centering during animation
      borderRadius: "15px", // Rounded corners
      transition: "transform 0.5s ease-out", // Smooth animation
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background, not blurred
    },
  };

  function openLogoutModal(e) {
    e.preventDefault();
    setShowLogOut(true);
  }

  function closeLogoutModal() {
    setShowLogOut(false);
  }

  function openDeleteAccountModal(e) {
    setShowDeleteAccount(true);
    e.preventDefault();
  }

  function closeDeleteAccountModal() {
    setShowDeleteAccount(false);
  }

  console.log("userPages111", userPages);

  return (
    <>
      <div className="breedeerdasboard-profile-left">
        <ul>
          <li>
            <Link
              href="/user/dashboard-user-profile"
              className={userPages.page === "profile" ? "active" : ""}
            >
              <Image
                src="/images/Nextpet-imgs/dashboard-imgs/icon1.svg"
                alt=""
                width={15}
                height={15}
              />
              <p>My Profile</p>
            </Link>
          </li>
          <li>
            <Link
              href="/user/alert"
              className={userPages.page === "alert" ? "active" : ""}
            >
              <Image
                src="/images/Nextpet-imgs/dashboard-imgs/icon2.svg"
                alt=""
                width={15}
                height={15}
              />
              <p>Alerts</p>
            </Link>
          </li>

          <li>
            <Link
              href="/user/favourites"
              className={userPages.page === "favorites" ? "active" : ""}
            >
              <Image
                src="/images/Nextpet-imgs/dashboard-imgs/icon4.svg"
                alt=""
                width={15}
                height={15}
              />
              <p>Favorites</p>
            </Link>
          </li>
          <li>
            <Link
              href="/user/contacts"
              className={userPages.page === "contacts" ? "active" : ""}
            >
              <Image
                src="/images/Nextpet-imgs/dashboard-imgs/icon3.svg"
                alt=""
                width={15}
                height={15}
              />
              <p>Contacts</p>
            </Link>
          </li>

          <li>
            <a href="#" onClick={openLogoutModal}>
              <Image
                src="/images/Nextpet-imgs/dashboard-imgs/icon6.svg"
                alt=""
                width={15}
                height={15}
              />
              <p>Logout</p>
            </a>

            <Modal
              isOpen={showLogOut}
              onRequestClose={closeLogoutModal}
              style={customStyles}
              contentLabel="Logout Modal"
              onAfterOpen={() => {
                // Apply animation when modal opens
                document.querySelector(".ReactModal__Content").style.transform =
                  "translate(-50%, 20%)";
              }}
            >
              <div className="modal-dialog modal-dialog-edit" role="document">
                <div className="modal-content">
                  <div className="modal-heading">
                    <button
                      type="button"
                      className="btn-close"
                      onClick={closeLogoutModal}
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form action="">
                      <div className="profileverify-popup-wrap">
                        <Image
                          src="/images/Nextpet-imgs/dashboard-imgs/logout-icon-popup.svg"
                          alt=""
                          width={85}
                          height={85}
                        />
                        <h1>Logout</h1>
                        <p>Are you sure you want to logout.</p>
                        <div className="delete-account-btns">
                          <button type="button" value="Submit">
                            Yes
                          </button>
                          <button
                            type="button"
                            value="Submit"
                            onClick={closeLogoutModal}
                          >
                            No
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Modal>
          </li>

          <li>
            <a href="#" onClick={openDeleteAccountModal}>
              <Image
                src="/images/Nextpet-imgs/dashboard-imgs/icon6.svg"
                alt=""
                width={15}
                height={15}
              />
              <p>Delete Account</p>
            </a>

            <Modal
              isOpen={showDeleteAccount}
              onRequestClose={closeDeleteAccountModal}
              style={customStyles}
              contentLabel="Logout Modal"
              onAfterOpen={() => {
                // Apply animation when modal opens
                document.querySelector(".ReactModal__Content").style.transform =
                  "translate(-50%, 20%)";
              }}
            >
              <div className="modal-dialog modal-dialog-edit" role="document">
                <div className="modal-content">
                  <div className="modal-heading">
                    <button
                      type="button"
                      className="btn-close"
                      onClick={closeDeleteAccountModal}
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form action="">
                      <div className="profileverify-popup-wrap">
                        <Image
                          src="/images/Nextpet-imgs/dashboard-imgs/delete-icon-popup.svg"
                          alt=""
                          width={85}
                          height={85}
                        />
                        <h1>Delete</h1>
                        <p>Are you sure you want to delete your account.</p>
                        <div className="delete-account-btns">
                          <button type="button" value="Submit">
                            Yes
                          </button>
                          <button
                            type="button"
                            value="Submit"
                            onClick={closeDeleteAccountModal}
                          >
                            No
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Modal>
          </li>
        </ul>
      </div>
    </>
  );
};
export default UserProfileLeft;
