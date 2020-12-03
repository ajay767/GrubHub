import React from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
	"pk.eyJ1IjoiYWp1MzIwMiIsImEiOiJjazhidHNoencwN3M5M25ucmExcGs1MzNtIn0.wOekROGkPAtlOzJAhLaKDw";

class MapContainer extends React.Component {
	componentDidMount() {
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [82.6248, 24.0627],
			zoom: 10,
		});
	}
	render() {
		return (
			<div>
				<div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
			</div>
		);
	}
}

export default MapContainer;
