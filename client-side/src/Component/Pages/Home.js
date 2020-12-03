import React from "react";

import Header from "./../Layout/Header/Header";
import Footer from "./../Layout/Footer/Footer";
import RestaurantDetails from "./../../Containers/Restaurant_details/Restaurant_details";
import RestaurantMenu from './../../Containers/Restaurant_menu/Restaurant_menu';
import Map from "./../map/map";

export default function Home() {
	return (
		<div>
			<Header />
			<RestaurantMenu />
			{/* <Map /> */}
			<Footer />
		</div>
	);
}
