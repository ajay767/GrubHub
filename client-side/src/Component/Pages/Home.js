import React from "react";

import Header from "./../Layout/Header/Header";
import Footer from "./../Layout/Footer/Footer";
import RestaurantDetails from "./../../Containers/Restaurant_details/Restaurant_details";

export default function Home() {
	return (
		<div>
			<Header />
			<RestaurantDetails />
			<Footer />
		</div>
	);
}
