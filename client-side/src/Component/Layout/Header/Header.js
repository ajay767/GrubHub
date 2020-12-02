import React from "react";
import { Link } from "react-router-dom";

import icon from "./../../../assests/icons.svg";
import logo from "../../../assests/logo-primary.png";

const setIcon = (iconName) => {
	var useTag = `<use xlink:href="${icon}#${iconName}" />`;
	return <svg dangerouslySetInnerHTML={{ __html: useTag }} />;
};

function Header() {
	return (
		<header className="header">
			<div className="primary__header">
				<img className="primary__header--logo" alt="logo" src={logo} />
				<h1>Grubhub.com</h1>
			</div>

			<div className="header__searchbar">
				<Link to="/search">
					<span> {setIcon("loupe")}Enter Area and street name</span>
				</Link>
			</div>
		</header>
	);
}

export default Header;
