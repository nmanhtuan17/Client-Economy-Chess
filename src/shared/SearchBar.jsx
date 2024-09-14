import React, { useState } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ lg }) => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const searchHandler = async (e) => {
    e.preventDefault();
    const apiUrlSearch = `http://127.0.0.1:5000/products/search`;

    try {
      const res = await axios.post(apiUrlSearch, { name });

      if (res.status < 200 || res.status >= 300) {
        throw new Error("Server error");
      }

      if (res.data.length === 0) {
        navigate("/products/search");
      } else {
        navigate(
          `/products/search`,
          { state: res.data }
        );
      }
    } catch (error) {
      setError(true);
      navigate("/products/search");
    }
  };

  return (
    <Col lg={lg}>
      <div className="search__bar">
        <Form className="d-flex items-center gap-4" onSubmit={searchHandler}>
          <FormGroup className="d-flex gap-3 form__group form__group-fast mt-3">
            <input
              type="text"
              placeholder="Search Chess House"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <button className="search__icon" type="submit">
            <i className="ri-search-line"></i>
          </button>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
