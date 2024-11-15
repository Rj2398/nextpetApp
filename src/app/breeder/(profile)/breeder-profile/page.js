"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
// import OtpInput from 'react-otp-input';
import Cookies from 'js-cookie';
import BASE_URL from '../../../utils/constant'
import { toast } from "react-toastify";

const VerificationCode = () => {
    const [imagePreview, setImagePreview] = useState("");
    // const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [bio, setBio] = useState(null);
    const [business_name, setBusinessName] = useState(null);
    const [email, setEmail] = useState(null);
    const [location, setLocation] = useState(null);
    const [login_with, setLoginWith] = useState(null);
    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [website, setWebsite] = useState(null);
    const [image, setImage] = useState(null);
    const [breeder_footer_image, setBreederImage] = useState(null);
    const [saveInputBreederImage, setSaveInputBreederImage] = useState([]);
    const [breeder_max_image_error, setBreederMaxImageError] = useState(null);

    const router = useRouter();
    const breederUserId = localStorage.getItem("breeder_user_id");
    console.log("breederUserId : ",breederUserId);
  
    // Fetch user details from API
    const fetchUserDetails = async () => {
      try {
        // const userId = Cookies.get("user_id"); // Assuming the user_id is stored in a cookie
        // console.log(userId);
        // const breederUserId = localStorage.getItem("breeder_user_id");
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
          setLoginWith(response.data.data.login_with)
          setName(response.data.data.name)
          setPhone(response.data.data.phone)
          setWebsite(response.data.data.website)
          setImage(response.data.data.image)
          setBreederImage(response.data.data.breeder_image)

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
      return <p>{error}</p>;
    
    }
    //
    // Handle file selection and image preview
    const handleImageChange = (e) => {
        try {
            const file = e.target.files[0];
            if (!file) throw new Error("No file selected");
            setImage(file); // Store the actual file object
        } catch (error) {
            console.error("Error handling file change:", error);
        }
    };

    const handleBreederImageChange = (e) => {
        const files = e.target.files; // Get the selected files (multiple)
        console.log(files.length);
        console.log(breeder_footer_image.length);
        console.log(files.length + breeder_footer_image.length);
        if(files.length + breeder_footer_image.length > 12){
            console.log(`Your Enter Image length is ${files.length} and Previous save Image Count is ${breeder_footer_image.length} You can save Max 12 Image`);       
            setBreederMaxImageError(`Your Enter Image length is ${files.length} and Previous save Image Count is ${breeder_footer_image.length} You can save Max 12 Image`)
        }
        else{
            setBreederMaxImageError('');
        }

        try {
            // const files = e.target.files; // Get the selected files (multiple)
            // if (!files || files.length === 0) return; // Stop if no files are selected
            // const imageArray = Array.from(files); // Convert FileList to an array
            // console.log(imageArray)
            // setSaveInputBreederImage(imageArray); // Store the array of files
            const files = e.target.files;
            const imagesArray = Array.from(files).map(file => file); // Keep file references
            // Update state with the new images
            setSaveInputBreederImage(prevImages => [...prevImages, ...imagesArray]);

        } catch (error) {
            console.error("Error handling file change:", error);
        }
    };
    
    //
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("user_id", breederUserId);
        formData.append("bio", bio || "");
        formData.append("business_name", business_name || "");
        formData.append("email", email || "");
        formData.append("location", location || "");
        formData.append("name", name || "");
        formData.append("phone", phone || "");
        formData.append("website", website || ""); 

        if (image instanceof File) {
            formData.append("image", image); // Append the image file if it exists
        }

        try {
            // Send the form data to your API
            const response = await axios.post(`${BASE_URL}/api/update_profile`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            toast.success("Updated Profile");
            router.push('/breeder/breeder-profile/dashboard-breeder-profile');
            // console.log("Profile updated successfully2:", response.data);
        } catch (error) {
            toast.error("Network Error");
            
            console.error("Error updating profile:", error);
        }
        console.log("saveInputBreederImagesaveInputBreederImagesaveInputBreederImagesaveInputBreederImage",saveInputBreederImage);
        //Handle Multiple Image To Edit
        if (saveInputBreederImage) {
            if(saveInputBreederImage.length + breeder_footer_image.length > 12){
                console.log("Total Image count count is ::", saveInputBreederImage.length + breeder_footer_image.length);
                setBreederMaxImageError(`Your Enter Image length is ${saveInputBreederImage.length} and Previous save Image Count is ${breeder_footer_image.length} You can save Max 12 Image`)
                return;
            }
            else{
                console.log("Handle Multiple Image To Edit Else Part")
                const formDataBreederImage = new FormData();
                formDataBreederImage.append("id", breederUserId);

                //formDataBreederImage.append("breeder_image[]", saveInputBreederImage); // Append the image file if it exists
                saveInputBreederImage.forEach(image => {
                    formDataBreederImage.append('breeder_image[]', image); // Using 'images[]' for multiple files
                });

                try {
                    // Send the form data to your API
                    const response = await axios.post(`${BASE_URL}/api/edit_image_breeder`, formDataBreederImage, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    });
                    console.log("Data updated :", response);
                    setBreederMaxImageError('');//Update Max Error 
                } catch (error) {
                    console.error("Error updating profile:", error);
                }
            }
        }
      };

  
    return (
        <>
        <div className="breeder-profile-wrap">
            <div className="breeder-profile-inner">
            <div className="profile-pic-wrap">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                <h1>Profile</h1>
                <div className="profile-right-img">
                    <div
                    className="profile-right-img-prev"
                    style={{
                        backgroundImage: `url(${
                        image || imagePreview || "/images/Nextpet-imgs/all-icons/user.svg"
                        })`,
                    }}
                    id="imagePreview"
                    ></div>
                    <label className="upload-icon">
                    <Image
                        src="/images/Nextpet-imgs/profile-page-imgs/breeder-img.svg"
                        alt="Upload"
                        width={15}
                        height={15} 
                    />
                    <input
                        type="file"
                        // onChange={handleImageChange}
                        accept="image/*"
                        onChange={handleImageChange}
                    
                    />
                    </label>
                </div>
                <div className="profile-form-wrap">
                    <label>
                    <Image
                        src="/images/Nextpet-imgs/breeder-signin-imgs/user.svg"
                        alt="User"
                        width={15}
                        height={15}
                    />
                    <input type="text" placeholder="Your Name*" value={name} onChange={(e) => setName(e.target.value)} required />
                    </label>

                    <label>
                    <Image
                        src="/images/Nextpet-imgs/breeder-signin-imgs/user.svg"
                        alt="Business Name"
                        width={15}
                        height={15}
                    />
                    <input type="text" placeholder="Business Name (optional)" value={business_name} onChange={(e) => setBusinessName(e.target.value)} />
                    </label>

                    <label>
                    <Image
                        src="/images/Nextpet-imgs/breeder-signin-imgs/mail-icon.svg"
                        alt="Email"
                        width={15}
                        height={15}
                    />
                    <input type="email" placeholder="Email*" onChange={(e) => setEmail(e.target.value)} required 
                    readOnly={login_with == "Email"} // Make input read-only if login_with is not "Email"
                    value={email} />
                    </label>

                    <label>
                    <Image
                        src="/images/Nextpet-imgs/profile-page-imgs/call.svg"
                        alt="Phone"
                        width={15}
                        height={15}
                        readOnly={login_with == "Phone"} // Make input read-only if login_with is not "Email"
                    />
                    <input
                        type="number"
                        maxLength={10}
                        minLength={10}
                        placeholder="Phone Number*"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    </label>

                    <label>
                    <Image
                        src="/images/Nextpet-imgs/profile-page-imgs/location.svg"
                        alt="Website"
                        width={15}
                        height={15}
                    />
                    <input type="text" placeholder="Website*" onChange={(e) => setWebsite(e.target.value)} value={website} required />
                    </label>

                    <label>
                    <Image
                        src="/images/Nextpet-imgs/profile-page-imgs/location.svg"
                        alt="Location"
                        width={15}
                        height={15}
                        value={location}
                    />
                    <input type="text" onChange={(e) => setLocation(e.target.value)} placeholder="Location*" required />
                    </label>

                    <label>
                    <textarea
                        placeholder="Business Description*"
                        required
                        onChange={(e) => setBio(e.target.value)} >{bio}</textarea>
                    </label>

                    <div className="gallery-imgs-wp">
                        <div className="gallery-heading">
                            <h3>Gallery</h3>
                            <div className="tooltip">
                            <Image
                                src="/images/Nextpet-imgs/profile-page-imgs/i-icon.svg"
                                alt=""
                                width={15}
                                height={15}
                                // onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="tooltiptext">
                                A simple gallery of nine photos of the breeder’s choice.
                            </span>
                        </div>
                    </div>

                    <div className="gallery-box-wrap">
                        {breeder_footer_image.map((imgUrl, index) => (  
                            <div className="gallery-img-box" key={index}>
                                <label className="gallery-icon">
                                    <Image
                                    src={imgUrl}
                                    alt={`Breeder Image ${index + 1}`} 
                                    width={100} 
                                    height={100}
                                    />                                    
                                </label>
                                
                            </div>                        
                        ))}

                        {breeder_footer_image.length < 12 && (
                            <div className="gallery-img-box">
                                <label className="gallery-icon">
                                    <Image
                                        src="/images/Nextpet-imgs/profile-page-imgs/add-circle.svg"
                                        alt=""
                                        width={15}
                                        height={15}
                                    />
                                    <input type="file" accept="image/*" onChange={handleBreederImageChange} multiple/>
                                    
                                </label>
                            </div>
                        )}
                    </div>
                    {breeder_max_image_error && <p style={{ color: 'red' }}>{breeder_max_image_error}</p>}

                    
                    </div>

                    <div className="profile-btn-wrap">
                    <button
                        type="submit"
                        value="Submit"
                        
                    >
                        Submit
                    </button>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </div>
        </>
    );
};

export default VerificationCode;