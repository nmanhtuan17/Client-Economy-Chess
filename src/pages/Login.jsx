import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import "../styles/login.css";

import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";

const Login = () => {
	const [credentials, setCredentials] = useState({
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
				"https://server-travel-booking.onrender.com/users/login",
				credentials
			);

			if (res.status === 200) {
				dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
				navigate("/");
			} else {
				const data = await res.data;
				alert(data.message);
			}
		} catch (error) {
			dispatch({ type: "LOGIN_FAITULE", payload: error.data });
			console.error(error);
			alert("Tai khoan hoac mat khau khong dung");
		}
	};

	return (
		<section>
			<Container>
				<Row>
					<Col lg={8} className="m-auto">
						<div className="login__container d-flex justify-content-between">
							<div className="login__img">
								<img src={loginImg} alt="" />
							</div>
							<div className="login__form">
								<div className="user">
									<img src={userIcon} alt="" />
								</div>
								<h2>Login</h2>

								<Form onSubmit={handleClick}>
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
										Login
									</Button>
								</Form>

								<p>
									Don't have an account? <Link to="/register">Create</Link>
								</p>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Login;
