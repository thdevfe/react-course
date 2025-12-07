import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import './HomePage.css';
import { ProductsGrid } from './ProductsGrid';

export function HomePage({ cartItems, loadCartItems }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await axios.get('/api/products');
			setProducts(response.data);
		};

		fetchProducts();
	}, []);

	return (
		<>
			<title>Ecommerce Project</title>
			<Header cartItems={cartItems} />

			<div className="home-page">
				<ProductsGrid products={products} loadCartItems={loadCartItems} />
			</div>
		</>
	);
}