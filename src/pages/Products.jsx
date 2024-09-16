import React, { useEffect, useState } from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/products.css";
import SearchBar from "../shared/SearchBar";
import Newsletter from "../shared/Newsletter";
import { Container, Row, Col } from "reactstrap";
import { Pagination } from "antd";
import ProductCard from "../shared/ProductCard";

const Products = () => {
	const [products, setProducts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [total, setTotal] = useState(0);
	const [pageSize, setPageSize] = useState(8);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	console.log(products);

	const onChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return (
		<>
			<CommonSection title={"All Chess"} />
			<section>
				<Container>
					<Row>
						<SearchBar lg={12} className="search-bar__tour" />
					</Row>
				</Container>
			</section>

			<section className="pt-0">
				<Container>
					{
						<Row>
							{products?.map((product) => (
								<Col lg={3} className="mb-4" key={product.id}>
									<ProductCard product={product} />
								</Col>
							))}
						</Row>
					}
					<Pagination
						defaultCurrent={1}
						total={total}
						pageSize={pageSize} // Thêm pageSize vào Pagination
						onChange={onChange}
						className="flex justify-center items-center"
					/>
				</Container>
			</section>

			<Newsletter />
		</>
	);
};

export default Products;


