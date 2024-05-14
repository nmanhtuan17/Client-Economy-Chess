import React from "react";
import "./search-bar.css";

import { Col, Form, FormGroup } from "reactstrap";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  // const [location, setLocation] = useState("");
  // const [distance, setDistance] = useState(0);
  // const [maxGroupSize, setMaxGroupSize] = useState(0);
  // const [error, setError] = useState(false); // Thêm biến state để theo dõi lỗi
  // const navigate = useNavigate();

  const searchHandler = async () => {
  //   const apiUrlSearch = `https://server-travel-booking.onrender.com/tours/search/${location}/${distance}/${maxGroupSize}`;

  //   try {
	// 	const res = await axios.post(apiUrlSearch);
  
	// 	if (res.status < 200 || res.status >= 300) {
	// 	  throw new Error("Server error");
	// 	}
  
	// 	if (res.data.length === 0) {
	// 	  // Nếu không tìm thấy tour, chuyển hướng đến SearchResultList
	// 	  navigate("/tours/search");

	// 	} else {
	// 	  navigate(
	// 		`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
	// 		{ state: res.data }
	// 	  );
	// 	}
	//   } catch (error) {
		// Nếu có lỗi, đặt state 'error' thành true
	// 	setError(true);
	// 	navigate("/tours/search");
	//   }
  };

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast mt-3">
              <input
                type="text"
                placeholder="Search Chess House"
                // value={location}
                // onChange={(e) => setLocation(e.target.value)}
              />
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
