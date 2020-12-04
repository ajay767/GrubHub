import React from "react";

import Header from "./../Layout/Header/Header";
import Footer from "./../Layout/Footer/Footer";
<<<<<<< HEAD
import RestaurantDetails from "./../../Containers/Restaurant_details/Restaurant_details";
import RestaurantMenu from './../../Containers/Restaurant_menu/Restaurant_menu';
import Map from "./../map/map";
import Checkout from './../../Containers/Checkout/Checkout';
=======
import RestaurantDetails from "./../../Containers/Restaurant_details";
>>>>>>> 8e024057fe0dbdef52a0ab9f0a797db2bdfb7d95

export default function Home() {
	return (
		<div>
<<<<<<< HEAD
			{/* <Header /> */}
			<Checkout />
			{/* <RestaurantMenu /> */}
			{/* <Map /> */}
=======
			<Header />
			<RestaurantDetails />
>>>>>>> 8e024057fe0dbdef52a0ab9f0a797db2bdfb7d95
			<Footer />
		</div>
	);
}
