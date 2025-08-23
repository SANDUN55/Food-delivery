import React, {useContext, useState} from "react";
import {assets} from "../../assets/assets";
import "./Navbar.css";
import {Link} from "react-router-dom";
import {StoreContext} from "../../context/storeContext";
const Navbar = ({setShowLogin}) => {
	const [menu, setMenu] = useState("menu");

	const {getTotalCartAmount} = useContext(StoreContext);

	return (
		<div className="navbar">
			<Link to="/">
				<img className="logo" src={assets.logo} alt="" />
			</Link>
			<ul className="navbar-menu">
				<Link
					to="/"
					onClick={() => setMenu("home")}
					className={menu == "home" ? "active" : ""}
				>
					Home
				</Link>
				<li
					onClick={() => setMenu("menu")}
					className={menu == "menu" ? "active" : ""}
				>
					Menu
				</li>
				<li
					onClick={() => setMenu("mobile-app")}
					className={menu == "mobile-app" ? "active" : ""}
				>
					Mobile-app
				</li>
				<li
					onClick={() => setMenu("contact-us")}
					className={menu == "contact-us" ? "active" : ""}
				>
					Contact US
				</li>
			</ul>
			<div className="navbar-right">
				<img src={assets.search_icon} alt="" />
				<div className="navbar-search-icon">
					<Link to="/cart">
						<img src={assets.basket_icon} alt="" />
					</Link>
					<div className={getTotalCartAmount() ? "dot" : ""}></div>
				</div>
				<button onClick={() => setShowLogin(true)}>Sign In</button>
			</div>
		</div>
	);
};

export default Navbar;
