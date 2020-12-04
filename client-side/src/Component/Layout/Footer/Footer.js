import React from "react";
import { Link } from "react-router-dom";
import icon from "./../../../assests/icons.svg";

const setIcon = (iconName) => {
	var useTag = `<use xlink:href="${icon}#${iconName}" />`;
	return <svg dangerouslySetInnerHTML={{ __html: useTag }} />;
};

function Footer() {
	return (
		<footer className="footer">
			<Link to="/">
				<span className="footer__item active__footer__item">
					{setIcon("home")}
					<p>Home</p>
				</span>
			</Link>

			<Link to="/search">
				<span className="footer__item">
					{setIcon("loupe")}
					<p>Search</p>
				</span>
			</Link>

			<Link to="/">
				<span className="footer__item">
					{setIcon("shopping-bag")} <p>Orders</p>
				</span>
			</Link>

			<Link to="/search/restaurant/82.323/24.5747">
				<span className="footer__item">
					{setIcon("profile-user")}
					<p>Profile</p>
				</span>
			</Link>
		</footer>
	);
}

export default Footer;
