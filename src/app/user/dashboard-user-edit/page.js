"use client";
import UserProfileLeft from '../../../components/UserProfileLeft';
import Image from "next/image";
// import Link from 'next/link';
// import { useRouter } from "next/navigation";


const UserDashboard = () => {

   
    return (
        <div className="breedeerdasboard-profile-wrap">
            <div className="container">
                <div className="col-lg-12">
                    {<div className="breedeerdasboard-profile-inner">
                        <UserProfileLeft />
                        <div className="breedeerdasboard-profile-right">
                            <div className="profile-pic-wrap">
                                <form>
                                    
                                    <h1>Profile</h1>
                                    <div className="profile-right-img">
                                        <div 
                                            className="profile-right-img-prev"
                                            style={{ backgroundImage: `url('/images/Nextpet-imgs/all-icons/user.svg')` }}
                                            id="imagePreview"
                                        />
                                        <label className="upload-icon">
                                            <Image src="/images/Nextpet-imgs/profile-page-imgs/breeder-img.svg" alt="Upload Icon"  width={15} height={15}/>
                                            <input type="file" />
                                        </label>
                                    </div>
                                    <div className="profile-form-wrap">
                                        <label>
                                            <Image src="/images/Nextpet-imgs/breeder-signin-imgs/user.svg" alt="Input Icon"  width={15} height={15}/>
                                            <input type="text" placeholder="Your Name*" required="" />
                                        </label>
                                        
                                        <label>
                                            <Image src="/images/Nextpet-imgs/breeder-signin-imgs/mail-icon.svg" alt="Email Icon"  width={15} height={15}/>
                                            <input type="email" placeholder="Email*" required="" />
                                        </label>
                                        <label>
                                            <Image src="/images/Nextpet-imgs/profile-page-imgs/call.svg" alt="Phone Icon" width={15} height={15} />
                                            <input type="number" placeholder="Phone Number*" required="" maxLength="10" minLength="10" />
                                        </label>
                                       
                                        <label>
                                            <Image src="/images/Nextpet-imgs/profile-page-imgs/location.svg" alt="Location Icon"  width={15} height={15}/>
                                            <input type="text" placeholder="Location*" required="" />
                                        </label>

                                        <div className="profile-btn-wrap">
                                            <button type="button" data-bs-target="#contact-coach" data-bs-toggle="modal">Submit</button>
                                        </div>
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
        
    );
    

};


export default UserDashboard;