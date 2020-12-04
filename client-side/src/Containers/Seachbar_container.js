import React from "react";
import { Link } from "react-router-dom";
import { setIcon } from "./../Component/Ui_functions/ui_function";

function Seachbar_container() {
	return (
		<div className="searchbar__container">
			<Link to="/">
				<span className="go-back">{setIcon("left-arrow")}</span>
			</Link>
			<form>
				<input
					autoFocus={true}
					type="text"
					placeholder="Enter place or street name"
				/>
			</form>
			<span className="search-submit">{setIcon("loupe")}</span>
		</div>
	);
}

export default Seachbar_container;
