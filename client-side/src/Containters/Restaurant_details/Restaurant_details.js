import React from "react";
import icon from "../../assests/restaurant-details/icon.svg";
import "./restaurant-details.scss";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import image1 from "../../assests/restaurant-details/American-Hotdog.jpg";
import image2 from "../../assests/restaurant-details/Hamburger.jpg";
import image3 from "../../assests/restaurant-details/Sandwich.jpg";
import image4 from "../../assests/restaurant-details/Satna-styled-sandwich.png";
import image5 from "../../assests/restaurant-details/VegNoodles.jpg";

import Review from "../../Component/UI/Review/Review_card";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const restaurantDatails = (props) => {
	const setIcon = (currIcon) => {
		var useTag = `<use xlink:href="${icon}#${currIcon}" />`;
		return <svg dangerouslySetInnerHTML={{ __html: useTag }} />;
	};

	return (
		<div className="restaurant">
			<h1 className="restaurant-title">APNA HOTEL OF DREAMS</h1>
			<p className="restaurant-address">Civil lines Satna(M.P.)</p>
			<span className="restaurant-review-star-icon">
				{setIcon("star")}
				{setIcon("star")}
				{setIcon("star")}
				{setIcon("star")}
				{setIcon("star")}
				<span className="restaurant-review-total">(145 reviews)</span>
			</span>
			<span className="restaurant-del-open">
				<strong className="restaurant-delivery">Delivery</strong>
				<strong className="restaurant-openTime">Open Time</strong>
			</span>
			<p className="restaurant-deliveryType-Time">
				<span>Free</span>
				<span className="restaurant-delivery-time">8:00 AM</span>
			</p>

			<hr />
			<div>
				<span className="res-icons">
					<span>
						<span>{setIcon("star-1")}</span>
						<span>{setIcon("placeholder")}</span>
					</span>
					<span className="contactUs">
						<a href="#">Contact</a>
					</span>
				</span>
			</div>
			<hr className="hr" />
			<h2 className="itemsFeatured"> FEATURED ITEMS</h2>

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
					<img className="image image1" src={image1} alt=" Not found"></img>
					<p>
						<strong>Crispy Hotdog</strong>
					</p>
					<span>$25</span>
				</SwiperSlide>
				<SwiperSlide className="SwiperSlide">
					<img className="image image2" src={image2} alt=" Not found"></img>
					<p>
						<strong>Hamburger</strong>
					</p>
					<span>$25</span>
				</SwiperSlide>
				<SwiperSlide className="SwiperSlide">
					<img className="image image3" src={image3} alt=" Not found"></img>
					<p>
						<strong>Sandwich</strong>
					</p>
					<span>$25</span>
				</SwiperSlide>
				<SwiperSlide className="SwiperSlide">
					<img className="image image4" src={image4} alt=" Not found"></img>
					<p>
						<strong>Chicken Sandwich</strong>
					</p>
					<span>$25</span>
				</SwiperSlide>
				<SwiperSlide className="SwiperSlide">
					<img className="image image5" src={image5} alt=" Not found"></img>
					<p>
						<strong>Chicken Noodles</strong>
					</p>
					<span>$25</span>
				</SwiperSlide>
			</Swiper>

			{/* start of Menu Section..! */}
			{/* End of Menu Section */}

			{/* Start of Review Section */}
			<Review
				image={image1}
				name="Ashutosh Singh"
				stars="3"
				time="4"
				description="Apna Hotel is one of the best hotel of satna if compared to food quality and also the hygine of this hotel is too best the oil they use is of best quality"
			/>
			{/* For Other Detail Go to Review Folder I have Mentioned above */}
			{/* End of Review Section */}
		</div>
	);
};

export default restaurantDatails;
