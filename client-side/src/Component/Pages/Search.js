import React from "react";
import SearchBar from "./../../Containers/Seachbar_container";

import Footer from "./../Layout/Footer/Footer";
import icon from "./../../assests/icons.svg";

const setIcon = (iconName) => {
	var useTag = `<use xlink:href="${icon}#${iconName}" />`;
	return <svg dangerouslySetInnerHTML={{ __html: useTag }} />;
};

function Search() {
	console.log("check");
	return (
		<>
			<SearchBar />
			<div className="result__wrapper">
				<div className="search__result__container">
					<span className="search__result__icon">{setIcon("gps")}</span>
					<p className="search__result__main">Waidhan Vindhya Nagar Road</p>
					<p className="search__result__info">
						Madhya Pradesh, Singrauli, India
					</p>
				</div>
				<div className="search__result__container">
					<span className="search__result__icon">{setIcon("gps")}</span>
					<p className="search__result__main">Gole ka Mandir Road</p>
					<p className="search__result__info">
						Madhya Pradesh, Gwaliour, India
					</p>
				</div>
				<div className="search__result__container">
					<span className="search__result__icon">{setIcon("gps")}</span>
					<p className="search__result__main">Railway station road, Mahaveer</p>
					<p className="search__result__info">
						Madhya Pradesh, Gwaliour, India
					</p>
				</div>
				<div className="search__result__container">
					<span className="search__result__icon">{setIcon("gps")}</span>
					<p className="search__result__main">Dhawari gali no. 2, 485001</p>
					<p className="search__result__info">Madhya Pradesh, Satna, India</p>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Search;
