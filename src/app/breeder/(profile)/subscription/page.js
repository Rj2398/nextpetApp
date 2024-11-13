"use client";
// import React, { useState, useEffect } from "react";
import Image from "next/image";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import OtpInput from 'react-otp-input';
// import Cookies from 'js-cookie';
import BreederProfileLeft from '../../../../components/BreederProfileLeft'

const Subscription = () => {
    const breederData = {
        page: "subscription",
      };
    return (
        <>
            <div className="breedeerdasboard-profile-wrap">
                <div className="container">
                <div className="col-lg-12">
                    <div className="breedeerdasboard-profile-inner">
                        <BreederProfileLeft data={breederData}/>
                        <div class="breedeerdasboard-subscription-right">
                            <h1>Available Subscription Plans</h1>
                            <form action="#">
                            <div class="subscription-payment-wrap">
                                
                                <div class="subscription-payment-box">
                                    <div class="header-subscription">
                                        <span>Free</span>
                                        <h2>$ 0.00/</h2>
                                        <span>Month</span>
                                        <div class="active-band">
                                        <Image src="/images/Nextpet-imgs/dashboard-imgs/active.png" alt=""width={75} height={75} />
                                        </div>
                                    </div>
                                    <div class="content-subscription">
                                        
                                        <div class="inner-subscription">
                                        <Image src="/images/Nextpet-imgs/dashboard-imgs/check.png" alt=""width={15} height={15} />
                                        <p>First 6 posts are free</p>
                                        </div>
                                        
                                        
                                        <div class="inner-subscription">
                                        <Image src="/images/Nextpet-imgs/dashboard-imgs/check.png" alt=""width={15} height={15} />
                                        <p>It was popularised in the 1960s with the release of Letraset sheets.</p>
                                        </div>
                                        
                                        
                                        <div class="inner-subscription">
                                        <Image src="/images/Nextpet-imgs/dashboard-imgs/check.png" alt=""width={15} height={15} />
                                        <p>Lorem Ipsum passages, and more recently with desktop.</p>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div class="subscription-payment-box active">
                                    <div class="header-subscription">
                                        <span>Silver</span>
                                        <h2>$20.00</h2>
                                        <span>Month</span>
                                    </div>
                                    <div class="content-subscription">
                                    
                                    <div class="inner-subscription">
                                        <Image src="/images/Nextpet-imgs/dashboard-imgs/check.png" alt=""width={15} height={15} />
                                        <p>Pay $20 per post</p>
                                    </div>
                                        
                                        
                                    <div class="inner-subscription">
                                        <Image src="/images/Nextpet-imgs/dashboard-imgs/check.png" alt=""width={15} height={15} />
                                        <p>It was popularised in the 1960s with the release of Letraset sheets.</p>
                                    </div>
                                                                                
                                    <div class="inner-subscription">
                                        <Image src="/images/Nextpet-imgs/dashboard-imgs/check.png" alt=""width={15} height={15} />
                                        <p>Lorem Ipsum passages, and more recently with desktop.</p>
                                    </div>
                                    
                                </div>
                                </div>
                                
                                
                                <div class="subscription-payment-box">
                                <div class="header-subscription">
                                    <span>Gold</span>
                                    <h2>$150</h2>
                                    <span>Month</span>
                                </div>
                                <div class="content-subscription">
                                    
                                    <div class="inner-subscription">
                                    <Image src="/images/Nextpet-imgs/dashboard-imgs/check.png" alt=""width={15} height={15} />
                                    <p>$150/year for 12 posts, One-time annual fee</p>
                                    </div>
                                    
                                    
                                    <div class="inner-subscription">
                                    <Image src="/images/Nextpet-imgs/dashboard-imgs/check.png" alt=""width={15} height={15} />
                                    <p>It was popularised in the 1960s with the release of Letraset sheets.</p>
                                    </div>
                                    
                                    
                                    <div class="inner-subscription">
                                    <Image src="/images/Nextpet-imgs/dashboard-imgs/check.png" alt=""width={15} height={15} />
                                    <p>Lorem Ipsum passages, and more recently with desktop.</p>
                                    </div>
                                    
                                </div>
                                </div>
                                
                                
                                <div class="subscription-payment-box">
                                <div class="header-subscription">
                                    <span>Platinum</span>
                                    <h2>$480</h2>
                                    <span>Month</span>
                                </div>
                                <div class="content-subscription">
                                    
                                    <div class="inner-subscription">
                                    <Image src="/images/Nextpet-imgs/dashboard-imgs/check.png" alt=""width={15} height={15} />
                                    <p>Unlimited posting $40/month, Minimum 1-year commitment</p>
                                    </div>
                                    
                                    
                                    <div class="inner-subscription">
                                    <Image src="/images/Nextpet-imgs/dashboard-imgs/check.png" alt=""width={15} height={15} />
                                    <p>It was popularised in the 1960s with the release of Letraset sheets.</p>
                                    </div>
                                    
                                    
                                    <div class="inner-subscription">
                                    <Image src="/images/Nextpet-imgs/dashboard-imgs/check.png" alt=""width={15} height={15} />
                                    <p>Lorem Ipsum passages, and more recently with desktop.</p>
                                    </div>
                                    
                                </div>
                                </div>


                             
                                

                                
                                
                                
                               
                                
                                
                            </div>
                            <div class="subscription-btn-wrap">
                                <button type="button" value="Submit">Upgrade Plan</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        
          
        </>
    );
};
export default Subscription;