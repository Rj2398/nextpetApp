

"use client";
import React, { useState, useEffect } from "react";
import BreederProfileLeft from '../../../../../components/BreederProfileLeft';
import Image from "next/image";
import Link from 'next/link';
// import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from 'js-cookie';
import BASE_URL from '../../../../utils/constant'

const BreederDashboard = () => {

    // const [imagePreview, setImagePreview] = useState("");
    // const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [bio, setBio] = useState(null);
    const [business_name, setBusinessName] = useState(null);
    const [email, setEmail] = useState(null);
    const [location, setLocation] = useState(null);
    // const [login_with, setLoginWith] = useState(null);
    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [website, setWebsite] = useState(null);
    const [image, setImage] = useState(null);
    const [breeder_image, setBreederImage] = useState(null);
    
  
    // Fetch user details from API
    const fetchUserDetails = async () => {
        try {
            // const userId = Cookies.get("user_id"); // Assuming the user_id is stored in a cookie
            const breederUserId = localStorage.getItem("breeder_user_id");
            console.log("breederUserId : ",breederUserId);
            // console.log(userId);
            const response = await axios.post(`${BASE_URL}/api/get-user`, {user_id:breederUserId}, {
                headers: {
                'Content-Type': 'multipart/form-data',
                },
            });

            //   console.log("Try in side");
            console.log(response);
            setBio(response.data.data.bio)
            setBusinessName(response.data.data.business_name)
            setEmail(response.data.data.email)
            setLocation(response.data.data.location)
            // setLoginWith(response.data.data.login_with)
            setName(response.data.data.name)
            setPhone(response.data.data.phone)
            setWebsite(response.data.data.website)
            setImage(response.data.data.image)
            setBreederImage(response.data.data.breeder_image)
            console.log("breeder Image ",Object.values(response.data.data.breeder_image));
            console.log("breeder Image2 ",response.data.data.breeder_image);
            

            // if(response.data.data.breeder_image.length>=1){
            //     for(i=0;i<response.data.data.breeder_image.length;i++){
            //         console.log(response.data.data.breeder_image[i]);
            //     }
            // }

            // setUserDetails(response.data); // Assuming the response contains user details
            setLoading(false);
      } catch (err) {
        // console.log(response);
        console.log("Show Error");
        setError("Failed to load user details.");
        setLoading(false);
      }
    };
  
    // Fetch user details when the component mounts
    useEffect(() => {
      fetchUserDetails();
    }, []);
  
    if (loading) {
      return <p>Loading user details...</p>;
    }
  
    if (error) {
      return <p>{/* {error} */} Aryan Chaurasia</p>;
    
    }
    
    // Send in component
    const breederData = {
        page: "dashboard-breeder-profile",
      };
   
    //   console.log(userId);
    return (
        <div className="breedeerdasboard-profile-wrap">
            <div className="container">
                <div className="col-lg-12">
                    <div className="breedeerdasboard-profile-inner">
                        <BreederProfileLeft data={breederData}/>
                        <div className="breedeerdasboard-profile-right">
                            <div className="profile-pic-wrap">
                                <form>
                                    <div className="edit-profile-icon">
                                        <Link href="/breeder/breeder-profile">
                                            <Image src="/images/Nextpet-imgs/dashboard-imgs/edit-profile-icon.svg" alt="Edit Profile" width={50} height={50}/>
                                        </Link>
                                    </div>
                                    <h1>Profile</h1>
                                    <div className="profile-right-img">
                                        <div 
                                            className="profile-right-img-prev"
                                            style={{ backgroundImage: image ? `url(${image})` : "url('/images/Nextpet-imgs/all-icons/user.svg')" }}
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
                                            <input type="text" value={name} placeholder="Your Name*" required="" readOnly/>
                                        </label>
                                        <label>
                                            <Image src="/images/Nextpet-imgs/breeder-signin-imgs/user.svg" alt="Input Icon"  width={15} height={15}/>
                                            <input type="text" value={business_name} placeholder="Business Name (optional)" readOnly/>
                                        </label>
                                        <label>
                                            <Image src="/images/Nextpet-imgs/breeder-signin-imgs/mail-icon.svg" alt="Email Icon"  width={15} height={15}/>
                                            <input type="email" value={email} placeholder="Email*" required="" readOnly/>
                                        </label>
                                        <label>
                                            <Image src="/images/Nextpet-imgs/profile-page-imgs/call.svg" alt="Phone Icon" width={15} height={15} />
                                            <input type="number" value={phone} placeholder="Phone Number*" required="" maxLength="10" minLength="10" readOnly/>
                                        </label>
                                        <label>
                                            <Image src="/images/Nextpet-imgs/profile-page-imgs/location.svg" alt="Website Icon" width={15} height={15} />
                                            <input type="text" value={website} placeholder="Website*" required="" readOnly/>
                                        </label>
                                        <label>
                                            <Image src="/images/Nextpet-imgs/profile-page-imgs/location.svg" alt="Location Icon"  width={15} height={15}/>
                                            <input type="text" value={location} placeholder="Location*" required="" readOnly/>
                                        </label>
                                        <label>
                                            <textarea placeholder="Business Description*" readOnly>{bio}</textarea>
                                        </label>
                                        {/* Gallery Section */}
                                        {/* <GallerySection /> */}


                                        <div className="gallery-imgs-wp">
                                            <div className="gallery-heading">
                                                <h3>Gallery</h3>
                                                <div className="tooltip">
                                                    <Image src="/images/Nextpet-imgs/profile-page-imgs/i-icon.svg" alt="Info Icon"  width={15} height={15}/>
                                                    <span className="tooltiptext">A simple gallery of nine photos of the breeder’s choice.</span>
                                                </div>
                                            </div>
                                            <div className="gallery-uploadedbox-wrap">

                                            {breeder_image.map((image, index) => (
                                                <div className="gallery-uploadedimg-box" key={index}>
                                                    <Image 
                                                    src={image} // Use the actual image URL from your data
                                                    alt={`Image ${index}`} // You can customize this further
                                                    width={15} 
                                                    height={15}
                                                    />
                                                </div>
                                            ))}
                                            
                                            {/* <div className="gallery-uploadedimg">
                                                {response.data.data.breeder_image.map((image, index) => (
                                                    <div className="gallery-uploadedimg-box" key={index}>
                                                        <Image 
                                                            src={image} // Use the actual image URL from your data
                                                            alt={`Image ${index}`} // You can customize this further
                                                            width={15} 
                                                            height={15}
                                                        />
                                                    </div>
                                                ))}
                                            </div> */}
                                                
                                        



                                            </div>
                                        </div>
                                        {/* Available Plans Section */}
                                        <AvailablePlansSection />
                                        {/* Coaching Section */}
                                        <CoachingSection />
                                        <div className="profile-btn-wrap">
                                            <button type="button" data-bs-target="#contact-coach" data-bs-toggle="modal">Contact a Coach</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



const AvailablePlansSection = () => (
    <div className="available-plans-wp">
        <div className="available-heading">
            <h3>Available Plans</h3>
            <div className="tooltip">
                <Image src="/images/Nextpet-imgs/profile-page-imgs/i-icon.svg" alt="Info Icon"  width={15} height={15} />
                <span className="tooltiptext">A simple gallery of nine photos of the breeder’s choice.</span>
            </div>
        </div>
        <div className="available-plansbox-wrap">
            {[
                { name: "Free", price: "$0", description: "First 6 posts are free", buttonText: "Active" },
                { name: "Silver", price: "$20", description: "First 6 posts are free", buttonText: "Subscribe" },
                { name: "Gold", price: "$150", description: "First 6 posts are free", buttonText: "Subscribe" },
                { name: "Platinum", price: "$480", description: "First 6 posts are free", buttonText: "Subscribe" },
            ].map((plan, index) => (
                <div className="available-plans-box" key={index}>
                    <div className="price-sec-wrap">
                        <span>{plan.name}</span>
                        <span>{plan.price}</span>
                    </div>
                    <p>{plan.description}</p>
                    <div className="available-plans-btns">
                        <button type="button" className={plan.name === "Free" ? "active" : ""}>{plan.buttonText}</button>
                    </div>
                </div>
            ))}
        </div>
        <div className="note-wrap">
            <p><span>Note:&nbsp;</span>Post Validity 1 month, per post payment $20</p>
        </div>
    </div>
);

const CoachingSection = () => (
    <div className="coaching-wp">
        <div className="coaching-heading">
            <h3>Coaching</h3>
        </div>
        <p>NextPet provides one on one coaching from experienced breeders. Click the button below to connect for more information.</p>
    </div>
);

export default BreederDashboard;







/* 
 */
// {breeder_image.map((imgUrl, index) => (  
//     <div className="gallery-img-box" key={index}>
//         <label className="gallery-icon">
//             <Image
//             src={imgUrl} // Use the image URL from the breeder_image array
//             alt={`Breeder Image ${index + 1}`} // Give a unique alt tag for each image
//             width={100}  // Adjust width as needed
//             height={100} // Adjust height as needed
//             />
//         </label>
//     </div>
// ))}