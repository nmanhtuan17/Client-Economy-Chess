import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";

import registerImg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
	const [credentials, setCredentials] = useState({
		userName: "",
		email: "",
		password: "",
	});
	const navigate = useNavigate();
	const { dispatch } = useContext(AuthContext);

	const handleChange = (e) => {
		const { id, value } = e.target;
		setCredentials((prevCredentials) => ({
			...prevCredentials,
			[id]: value,
		}));
	};

	const handleClick = async (e) => {
		e.preventDefault();

		try {
			const res = await axios.post(
				"https://server-travel-booking.onrender.com/users/register",
				credentials
			);

			if (res.status === 200) {
				dispatch({ type: "REGISTER_SUCCESS" });
				navigate("/login");
			} else {
				const data = await res.data;
				if (data && data.message) {
					alert(data.message);
				} else {
					alert("Lỗi");
				}
			}
		} catch (err) {
			alert("Email đã tồn tại");
			console.error(err);
		}
	};

	return (
		<section>
			<Container>
				<Row>
					<Col lg={8} className="m-auto">
						<div className="login__container d-flex justify-content-between">
							<div className="login__img">
								<img src={registerImg} alt="" />
							</div>
							<div className="login__form">
								<div className="user">
									<img src={userIcon} alt="" />
								</div>
								<h2>Register</h2>
								<Form onSubmit={handleClick}>
									<FormGroup>
										<input
											type="text"
											placeholder="Username"
											id="userName"
											required
											onChange={handleChange}
										/>
									</FormGroup>

									<FormGroup>
										<input
											type="email"
											placeholder="Email"
											id="email"
											required
											onChange={handleChange}
										/>
									</FormGroup>

									<FormGroup>
										<input
											type="password"
											placeholder="Password"
											id="password"
											required
											onChange={handleChange}
										/>
									</FormGroup>

									<Button
										type="submit"
										className="btn secondary__btn auth__btn"
									>
										Create Account
									</Button>
								</Form>

								<p>
									Already have an account? <Link to="/login">Login</Link>
								</p>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Register;
