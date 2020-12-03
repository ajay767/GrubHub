import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import ReviewCard from "./../../Component/UI/Review/Review_card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import icon from "../../assests/icons.svg";
import image1 from "../../assests/profile1.jpg";
import image2 from "../../assests/profile2.jpg";
import image3 from "../../assests/profile3.jpg";

import food1 from "../../assests/restaurant-details/food1.jpg";
import food2 from "../../assests/restaurant-details/food2.jpg";
import food3 from "../../assests/restaurant-details/food3.jpg";
import food4 from "../../assests/restaurant-details/food4.jpg";
import food5 from "../../assests/restaurant-details/food5.jpg";
import food6 from "../../assests/restaurant-details/food6.jpg";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const setIcon = (currIcon) => {
	var useTag = `<use xlink:href="${icon}#${currIcon}" />`;
	return <svg dangerouslySetInnerHTML={{ __html: useTag }} />;
};

const setReviewStar = (stars) => {
	const reviewStars = [];
	for (let i = 0; i < stars; i++) {
		reviewStars.push(<span key={i}>{setIcon("star")}</span>);
	}

	return reviewStars;
};
const restaurantDatails = (props) => {
	return (
		<div className="restaurant__wrapper">
			<h1 className="restaurant__wrapper--title primary__heading">
				Cobb Lane Bed And Breakfast
			</h1>
			<p className="restaurant__wrapper--address">
				Civil lines Satna (Madhya Pradesh)
			</p>
			<div className="restaurant__wrapper--rating">
				{setReviewStar(5)}
				<p> ( 246 ) Reviews</p>
			</div>

			{/* Restaurants details  starting*/}

			<div className="restaurant__wrapper--details">
				<span className="restaurant__wrapper--details--container">
					<p className="restaurant__wrapper--details--container-title">
						Delivery
					</p>
					<p className="restaurant__wrapper--details--container-content">
						Free
					</p>
				</span>
				<span className="restaurant__wrapper--details--container">
					<p className="restaurant__wrapper--details--container-title">
						Opening time
					</p>
					<p className="restaurant__wrapper--details--container-content">
						8:00 AM
					</p>
				</span>
			</div>

			{/* Restaurants details  Ending*/}

			{/* Restaurants navigation  Starting*/}

			<div className="restaurant__wrapper--navigation">
				<span className="restaurant__wrapper--navigation--icon">
					{setIcon("star")}
				</span>
				<span className="restaurant__wrapper--navigation--icon">
					{setIcon("gps")}
				</span>
				<button className="restaurant__wrapper--navigation--button">
					Contact
				</button>
			</div>

			{/* Restaurants navigation  Ending*/}

			<div className="restaurant__wrapper--featuredItems">
				<h2 className="secondary__heading"> Featured Items</h2>

				<Swiper
					className="Swiper"
					spaceBetween={10}
					slidesPerView={1}
					// navigation   // Enalbling it will lead you to the SIDE ARROWS for slide change
					// pagination={{ clickable: false}} // Enabaling this will lead you to the Page Count
					// scrollbar={{ draggable: true }}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log("slide change")}
				>
					<SwiperSlide className="SwiperSlide">
						<img className="image image5" src={food1} alt=" Not found"></img>
						<p className="SwiperSlide--title">Burger King</p>
						<span className="SwiperSlide--price">$99</span>
					</SwiperSlide>

					<SwiperSlide className="SwiperSlide">
						<img className="image image5" src={food2} alt=" Not found"></img>
						<p className="SwiperSlide--title">Hakka Noodles</p>
						<span className="SwiperSlide--price">$25</span>
					</SwiperSlide>

					<SwiperSlide className="SwiperSlide">
						<img className="image image5" src={food3} alt=" Not found"></img>
						<p className="SwiperSlide--title">Mix Veg</p>
						<span className="SwiperSlide--price">$100</span>
					</SwiperSlide>

					<SwiperSlide className="SwiperSlide">
						<img className="image image5" src={food4} alt=" Not found"></img>
						<p className="SwiperSlide--title">Khadai Paneer</p>
						<span className="SwiperSlide--price">$250</span>
					</SwiperSlide>

					<SwiperSlide className="SwiperSlide">
						<img className="image image5" src={food5} alt=" Not found"></img>
						<p className="SwiperSlide--title">Veg Biryani</p>
						<span className="SwiperSlide--price">$150.23</span>
					</SwiperSlide>

					<SwiperSlide className="SwiperSlide">
						<img className="image image5" src={food6} alt=" Not found"></img>
						<p className="SwiperSlide--title">Chicken Noodles</p>
						<span className="SwiperSlide--price">$25</span>
					</SwiperSlide>
				</Swiper>
			</div>

			{/* Start of Review Section */}

			<div className="restaurant__wrapper--review-container">
				<h2 className="secondary__heading">User Reviews</h2>
				<ReviewCard image={image1} />
				<ReviewCard
					image={image2}
					name="Ajay yadav"
					stars={3}
					description="It seems like a great idea, but I think that their developer's skills are very limited and they are devoted to very small, simple Wordpress tasks. "
				/>
				<ReviewCard
					image={image3}
					name="Ashutosh Singh"
					stars={5}
					time="4"
					description="Apna Hotel is one of the best hotel of satna if compared to food quality and also the hygine of this hotel is too best the oil they use is of best quality"
				/>
			</div>

			{/*End of Review Section */}
		</div>
	);
};

export default restaurantDatails;
