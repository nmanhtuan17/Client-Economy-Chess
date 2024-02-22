import React, { useState } from "react";
import "./search-bar.css";

import { Col, Form, FormGroup } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [distance, setDistance] = useState(0);
  const [maxGroupSize, setMaxGroupSize] = useState(0);
  const [error, setError] = useState(false); // Thêm biến state để theo dõi lỗi
  const navigate = useNavigate();

  const searchHandler = async () => {
    const apiUrlSearch = `https://server-travel-booking.onrender.com/tours/search/${location}/${distance}/${maxGroupSize}`;

    try {
		const res = await axios.post(apiUrlSearch);
  
		if (res.status < 200 || res.status >= 300) {
		  throw new Error("Server error");
		}
  
		if (res.data.length === 0) {
		  // Nếu không tìm thấy tour, chuyển hướng đến SearchResultList
		  navigate("/tours/search");

		} else {
		  navigate(
			`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
			{ state: res.data }
		  );
		}
	  } catch (error) {
		// Nếu có lỗi, đặt state 'error' thành true
		setError(true);
		navigate("/tours/search");
	  }
  };

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex items-center gap-4">
          <FormGroup className="d-flex  gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location </h6>
              <input
                type="text"
                placeholder="Where are you going?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>Distance</h6>
              <input
                type="number"
                placeholder="Distance k/m"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
              />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form__group form__group-last">
            <span>
              <i className="ri-group-line"></i>
            </span>
            <div>
              <h6>Max Group Size</h6>
              <input
                type="number"
                placeholder="0"
                value={maxGroupSize}
                onChange={(e) => setMaxGroupSize(e.target.value)}
              />
            </div>
          </FormGroup>

          <span className="search__icon" type="submit" onClick={searchHandler}>
            <i className="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
