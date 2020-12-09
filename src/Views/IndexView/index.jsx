import React, { useEffect, useState } from "react";
import "./IndexView.scss";
import DolaBuyNow from "dola-buy-now";
import { items } from "./items";

const initialState = {
	cart: {
		items: [],
		total: 0,
		weight: 0,
	},
};

const IndexView = () => {
	const [cart, setCart] = useState(initialState.cart);
	const [Dola, setDola] = useState();

	useEffect(() => {
		const createDolaInstance = async () => {
			const dolaInstance = await DolaBuyNow.initialize(
				"dola_pay_107e0b90-3658-11eb-bbce-9717270f4463"
			);

			if (dolaInstance) {
				setDola(dolaInstance);
			}
		};

		createDolaInstance();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const newCart = {
			totalPrice: cart.total,
			totalWeight: cart.weight,
			currency: "USD",
			discount: 0,
			items: cart.items,
		};

		console.log(newCart, cart);
		Dola.attachDolaToCart(newCart);
	};

	const handleClick = (e, each) => {
		e.preventDefault();

		setCart({
			items: [...cart.items, each],
			total: cart.total + each.price,
			weight: cart.weight + each.grams,
		});
	};

	const handleBuyNow = (e, item) => {
		e.preventDefault();

		setCart({
			items: [...cart.items, item],
			total: cart.total + item.price,
			weight: cart.weight + item.grams,
		});

		Dola.attachDolaToItem(item, 0, "USD");
	};

	return (
		<div className="generator">
			<div className="generator-title">
				<h2>Random Store</h2>
			</div>
			<div className="generator-title">
				<h2>Cart: {cart.items.length}</h2>
			</div>
			<div className="generator-cart">
				{items.map((each) => {
					return (
						<div key={each.id}>
							<p style={{ fontWeight: "bold" }}>name: {each.title}</p>
							<img
								style={{ width: "300px", height: "300px" }}
								src={each.image}
								alt={each.title}
							/>
							<p>quantity: {each.quantity} </p>
							<p>price: ${each.price.toString().slice(0, -2)} </p>
							<p>weight: {each.grams}grams </p>
							<div
								style={{
									fontWeight: "600",
									border: "1px solid black",
									textAlign: "center",
									padding: "7px",
									borderRadius: "6px",
									cursor: "pointer",
								}}
								onClick={(e) => {
									handleBuyNow(e, each);
								}}
							>
								Buy now
							</div>
							<div
								style={{
									marginTop: "10px",
									fontWeight: "600",
									border: "1px solid black",
									textAlign: "center",
									padding: "7px",
									borderRadius: "6px",
									cursor: "pointer",
								}}
								onClick={(e) => {
									handleClick(e, each);
								}}
							>
								Add to Cart
							</div>
						</div>
					);
				})}
			</div>
			<p style={{ fontWeight: "bold", marginTop: "30px" }}>
				Cart Total: ${cart?.total?.toString().slice(0, -2)}
			</p>
			<form onSubmit={(e) => handleSubmit(e)}>
				<div className="generator-actions">
					<input type="submit" value="Checkout with Dola" />
				</div>
			</form>
		</div>
	);
};

export default IndexView;
