
"use client"; // This directive is needed for client components
import UserProfileLeft from "../../../components/UserProfileLeft"; // Import your left profile component
import Image from "next/image"; // Using Next.js Image component for better performance
import { useEffect, useState } from "react"; // Importing React hooks
import axios from "axios"; // Importing Axios for API requests
import BASE_URL from '../../utils/constant'; // Importing the base URL from constants

const Alert = () => {
  const [pets, setPets] = useState([]); // This will store the list of pets
  const [currentPage, setCurrentPage] = useState(1); // Current page in pagination
  const petsPerPage = 8; // Number of pets per page

  useEffect(() => {
    // Fetch pets data (for demonstration, assuming this fetches all the pets)
    const fetchPets = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/pets`);
        setPets(response.data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };

    fetchPets();
  }, []);

  // Calculate total pages based on the number of pets
  const totalPages = Math.ceil(pets.length / petsPerPage);

  // Get the pets to display on the current page
  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const currentPets = pets.slice(indexOfFirstPet, indexOfLastPet);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="pets-breeder-wrap">
      <div className="container">
        <div className="aligns-filter-pets">
          <div className="searchbar-filter-sec">
            <div className="search-wrap">
              <form action="">
                <label htmlFor="">
                  <input type="text" placeholder="Search by Animal Type, Breed or Location" />
                  <button type="button">
                    <Image src="/images/Nextpet-imgs/all-icons/serch2.svg" alt="" width={20} height={20} />
                  </button>
                </label>
              </form>
            </div>
          </div>
          <div className="search-filter-sec">
            <div className="pets-filters-wrap">
              <div className="filter-sec">
                <div className="quotes2">
                  <div className="dropdown-filterbtn">Sort
                    <Image src="/images/Nextpet-imgs/dashboard-imgs/mi_filter.svg" alt="" width={20} height={20} />
                  </div>
                  <div className="dropdown-showfilter">
                    <div className="quotes-list">
                      <div className="filter-data-list">
                        <input type="radio" name="exp_language2" value="2" />
                        <p>Nearby</p>
                      </div>
                      <div className="filter-data-list">
                        <input type="radio" name="exp_language2" value="2" />
                        <p>Recent</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="filter-sec">
                <div className="quotes2">
                  <div className="dropdown-filterbtn" data-bs-target="#contact-coach" data-bs-toggle="modal">Filter
                    <Image src="/images/Nextpet-imgs/dashboard-imgs/mi_filter.svg" alt="" width={20} height={20} />
                  </div>
                </div>
              </div>

              <div className="location-filter">
                <a href="map.html">
                  <i className="fas fa-map-marker-alt"></i>
                </a>
                <button type="button">
                  <Image src="/images/Nextpet-imgs/all-icons/filter-map-icon.svg" alt="" width={20} height={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pets-breeder-cards">
          {currentPets.map((pet, index) => (
            <div key={index} className="newyear-cat-dog-in">
              <div className="newyear-catimg-wrap">
                <Image src={pet.image} alt={pet.name} loading="lazy" width={300} height={200} />
                <div className="heart-icon-wrap">
                  <Image src="/images/Nextpet-imgs/dashboard-imgs/heart-border2.svg" alt="" className="active" width={20} height={20} />
                  <Image src="/images/Nextpet-imgs/dashboard-imgs/heart-fill.svg" alt="" width={20} height={20} />
                  <span>{pet.likes}</span>
                </div>
              </div>
              <div className="newyear-content-card">
                <div className="before-curve-icons">
                  <Image src="/images/Nextpet-imgs/dashboard-imgs/all-cards-before.svg" alt="" width={20} height={20} />
                </div>
                <div className="heading-content">
                  <h3>{pet.name}</h3>
                  <div className="mail-boxwrap">
                    <Image src="/images/Nextpet-imgs/dashboard-imgs/yellow-mail-letter.svg" alt="" width={20} height={20} />
                    <div className="mail-count" data-bs-target="#breeder-guide2" data-bs-toggle="modal">
                      <span>{pet.inquiries}</span>
                    </div>
                  </div>
                </div>
                <p>{pet.description}</p>
                <div className="viewmore-wrap">
                  <h4>${pet.price}</h4>
                  <div className="action-wrap">
                    <a href={`contact-pet-details.html?pet_id=${pet.id}`}>View More&nbsp;
                      <i className="fas fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="influ-pagi pt-4">
          <ul>
            <li>
              <a
                href="#"
                onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
              >
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
              </a>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index} className={currentPage === index + 1 ? "active" : ""}>
                <a href="#" onClick={() => paginate(index + 1)}>{index + 1}</a>
              </li>
            ))}
            <li>
              <a
                href="#"
                onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
              >
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Alert;
