import React from "react";
import "./PlaceOrder.css";

function PlaceOrder({getTotalCartAmount}) {
	// Handle cases where getTotalCartAmount is not passed
	const subtotal =
		typeof getTotalCartAmount === "function" ? getTotalCartAmount() : 0;
	const deliveryFee = subtotal === 0 ? 0 : 2;
	const total = subtotal + deliveryFee;

	return (
		<form className="place-order" action="">
			<div className="place-order-left">
				<p className="title">Delivery Information</p>
				<div className="multi-fields">
					<input type="text" placeholder="First Name" required />
					<input type="text" placeholder="Last Name" required />
				</div>
				<input type="email" placeholder="Email Address" required />
				<input type="text" placeholder="Street" required />
				<div className="multi-fields">
					<input type="text" placeholder="City" required />
					<input type="text" placeholder="State" required />
				</div>
				<div className="multi-fields">
					<input type="text" placeholder="Zip Code" required />
					<input type="text" placeholder="Country" required />
				</div>
				<input type="text" placeholder="Phone" required />
			</div>

			<div className="place-order-right">
				<div className="cart-total">
					<h2>Total</h2>
					<div>
						<div className="cart-total-details">
							<p>Subtotal</p>
							<p>${subtotal}</p>
						</div>
						<hr />
						<div className="cart-total-details">
							<p>Delivery Fee</p>
							<p>${deliveryFee}</p>
						</div>
						<hr />
						<div className="cart-total-details">
							<b>Total</b>
							<b>${total}</b>
						</div>
					</div>
					<button type="submit">PROCEED TO PAYMENT</button>
				</div>
			</div>
		</form>
	);
}

export default PlaceOrder;
