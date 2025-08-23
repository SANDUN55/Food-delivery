import {createContext, useState, useEffect} from "react";
import {food_list} from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({children}) => {
	const [cartItem, setCartItem] = useState({});

	const addToCart = (itemId) => {
		setCartItem((prev) => ({
			...prev,
			[itemId]: (prev[itemId] || 0) + 1, // Ensures at least 1 is set
		}));
	};

	const removeFromCart = (itemId) => {
		setCartItem((prev) => {
			if (prev[itemId] > 1) {
				return {...prev, [itemId]: prev[itemId] - 1};
			} else {
				const newCart = {...prev};
				delete newCart[itemId]; // Removes item if quantity is 0
				return newCart;
			}
		});
	};

	const getTotalCartAmount = () => {
		let totalAmount = 0;
		for (const item in cartItem) {
			if (cartItem[item] > 0) {
				let itemInfo = food_list.find((product) => product._id === item);
				totalAmount += itemInfo.price * cartItem[item];
			}
		}
		return totalAmount;
	};

	const contextValue = {
		food_list,
		cartItem,
		setCartItem,
		addToCart,
		removeFromCart,
		getTotalCartAmount,
	};

	return (
		<StoreContext.Provider value={contextValue}>
			{children}
		</StoreContext.Provider>
	);
};

export default StoreContextProvider;
