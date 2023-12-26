import React, {useEffect, useState} from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

export default function Products() {
	
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axiosGet();
	}, []);

	const axiosGet = async () => {
		let response = await axios.get("https://dummyjson.com/products");
		setProducts(response.data.products);
		console.log(response.data.products);
	};

	// responsive?
	return (
		<div>
			<div  className="flex flex-wrap">
				{products.map(product => (
					<div>
						<ProductCard product={product} />
					</div>
				))}
			</div>
		</div>
	);
}