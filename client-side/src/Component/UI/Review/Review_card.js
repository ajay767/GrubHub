import React from "react";

import { setIcon, setReviewStar } from "../../Ui_functions/ui_function";

const review_card = (props) => {
	return (
		<div className="review__card">
			<img
				className="review__card--photo"
				src={props.image}
				alt="NOT Found"
			></img>
			<h2 className="review__card--title">{props.name || `John carter`}</h2>
			<div className="review__card--stars">{setReviewStar(props.stars)}</div>
			<p className="review__card--date">{props.time || `3`} hours ago</p>
			<p className="review__card--description">
				{props.description ||
					`Lorem is very simple to use.
					Easy interface, simple interactions with experts and quick matching process to qualified individuals. Like the product, have already recommended it to others and will certainly be using it again given its affordable cost comparative to 
					other options. `}
			</p>
		</div>
	);
};

export default review_card;
