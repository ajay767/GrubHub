import React from "react";
import mapboxgl from "mapbox-gl";

import SearchBar from "../../Containers/Seachbar_container";
import Footer from "../../Component/Layout/Footer/Footer";

mapboxgl.accessToken =
	"pk.eyJ1IjoiYWp1MzIwMiIsImEiOiJjazhidHNoencwN3M5M25ucmExcGs1MzNtIn0.wOekROGkPAtlOzJAhLaKDw";

class MapContainer extends React.Component {
	state = {
		location: {
			ich: [82.6154179336, 24.0738142037],
			mezbaan: [24.0675, 82.631],
			hydrabadi: [24.0686, 82.6362],
			swad: [24.0731, 82.644],
		},
		coordinates: [
			[82.6154179336, 24.0738142037],
			[82.631, 24.0675],
			[82.6362, 24.0686],
			[82.644, 24.0731],
		],
	};
	componentDidMount() {
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: "mapbox://styles/aju3202/cki8whoah0bbz19kcbo7fdki0",
			// center: [82.6248, 24.0627],
			zoom: 12,
		});
		// const user = new mapboxgl.LngLatBounds();

		const bounds = new mapboxgl.LngLatBounds();
		this.state.coordinates.forEach((coords) => {
			const el = document.createElement("div");
			el.className = "marker";

			new mapboxgl.Marker({
				element: el,
				anchor: "center",
			})
				.setLngLat(coords)
				.addTo(map);
			bounds.extend(coords);
		});

		const userCoords = [82.6186, 24.073];
		const userEl = document.createElement("div");
		userEl.className = "userMarker";
		new mapboxgl.Marker({
			element: userEl,
			anchor: "center",
		})
			.setLngLat(userCoords)
			.addTo(map);
		bounds.extend(userCoords);

		map.fitBounds(bounds, {
			padding: {
				top: 150,
				bottom: 150,
				left: 50,
				right: 50,
			},
		});
	}
	render() {
		return (
			<>
				<SearchBar />
				<div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
				<Footer />
			</>
		);
	}
}

export default MapContainer;
