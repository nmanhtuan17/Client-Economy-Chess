import React, { useEffect } from "react";
import TourCard from "../../shared/TourCard";
import { Col } from "reactstrap";
import useAxios from "../../hooks/useAxios";

const FeaturedTourList = () => {
	const apiUrl = "http://127.0.0.1:5000/products";

	const { data: featuredProducts, loading, error } = useAxios(apiUrl);
	const featured = featuredProducts.filter((product) => product.featured == true);
	console.log(featuredProducts);
	return (
		<>
			{loading && <h4>Loading............</h4>}
			{error && <h4>{error}</h4>}
			{!loading &&
				!error &&
				featured?.map((product, index) => (
					<Col lg="3" className="mb-4" key={product.id}>
						<TourCard product={product} />
					</Col>
				))}
		</>
	);
};

export default FeaturedTourList;
