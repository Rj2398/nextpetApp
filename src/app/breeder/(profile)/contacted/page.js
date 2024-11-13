

"use client";
import React from "react";
import Image from "next/image";
import Link from 'next/link';
// import { useRouter } from "next/navigation";
// import BreederProfileLeft from '../../../../components/BreederProfileLeft';

const Contacted = () => {
    return (
        <>
             <div class="contacted-breeder-wrap">
                <div class="container">
                <div class="col-lg-12">
                    <div class="contacted-breeder-inner">
                    <div class="col-lg-5 col-md-6">
                        <div class="contacted-breeder-img">
                        <Image src="/images/Nextpet-imgs/contacted-imgs/user.svg" alt="" width={444} height={232} loading="lazy"/>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-6">
                        <div class="contacted-breeder-content">
                        <h2>Richard Brown</h2>
                        <ul>
                            <li><Image width={15} height={15} src="/images/Nextpet-imgs/contacted-imgs/location-icon.svg" alt=""
                                loading="lazy"/>&nbsp;Colorado Springs,
                            CO(state), USA</li>
                            <li><Image width={15} height={15} src="/images/Nextpet-imgs/contacted-imgs/mail.svg" alt=""/>&nbsp;
                            <Link href="#" style={{ textDecoration: 'underline' }}>
                                richardbrown78@gmail.com
                            </Link>
                            </li>
                            <li><Image width={15} height={15} src="/images/Nextpet-imgs/contacted-imgs/phone.svg" alt=""/>&nbsp;<a href="#">+1
                                617-496-5841</a></li>
                        </ul>
                        </div>
                    </div>
                    
                    </div>
                </div>
                </div>
            </div>
            <div class="contacted-breeder-wrap">
                <div class="container">
                <div class="col-lg-12">
                    <div class="contacted-breeder-inner">

                    
                    <div class="col-lg-5 col-md-6">
                        <div class="contacted-breeder-img">
                        <Image src="/images/Nextpet-imgs/contacted-imgs/cat-img.svg" alt="" loading="lazy" width={444} height={232}/>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-6">
                        <div class="contacted-breeder-content">
                        <div class="contacted-heading">
                            <h3>Pet Info</h3>
                            <div class="heart-icon-wrap">
                            <Image width={15} height={15} src="/images/Nextpet-imgs/dashboard-imgs/heart-border2.svg" alt="" class="active"/>
                            <Image width={15} height={15} src="/images/Nextpet-imgs/dashboard-imgs/heart-fill.svg" alt=""/>
                            <span>55</span>
                            </div>
                        </div>
                        <p>There are of Lorem Ipsum available, but the majority have su alteration in some form, by injected
                            oir which don&apos;t look
                            even slightly believable. There are of Lorem Ipsum available, but the majority have su alteration
                            in some form, by
                            injected oir which don&apos;t look even slightly believable.There are of Lorem Ipsum available, but the
                            majority have su
                            alteration in some form, by injected oir which don&apos;t look even slightly believable.</p>
                        
                        <div class="viewmore-wrap">
                            <h4>$105</h4>
                            <div class="action-wrap">
                            <a href="#" onClick={(e) => e.preventDefault()}>View More&nbsp;<i class="fas fa-angle-right"></i></a>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                    

                    </div>
                </div>
                </div>
            </div>

            <div class="contacted-breeder-wrap">
                <div class="container">
                <div class="col-lg-12">
                    <div class="contacted-breeder-inner">

                    
                    <div class="col-lg-12 col-md-12">
                        <div class="experience-user-wrap">
                        <div class="experience-heading">
                            <h3>How was your experience with the User?</h3>
                            <div class="tooltip"><Image width={15} height={15} src="/images/Nextpet-imgs/profile-page-imgs/i-icon.svg" alt=""
                                loading="lazy"/>
                            <span class="tooltiptext">
                                <div class="tooltip-inner-content">
                                <h4>Adopted</h4>
                                <p>Pet is not available because it has found a home.
                                </p>
                                </div>
                                <div class="tooltip-inner-content">
                                <h4>Lost</h4>
                                <p>You do not want to connect with this lead
                                </p>
                                </div>
                                <div class="tooltip-inner-content">
                                <h4>Contacted</h4>
                                <p>You have connected to this lead.
                                </p>
                                </div>
                                <div class="tooltip-inner-content">
                                <h4>Pending</h4>
                                <p>Lead is waiting for you to contact them.
                                </p>
                                </div>
                            </span>
                            </div>
                        </div>
                        
                        <div class="expreience-btn-ratingwrap">
                            <div class="inner-btns-rating">
                            <button type="button" value="Submit">Politeness</button>
                            <div class="star-ratings-coming">
                                <Image width={32} height={35} src="/images/Nextpet-imgs/contacted-imgs/star.svg" alt="" loading="lazy"/>
                                <Image width={32} height={35} src="/images/Nextpet-imgs/contacted-imgs/star.svg" alt="" loading="lazy"/>
                                <Image width={32} height={35} src="/images/Nextpet-imgs/contacted-imgs/star.svg" alt="" loading="lazy"/>
                                <Image width={32} height={35} src="/images/Nextpet-imgs/contacted-imgs/star.svg" alt="" loading="lazy"/>
                                <Image width={32} height={35} src="/images/Nextpet-imgs/contacted-imgs/star.svg" alt="" loading="lazy"/>
                            </div>
                            </div>
                            <div class="inner-btns-rating">
                            <button type="button" value="Submit">Responsive</button>
                            <div class="star-ratings-coming">
                                <Image width={32} height={35} src="/images/Nextpet-imgs/contacted-imgs/star.svg" alt="" loading="lazy"/>
                                <Image width={32} height={35} src="/images/Nextpet-imgs/contacted-imgs/star.svg" alt="" loading="lazy"/>
                                <Image width={32} height={35} src="/images/Nextpet-imgs/contacted-imgs/star.svg" alt="" loading="lazy"/>
                                <Image width={32} height={35} src="/images/Nextpet-imgs/contacted-imgs/star.svg" alt="" loading="lazy"/>
                                <Image width={32} height={35} src="/images/Nextpet-imgs/contacted-imgs/star.svg" alt="" loading="lazy"/>
                            </div>
                            </div>
                            <div class="inner-btns-rating">
                            <button type="button" value="Submit">Communication</button>
                            <div class="star-ratings-coming">
                                <Image width={32} height={35} src="/images/Nextpet-imgs/contacted-imgs/star.svg" alt="" loading="lazy"/>
                                <Image width={32} height={35} src="/images/Nextpet-imgs/contacted-imgs/star.svg" alt="" loading="lazy"/>
                                <Image width={32} height={35} src="/images/Nextpet-imgs/contacted-imgs/star.svg" alt="" loading="lazy"/>
                                <Image width={32} height={35} src="/images/Nextpet-imgs/contacted-imgs/star.svg" alt="" loading="lazy"/>
                                <Image width={32} height={35} src="/images/Nextpet-imgs/contacted-imgs/star.svg" alt="" loading="lazy"/>
                            </div>
                            </div>
                        </div>
                        
                        </div>
                    </div>

                    

                    </div>
                </div>
                </div>
            </div>

            <div class="contacted-breeder-wrap">
                <div class="container">
                <div class="col-lg-12">
                    <div class="contacted-breeder-inner">

                    
                    <div class="col-lg-12 col-md-12">
                        <div class="experience-user-wrap">
                        <div class="experience-heading">
                            <h3>What is the updated status of this pet post?
                            </h3>
                            <div class="tooltip"><Image width={15} height={15} src="/images/Nextpet-imgs/profile-page-imgs/i-icon.svg" alt=""
                                loading="lazy"/>
                            <span class="tooltiptext">
                                <p>Pet is not available because it has found a home.
                                </p>
                            </span>
                            </div>
                        </div>
                        
                        <div class="updatedstatus-btn-ratingwrap">
                            <div class="updatedstatus-btns-rating">
                            <button type="button" class="active" value="Submit">Adopted</button>
                            </div>
                            <div class="updatedstatus-btns-rating">
                            <button type="button" class="danger" value="Submit">Lost</button>
                            </div>
                            <div class="updatedstatus-btns-rating">
                            <button type="button" class="pending" value="Submit">Contacted</button>
                            </div>
                            <div class="updatedstatus-btns-rating">
                            <button type="button" class="warning" value="Submit">Pending</button>
                            </div>
                        </div>
                        
                        </div>
                    </div>

                    

                    </div>
                </div>
                </div>
            </div>

            <div class="contacted-breeder-wrap">
                <div class="container">
                <div class="col-lg-12">
                    <div class="contacted-breeder-inner">

                    
                    <div class="col-lg-12 col-md-12">
                        <div class="experience-user-wrap">
                        <div class="experience-heading">
                            <h3>Notes
                            </h3>
                        </div>
                      
                        <label>
                            <textarea name="" id="" placeholder="You can add a personal memo here.."></textarea>
                        </label>
                      
                       
                        <p>These notes are only visible to you.</p>
                       
                        </div>
                    </div>

                    

                    </div>
                </div>
                </div>
                <div class="contucted-btn-wrap">
                <button type="button" value="Submit">Add Note</button>
                </div>
            </div>

            <div class="contacted-breeder-wrap">
                <div class="container">
                <div class="col-lg-12">
                    <div class="contacted-breeder-inner">
                    
                    <div class="col-lg-12 col-md-12">
                        <div class="experience-user-wrap">
                        <div class="calender-warp">
                            <span>July 18</span>
                            <p>I loved the pet on the video call.</p>
                        </div>
                        </div>
                        <div class="experience-user-wrap">
                        <div class="calender-warp">
                            <span>July 17</span>
                            <p>I contacted this breeder, he will show me the pet on video call tomorrow.</p>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default Contacted;
