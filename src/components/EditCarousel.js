// "use client";
// import React, { useEffect, useState } from "react";

// const EditCarousel = ({ previousPostImage = [], onEditImage }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Function to go to the next image
//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % previousPostImage.length);
//   };

//   // Auto play the carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextImage();
//     }, 3000); // Change image every 3 seconds
//     return () => clearInterval(interval);
//   }, [previousPostImage]); // Dependency array includes previousPostImage to reset interval if images change

//   // Inline styles
//   const carouselStyle = {
//     position: "relative",
//     width: "100%", // Full width of the container
//     maxWidth: "345px", // Set a maximum width for the carousel
//     maxHeight: "250px", // Set a maximum height for the carousel
//     margin: "0 auto", // Center the carousel
//     overflow: "hidden", // Hide overflow
//   };

//   const imageContainerStyle = {
//     display: "flex",
//     transition: "transform 0.5s ease-in-out", // Smooth transition effect
//     transform: `translateX(-${currentIndex * 100}%)`, // Move left based on current index
//   };

//   const imageWrapperStyle = {
//     position: "relative", // Position relative to allow absolute positioning of the icon
//     minWidth: "100%", // Ensure each image takes full width
//     maxHeight: "250px", // Maintain the maximum height
//   };

//   const imageStyle = {
//     width: "100%", // Ensure each image takes full width
//     height: "100%", // Fill the container height
//     objectFit: "cover", // Maintain aspect ratio, crop if necessary
//     borderRadius: "10px", // Rounded corners for images
//     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Subtle shadow for depth
//   };

//   const editIconStyle = {
//     position: "absolute",
//     top: "10px",
//     right: "10px",
//     backgroundColor: "rgba(255, 255, 255, 0.7)",
//     borderRadius: "50%",
//     padding: "5px",
//     cursor: "pointer",
//     zIndex: 10, // Ensure the icon is above the image
//   };

//   const indicatorsStyle = {
//     position: "absolute",
//     bottom: "10px",
//     left: "50%",
//     transform: "translateX(-50%)",
//     display: "flex",
//   };

//   const dotStyle = (isActive) => ({
//     cursor: "pointer",
//     margin: "0 5px",
//     width: "12px",
//     height: "12px",
//     backgroundColor: isActive ? "#333" : "lightgray",
//     borderRadius: "50%",
//     transition: "background-color 0.3s ease", // Smooth color transition
//   });

// //   const onEditImage = (e) => {
// //     console.log(e);
// //   }

//   return (
//     <div style={carouselStyle}>
//       <div style={imageContainerStyle}>
//         {previousPostImage.map((image, index) => (
//           <div key={index} style={imageWrapperStyle}>
//             <img
//               src={image}
//               alt={`Image ${index + 1}`}
//               style={imageStyle}
//             />
//             {/* Edit icon on each image */}
//             <div
//               style={editIconStyle}
//               onClick={() => onEditImage(image)} // Call onEdit with index to identify the image
//             >
//               ✏️ {/* You can replace this with an actual icon or image */}
//             </div>
            
//           </div>
//         ))}
//       </div>
//       <div style={indicatorsStyle}>
//         {previousPostImage.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             style={dotStyle(index === currentIndex)}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EditCarousel;


"use client";
import React, { useEffect, useState } from "react";

const EditCarousel = ({ previousPostImage = [], onEditImage, onDeleteImage, editPostPage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % previousPostImage.length);
  };

  // if(previousPostImage.length===0){
   
    
  // }

  // Auto play the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [previousPostImage]); // Dependency array includes previousPostImage to reset interval if images change

  // Inline styles
  const carouselStyle = {
    position: "relative",
    width: "100%", // Full width of the container
    maxWidth: "345px", // Set a maximum width for the carousel
    maxHeight: "250px", // Set a maximum height for the carousel
    margin: "0 auto", // Center the carousel
    overflow: "hidden", // Hide overflow
  };

  const imageContainerStyle = {
    display: "flex",
    transition: "transform 0.5s ease-in-out", // Smooth transition effect
    transform: `translateX(-${currentIndex * 100}%)`, // Move left based on current index
  };

  const imageWrapperStyle = {
    position: "relative", // Position relative to allow absolute positioning of the icon
    minWidth: "100%", // Ensure each image takes full width
    maxHeight: "250px", // Maintain the maximum height
  };

  const imageStyle = {
    width: "100%", // Ensure each image takes full width
    height: "100%", // Fill the container height
    objectFit: "cover", // Maintain aspect ratio, crop if necessary
    borderRadius: "10px", // Rounded corners for images
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Subtle shadow for depth
  };

  const iconStyle = {
    position: "absolute",
    top: "10px",
    cursor: "pointer",
    zIndex: 10, // Ensure the icon is above the image
  };

  const editIconStyle = {
    right: "40px", // Position the edit icon
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: "50%",
    padding: "5px",
    marginRight: "10px", // Add margin to the right of the edit icon
  };

  const deleteIconStyle = {
    right: "10px", // Position the delete icon
    backgroundColor: "rgba(255, 0, 0, 0.7)", // Optional: Different background color for distinction
    borderRadius: "50%",
    padding: "5px",
  };

  const indicatorsStyle = {
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
  };

  const dotStyle = (isActive) => ({
    cursor: "pointer",
    margin: "0 5px",
    width: "12px",
    height: "12px",
    backgroundColor: isActive ? "#333" : "lightgray",
    borderRadius: "50%",
    transition: "background-color 0.3s ease", // Smooth color transition
  });

  const handleFileChange = (e, image) => {
    const selectedFiles = Array.from(e.target.files);
    onEditImage(selectedFiles, image); // Call onEditImage with selected files and the image being edited
  };

  return (
    <div style={carouselStyle}>
      <div style={imageContainerStyle}>
        {previousPostImage.map((image, index) => (
          <div key={index} style={imageWrapperStyle}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              style={imageStyle}
            />
            {/* Edit icon on each image */}

            {editPostPage && 
            <>
            <div style={{ ...iconStyle, ...editIconStyle }} onClick={() => document.getElementById("fileInput").click()}>
              ✏️
            </div>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }} // Hide the file input
              multiple // Allow multiple file selection
              onChange={(e) => handleFileChange(e, image)}/>
            </>
            }

            {editPostPage && <>
              <div
              style={{ ...iconStyle, ...deleteIconStyle }}
              onClick={() => onDeleteImage(image)} // Call onDelete with the image to identify it
              >
              ❌
            </div>
            </>}
          </div>
        ))}
      </div>
      <div style={indicatorsStyle}>
        {previousPostImage.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={dotStyle(index === currentIndex)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default EditCarousel;
