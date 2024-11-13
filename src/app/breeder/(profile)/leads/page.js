// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import OtpInput from 'react-otp-input';
// import Cookies from 'js-cookie';
// import BreederProfileLeft from '../../../../components/BreederProfileLeft'



// const Leads = () => {
//     const breederData = {
//         page: "leads",
//       };
//     return (
//         <>
            
//             <div className="breedeerdasboard-profile-wrap">
//                 <div className="container">
//                 <div className="col-lg-12">
//                     <div className="breedeerdasboard-profile-inner">
//                     <BreederProfileLeft data={breederData}/>

//                     <div className="leads-right">
//                         <form action="">
//                         <div className="leads-inner-wrap">
                           
//                             <div className="filter-sec">
//                             <div className="quotes2">
//                                 <div className="dropdown-filterbtn">Filter<Image
//                                     src="/images/Nextpet-imgs/dashboard-imgs/mi_filter.svg" alt="" width={20} height={20}/>
//                                 </div>
//                                 <div className="dropdown-showfilter">
//                                 <div className="quotes-list">
//                                     <div className="filter-data-list">
//                                     <input type="checkbox" value="" checked="checked"/>
//                                     <p>All</p>
//                                     </div>
//                                     <div className="filter-data-list">
//                                     <input type="checkbox" value=""/>
//                                     <p>Pending</p>
//                                     </div>
//                                     <div className="filter-data-list">
//                                     <input type="checkbox" value=""/>
//                                     <p>Shortlisted</p>
//                                     </div>
//                                     <div className="filter-data-list">
//                                     <input type="checkbox" value=""/>
//                                     <p>Archived</p>
//                                     </div>
//                                     <div className="filter-data-list">
//                                     <input type="checkbox" value=""/>
//                                     <p>Adopted</p>
//                                     </div>
//                                 </div>
//                                 </div>
//                             </div>
//                             </div>
                          
//                             <div className="leads-header-wrap">
//                             <p>3 days ago</p>
//                             </div>
                          
//                             <div className="leads-card-wrap">
                            
//                             <div className="leads-box">
                               
//                                 <div className="image-circle">
//                                 <Image src="/images/Nextpet-imgs/dashboard-imgs/lead1.png" alt="" width={131} height={129}/>
//                                 </div>
                            
//                                 <div className="leads-content-wrap">
//                                 <div className="headinglead-wrap">
//                                     <h3>Richard Brown</h3>
//                                     <div className="rating-count">
//                                     <span>4.4&nbsp;<i className="fas fa-star"></i></span>
//                                     </div>
//                                 </div>
//                                 <h4>Interested in Browni</h4>
//                                 <p>Lorem ipsum consetu</p>
//                                 <div className="date-wrap">
//                                     <span><i className="far fa-clock"></i> 04/10/2022 |
//                                     11:25 am</span>
//                                     <a href="#"><i className="fas fa-chevron-right"></i></a>
//                                 </div>
//                                 </div>
                          
//                             </div>
                           
                            
//                             <div className="leads-box">
                              
//                                 <div className="image-circle">
//                                 <Image src="/images/Nextpet-imgs/dashboard-imgs/lead2.png" alt="" width={131} height={129}/>
//                                 </div>
                             
//                                 <div className="leads-content-wrap">
//                                 <div className="headinglead-wrap">
//                                     <h3>Lorem ipsum dolo</h3>
//                                     <div className="rating-count">
//                                     <span>4.4&nbsp;<i className="fas fa-star"></i></span>
//                                     </div>
//                                 </div>
//                                 <h4>Interested in Browni</h4>
//                                 <p>Lorem ipsum consetu</p>
//                                 <div className="date-wrap">
//                                     <span><i className="far fa-clock"></i> 04/10/2022 |
//                                     11:25 am</span>
//                                     <a href="#"><i className="fas fa-chevron-right"></i></a>
//                                 </div>
//                                 </div>
                           
//                             </div>
                     
//                             <div className="leads-box">
                     
//                                 <div className="image-circle">
//                                 <Image src="/images/Nextpet-imgs/dashboard-imgs/lead3.png" alt="" width={131} height={129}/>
//                                 </div>
                         
//                                 <div className="leads-content-wrap">
//                                 <div className="headinglead-wrap">
//                                     <h3>Lorem ipsum dolo</h3>
//                                     <div className="rating-count">
//                                     <span>4.4&nbsp;<i className="fas fa-star"></i></span>
//                                     </div>
//                                 </div>
//                                 <h4>Interested in Browni</h4>
//                                 <p>Lorem ipsum consetu</p>
//                                 <div className="date-wrap">
//                                     <span><i className="far fa-clock"></i> 04/10/2022 |
//                                     11:25 am</span>
//                                     <a href="#"><i className="fas fa-chevron-right"></i></a>
//                                 </div>
//                                 </div>
                              
//                             </div>
                  
                          
//                             <div className="leads-box">
                            
//                                 <div className="image-circle">
//                                 <Image src="/images/Nextpet-imgs/dashboard-imgs/lead4.png" alt="" width={131} height={129}/>
//                                 </div>
                           
//                                 <div className="leads-content-wrap">
//                                 <div className="headinglead-wrap">
//                                     <h3>Lorem ipsum dolo</h3>
//                                     <div className="rating-count">
//                                     <span>4.4&nbsp;<i className="fas fa-star"></i></span>
//                                     </div>
//                                 </div>
//                                 <h4>Interested in Browni</h4>
//                                 <p>Lorem ipsum consetu</p>
//                                 <div className="date-wrap">
//                                     <span><i className="far fa-clock"></i> 04/10/2022 |
//                                     11:25 am</span>
//                                     <a href="#"><i className="fas fa-chevron-right"></i></a>
//                                 </div>
//                                 </div>
                              
//                             </div>
                         
//                             </div>
                      
//                             <div className="leads-header-wrap">
//                             <p>2 weeks ago</p>
//                             </div>
                            
//                             <div className="leads-card-wrap">
                            
//                             <div className="leads-box">
                          
//                                 <div className="image-circle">
//                                 <Image src="/images/Nextpet-imgs/dashboard-imgs/lead1.png" alt="" width={131} height={129}/>
//                                 </div>
                         
//                                 <div className="leads-content-wrap">
//                                 <div className="headinglead-wrap">
//                                     <h3>Richard Brown</h3>
//                                     <div className="rating-count">
//                                     <span>4.4&nbsp;<i className="fas fa-star"></i></span>
//                                     </div>
//                                 </div>
//                                 <h4>Interested in Browni</h4>
//                                 <p>Lorem ipsum consetu</p>
//                                 <div className="date-wrap">
//                                     <span><i className="far fa-clock"></i> 04/10/2022 |
//                                     11:25 am</span>
//                                     <a href="#"><i className="fas fa-chevron-right"></i></a>
//                                 </div>
//                                 </div>
                            
//                             </div>
                        
//                             <div className="leads-box">
                              
//                                 <div className="image-circle">
//                                 <Image src="/images/Nextpet-imgs/dashboard-imgs/lead2.png" alt="" width={131} height={129}/>
//                                 </div>
                          
//                                 <div className="leads-content-wrap">
//                                 <div className="headinglead-wrap">
//                                     <h3>Lorem ipsum dolo</h3>
//                                     <div className="rating-count">
//                                     <span>4.4&nbsp;<i className="fas fa-star"></i></span>
//                                     </div>
//                                 </div>
//                                 <h4>Interested in Browni</h4>
//                                 <p>Lorem ipsum consetu</p>
//                                 <div className="date-wrap">
//                                     <span><i className="far fa-clock"></i> 04/10/2022 |
//                                     11:25 am</span>
//                                     <a href="#"><i className="fas fa-chevron-right"></i></a>
//                                 </div>
//                                 </div>
                           
//                             </div>
                            
//                             <div className="leads-box">
                           
//                                 <div className="image-circle">
//                                 <Image src="/images/Nextpet-imgs/dashboard-imgs/lead3.png" alt="" width={131} height={129}/>
//                                 </div>
                        
//                                 <div className="leads-content-wrap">
//                                 <div className="headinglead-wrap">
//                                     <h3>Lorem ipsum dolo</h3>
//                                     <div className="rating-count">
//                                     <span>4.4&nbsp;<i className="fas fa-star"></i></span>
//                                     </div>
//                                 </div>
//                                 <h4>Interested in Browni</h4>
//                                 <p>Lorem ipsum consetu</p>
//                                 <div className="date-wrap">
//                                     <span><i className="far fa-clock"></i> 04/10/2022 |
//                                     11:25 am</span>
//                                     <a href="#"><i className="fas fa-chevron-right"></i></a>
//                                 </div>
//                                 </div>
                             
//                             </div>
                        
//                             <div className="leads-box">
                           
//                                 <div className="image-circle">
//                                 <Image src="/images/Nextpet-imgs/dashboard-imgs/lead4.png" alt="" width={131} height={129}/>
//                                 </div>
                             
//                                 <div className="leads-content-wrap">
//                                 <div className="headinglead-wrap">
//                                     <h3>Lorem ipsum dolo</h3>
//                                     <div className="rating-count">
//                                     <span>4.4&nbsp;<i className="fas fa-star"></i></span>
//                                     </div>
//                                 </div>
//                                 <h4>Interested in Browni</h4>
//                                 <p>Lorem ipsum consetu</p>
//                                 <div className="date-wrap">
//                                     <span><i className="far fa-clock"></i> 04/10/2022 |
//                                     11:25 am</span>
//                                     <a href="#"><i className="fas fa-chevron-right"></i></a>
//                                 </div>
//                                 </div>
                                
//                             </div>
                           
//                             </div>
                           
//                         </div>
                     
//                         <div className="influ-pagi">
//                             <ul>
//                             <li><a href="#"><i className="fa fa-arrow-left" aria-hidden="true"></i></a></li>
//                             <li className="active"><a href="#">1</a></li>
//                             <li><a href="#">2</a></li>
//                             <li><a href="#">3</a></li>
//                             <li><a href="#"><i className="fa fa-arrow-right" aria-hidden="true"></i></a></li>
//                             </ul>
//                         </div>
                       
//                         </form>
//                     </div>
                  
//                     </div>
//                 </div>
//                 </div>
//             </div>
        
          
//         </>
//     );
// };
// export default Leads;


"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import axios from "axios";
import BreederProfileLeft from "../../../../components/BreederProfileLeft";

const Leads = () => {
  // const router = useRouter();

  // Define state to manage leads, filters, and pagination
  const [leads, setLeads] = useState([]);
  const [filters, setFilters] = useState({
    all: true,
    pending: false,
    shortlisted: false,
    archived: false,
    adopted: false,
  });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Breeder data
  const breederData = {
    page: "leads",
  };

  // Fetch leads data based on filters and page
  const fetchLeads = async () => {
    try {
      const response = await axios.get(`/api/leads`, {
        params: { filters, page },
      });
      setLeads(response.data.leads);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching leads:", error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [filters, page]);

  // Handle filter change
  const handleFilterChange = (filter) => {
    if (filter === "all") {
      // Set all filters to false except 'all'
      setFilters({
        all: true,
        pending: false,
        shortlisted: false,
        archived: false,
        adopted: false,
      });
    } else {
      // Toggle the selected filter and disable 'all'
      setFilters((prevFilters) => ({
        ...prevFilters,
        all: false,
        [filter]: !prevFilters[filter], // Toggle the specific filter
      }));
    }
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <div className="breedeerdasboard-profile-wrap">
        <div className="container">
          <div className="col-lg-12">
            <div className="breedeerdasboard-profile-inner">
              <BreederProfileLeft data={breederData} />

              <div className="leads-right">
                <form action="">
                  <div className="leads-inner-wrap">
                    {/* Filter section */}
                    <div className="filter-sec">
                      <div className="quotes2">
                        <div className="dropdown-filterbtn">
                          Filter
                          <Image
                            src="/images/Nextpet-imgs/dashboard-imgs/mi_filter.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="dropdown-showfilter">
                          <div className="quotes-list">
                            <div className="filter-data-list">
                              <input
                                type="checkbox"
                                checked={filters.all}
                                onChange={() => handleFilterChange("all")}
                              />
                              <p>All</p>
                            </div>
                            <div className="filter-data-list">
                              <input
                                type="checkbox"
                                checked={filters.pending}
                                onChange={() => handleFilterChange("pending")}
                              />
                              <p>Pending</p>
                            </div>
                            <div className="filter-data-list">
                              <input
                                type="checkbox"
                                checked={filters.shortlisted}
                                onChange={() => handleFilterChange("shortlisted")}
                              />
                              <p>Shortlisted</p>
                            </div>
                            <div className="filter-data-list">
                              <input
                                type="checkbox"
                                checked={filters.archived}
                                onChange={() => handleFilterChange("archived")}
                              />
                              <p>Archived</p>
                            </div>
                            <div className="filter-data-list">
                              <input
                                type="checkbox"
                                checked={filters.adopted}
                                onChange={() => handleFilterChange("adopted")}
                              />
                              <p>Adopted</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Leads List */}
                    <div className="leads-header-wrap">
                      <p>3 days ago</p>
                    </div>
                    <div className="leads-card-wrap">
                      {leads.length > 0 ? (
                        leads.map((lead, index) => (
                          <div key={index} className="leads-box">
                            <div className="image-circle">
                              <Image
                                src={lead.image}
                                alt=""
                                width={131}
                                height={129}
                              />
                            </div>
                            <div className="leads-content-wrap">
                              <div className="headinglead-wrap">
                                <h3>{lead.name}</h3>
                                <div className="rating-count">
                                  <span>
                                    {lead.rating}&nbsp;
                                    <i className="fas fa-star"></i>
                                  </span>
                                </div>
                              </div>
                              <h4>{lead.interestedIn}</h4>
                              <p>{lead.description}</p>
                              <div className="date-wrap">
                                <span>
                                  <i className="far fa-clock"></i>{" "}
                                  {lead.date} | {lead.time}
                                </span>
                                <a href="#">
                                  <i className="fas fa-chevron-right"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p>No leads available</p>
                      )}
                    </div>

                    {/* Pagination */}
                    <div className="influ-pagi">
                      <ul>
                        <li>
                          <a
                            href="#"
                            onClick={() => handlePageChange(page - 1)}
                            disabled={page === 1}
                          >
                            <i className="fa fa-arrow-left" aria-hidden="true"></i>
                          </a>
                        </li>
                        {Array.from({ length: totalPages }, (_, i) => (
                          <li
                            key={i + 1}
                            className={page === i + 1 ? "active" : ""}
                          >
                            <a href="#" onClick={() => handlePageChange(i + 1)}>
                              {i + 1}
                            </a>
                          </li>
                        ))}
                        <li>
                          <a
                            href="#"
                            onClick={() => handlePageChange(page + 1)}
                            disabled={page === totalPages}
                          >
                            <i className="fa fa-arrow-right" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
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

export default Leads;
