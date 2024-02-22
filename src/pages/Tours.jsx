import React, { useEffect, useState } from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/tour.css";
import SearchBar from "../shared/SearchBar";
import Newsletter from "../shared/Newsletter";
import { Container, Row, Col } from "reactstrap";

import TourCard from "../shared/TourCard";
import useAxios from "../hooks/useAxios";
const Tours = () => {
	const [pageCount, setPageCount] = useState(0);
	const [page, setPage] = useState(0);

	const {
		data: tours,
		loading,
		error,
	} = useAxios(`https://server-travel-booking.onrender.com/tours`);

	const tourCount = tours.length;

	// pages = totalproduct / perPage

	useEffect(() => {
		const pages = Math.ceil(tourCount / 8); /// later we will backend data count

		setPageCount(pages);
		window.scroll(0, 0);
	}, [page, tours, tourCount]);

	return (
		<>
			<CommonSection title={"All Tours"} />
			<section>
				<Container>
					<Row>
						<SearchBar />
					</Row>
				</Container>
			</section>

			<section className="pt-0">
				<Container>
					{!loading && !error && (
						<Row>
							{tours?.map((tour) => (
								<Col lg={3} className="mb-4" key={tour._id}>
									<TourCard tour={tour} />
								</Col>
							))}
							<Col lg={12}>
								<div className="pagination d-flex items-center justify-center mt-4 gap-3">
									{[...Array(pageCount).keys()].map((number) => (
										// [0, 1, 2, 3, ..., pageCount]
										// sử dụng number để làm chỉ số
										<span
											key={number}
											onClick={() => setPage(number)}
											className={page === number ? "active__page" : ""}
										>
											{number + 1}
										</span>
									))}
								</div>
							</Col>
						</Row>
					)}
				</Container>
			</section>

			<Newsletter />
		</>
	);
};

export default Tours;
