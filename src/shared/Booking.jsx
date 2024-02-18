import React, {useState} from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
const Booking = ({ tour, avgRating }) => {
	const { price, reviews } = tour;
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    useId: '01',
    userEmail: 'example@example.com',
    fullName:'',
    phone:"",
    guestSize:1,
    bookAt:''
  })

	const handleChange = (e) => {
    // Lấy giá trị và id của trường nhập từ sự kiện thay đổi
    const value = e.target.value;
    const id = e.target.id;
  
    // Cập nhật state credentials dựa trên giá trị mới của trường nhập
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  // send data to server

  const handleClick = (e) => {
    e.preventDefault();

    navigate('/thank-you');
  }

  const serviceFee = 10;
  let totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee);

	return (
		<div className="booking">
			<div className="booking__top d-flex align-items-center justify-content-between">
				<h3>
					${price} <span>per/ person</span>
				</h3>

				<span className="tour__rating d-flex align-items-center ">
					<i class="ri-star-fill"></i>
					{avgRating === 0 ? null : avgRating} ({reviews?.length})
				</span>
			</div>

			{/* ======================== booking form ================== */}

			<div className="booking__form">
				<h5>Information</h5>
				<Form className="booking__info-form" onSubmit={handleClick}>
					<FormGroup>
						<input
							type="text"
							placeholder="Full Name"
							id="fullName"
							required
							onChange={handleChange}
						/>
					</FormGroup>

					<FormGroup>
						<input
							type="text"
							placeholder="Phone"
							id="phone"
							required
							onChange={handleChange}
						/>
					</FormGroup>

					<FormGroup className="d-flex align-items-center gap-3">
						<input
							type="date"
							placeholder=""
							id="bookAt"
							required
							onChange={handleChange}
						/>

						<input
							type="number"
							placeholder="Guest"
							id="guestSize"
							required
							onChange={handleChange}
						/>
					</FormGroup>
				</Form>
			</div>

			{/* Booking bottom */}
			<div className="booking__bottom">
				<ListGroup>
					<ListGroupItem className="border-0 px-0">
						<h5 className="d-flex align-items-center gap-1">
							${price}
							<i className="ri-close-line">1 person</i>
						</h5>
						<span>${price}</span>
					</ListGroupItem>
          <ListGroupItem className="border-0 px-0">
						<h5>
							Service charge
						</h5>
						<span>${serviceFee}</span>
					</ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
						<h5>
							Total
						</h5>
						<span>${totalAmount}</span>
					</ListGroupItem>
				</ListGroup>

        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>Book Now</Button>
			</div>
		</div>
	);
};

export default Booking;
