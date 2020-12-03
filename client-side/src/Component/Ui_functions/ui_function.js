import icon from "../../assests/icons.svg";

export const setIcon = (currIcon) => {
	var useTag = `<use xlink:href="${icon}#${currIcon}" />`;
	return <svg dangerouslySetInnerHTML={{ __html: useTag }} />;
};

export const setReviewStar = (stars = 4) => {
	const reviewStars = [];
	for (let i = 0; i < stars; i++) {
		reviewStars.push(<span key={i}>{setIcon("star")}</span>);
	}

	return reviewStars;
};
