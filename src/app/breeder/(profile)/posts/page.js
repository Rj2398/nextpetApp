"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import BreederProfileLeft from "../../../../components/BreederProfileLeft";
import axios from "axios";
import BASE_URL from "../../../utils/constant";
import Link from "next/link";

const Post = () => {
  const [allBreederPosts, setAllBreederPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [loading, setLoading] = useState(true);
  const [postsPerPage] = useState(6); // Number of posts per page

  const breederUserId = localStorage.getItem("breeder_user_id");
  console.log("breederUserId : ", breederUserId);

  const breederData = {
    page: "posts",
  };

  useEffect(() => {
    const fetchBreederPosts = async () => {
      const formData = new FormData();
      formData.append("user_id", breederUserId); // You can dynamically assign the user ID if needed
      try {
        // API call to fetch posts for a breeder
        const response = await axios.post(
          `${BASE_URL}/api/get_post_breeder`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setLoading(false);
        setAllBreederPosts(response.data.data);
        console.log("API response response.data :44", response.data.data);
      } catch (error) {
        setLoading(false);
        console.log("Error fetching breeder posts:", error);
      }
    };
    fetchBreederPosts(); // Call the function when the page loads
  }, []); // The empty dependency array makes sure this effect runs only on page load (or reload)

  // Logic for pagination
  const indexOfLastPost = currentPage * postsPerPage; // Index of the last post
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // Index of the first post
  const currentPosts = allBreederPosts.slice(indexOfFirstPost, indexOfLastPost); // Current posts to display

  // Function to handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Delete Post
  const postDelete = (postId) => {
    console.log("Deleting post with ID:", postId);
  };

  if (loading) {
    return <p>Loadong...</p>;
  }

  return (
    <>
      <div className="breedeerdasboard-profile-wrap">
        <div className="container">
          <div className="col-lg-12">
            <div className="breedeerdasboard-profile-inner">
              <BreederProfileLeft data={breederData} />
              <div className="posts-right">
                <form action="">
                  <div className="leads-inner-wrap">
                    <div className="post-apet-wrap">
                      <div className="filter-sec">
                        <button type="button" id="post-a-pet" value="Submit">
                          <Link href="posts/create-post">Post a Pet</Link>
                        </button>
                        <div className="quotes2">
                          <div className="dropdown-filterbtn">
                            Filter
                            <img
                              src="/images/Nextpet-imgs/dashboard-imgs/mi_filter_black.svg"
                              alt=""
                            />
                          </div>
                          <div className="dropdown-showfilter">
                            <div className="quotes-list">
                              <div className="filter-data-list">
                                <input
                                  type="checkbox"
                                  value=""
                                  checked="checked"
                                />
                                <p>All</p>
                              </div>
                              <div className="filter-data-list">
                                <input type="checkbox" value="" />
                                <p>Pending</p>
                              </div>
                              <div className="filter-data-list">
                                <input type="checkbox" value="" />
                                <p>Shortlisted</p>
                              </div>
                              <div className="filter-data-list">
                                <input type="checkbox" value="" />
                                <p>Archived</p>
                              </div>
                              <div className="filter-data-list">
                                <input type="checkbox" value="" />
                                <p>Adopted</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="all-posts-cards">
                      {currentPosts.map((post) => (
                        <div className="post-cards-wrap" key={post.post_id}>
                          {/* {console.log(post.image[0])} */}
                          <div className="post-cardsimg-wrap">
                            <Image
                              src={post.image[0]} /* {post.image[0]} */
                              alt=""
                              loading="lazy"
                              width={265}
                              height={199}
                            />
                            <div className="actionpost-heart">
                              <div className="heart-icon-wrap">
                                <img
                                  src="/images/Nextpet-imgs/dashboard-imgs/heart-border2.svg"
                                  alt=""
                                  className="active"
                                />
                                <img
                                  src="/images/Nextpet-imgs/dashboard-imgs/heart-fill.svg"
                                  alt=""
                                  // className="active"
                                />
                                <span>55</span>
                              </div>
                              <a href="#">
                                <div
                                  onMouseOver={(e) => {
                                    e.currentTarget.style.cursor = "pointer";
                                  }}
                                  onClick={() => postDelete(post.post_id)}
                                  // onMouseOver={style={curser:pointer}}
                                  className="delete-icon-wrap"
                                  data-bs-target="#delete-post"
                                  data-bs-toggle="modal"
                                >
                                  <img
                                    src="/images/Nextpet-imgs/dashboard-imgs/post-delete-icon.svg"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </div>
                          </div>

                          <div className="posts-content-card">
                            <div className="before-curve-icons">
                              <img
                                src="/images/Nextpet-imgs/dashboard-imgs/all-cards-before.svg"
                                alt=""
                              />
                            </div>
                            <div className="posts-content">
                              <h3>{post.name ? post.name : ""}</h3>
                              <div className="mail-boxwrap">
                                <img
                                  src="/images/Nextpet-imgs/dashboard-imgs/yellow-mail-letter.svg"
                                  alt=""
                                />
                                <div className="mail-count">
                                  <span>105</span>
                                </div>
                              </div>
                            </div>
                            <p>{post.description ? post.description : ""}</p>

                            <div className="viewmore-wrap">
                              <h4>${post.price ? post.price : ""}</h4>
                              <div className="action-wrap">
                                <Link href={`posts/edit-post/${post.post_id}`}>
                                  View More&nbsp;
                                  <i className="fas fa-angle-right"></i>
                                </Link>
                              </div>
                            </div>
                          </div>

                          <div className="under-moderation-band">
                            <span>This post is under moderation</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Add Pagination Here */}
                    <Pagination
                      postPerPage={postsPerPage}
                      totalPosts={allBreederPosts.length}
                      paginate={paginate}
                      currentPage={currentPage} // Pass currentPage to pagination
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* DELETE YOU POST-POPUP */}
      <div
        className="modal fade modal-common"
        id="delete-post"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div className="modal-dialog modal-dialog-edit" role="document">
          <div className="modal-content">
            <div className="modal-heading">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="">
                <div className="profileverify-popup-wrap">
                  <img
                    src="/images/Nextpet-imgs/dashboard-imgs/delete-icon-popup.svg"
                    alt=""
                  />
                  <h1>Delete</h1>
                  <p>Are you sure you want to delete your post.</p>
                  <div className="delete-account-btns">
                    <button
                      type="button"
                      value="Submit"
                      data-bs-toggle="modal"
                      data-bs-dismiss="close"
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      value="Submit"
                      data-bs-toggle="modal"
                      data-bs-dismiss="close"
                    >
                      No
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* DELETE YOU POST-POPUP */}
    </>
  );
};

export default Post;

const Pagination = ({ postPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  // Calculate total number of pages
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="influ-pagi">
      <ul>
        {/* Left arrow for previous page */}
        <li>
          <a
            href="#!"
            onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
          >
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </a>
        </li>

        {/* Dynamically render page numbers */}
        {pageNumbers.map((number) => (
          <li key={number} className={currentPage === number ? "active" : ""}>
            <a href="#!" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}

        {/* Right arrow for next page */}
        <li>
          <a
            href="#!"
            onClick={() =>
              paginate(
                currentPage < pageNumbers.length
                  ? currentPage + 1
                  : pageNumbers.length
              )
            }
          >
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
