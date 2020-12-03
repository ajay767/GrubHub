import React from 'react';
import icon from "../../assests/icons.svg";


import food1 from "../../assests/restaurant-details/food1.jpg";
import food2 from "../../assests/restaurant-details/food2.jpg";
import food3 from "../../assests/restaurant-details/food3.jpg";
import food4 from "../../assests/restaurant-details/food4.jpg";
import food5 from "../../assests/restaurant-details/food5.jpg";
import food6 from "../../assests/restaurant-details/food6.jpg";


const restaurantMenu = (props) => {
    const back = "<-";
    const setIcon = (currIcon) => {
        var useTag = `<use xlink:href="${icon}#${currIcon}" />`;
        return <svg dangerouslySetInnerHTML={{ __html: useTag }} />;
    };

    const setReviewStar = (stars) => {
        const reviewStars = [];
        for (let i = 0; i < stars; i++) {
            reviewStars.push(<span key={i}>{setIcon("star")}</span>);
        };
        return reviewStars;
    }


    return (
        <div className="restaurant__menu">
            {/* Back and Trend Section */}
            <div className="restaurant__menu__Back__Trend">
                <a className="restaurant__menu__Back__Trend--Back" href="#">{back + " "}Back</a>
                <h2 className="restaurant__menu__Back__Trend--Trend">
                    Trending
            </h2>
                <hr />
            </div>

            {/* Body and Restaurant Card Section */}
            <div className="Food__Container">

                <div className="restaurant__menu__Food__Card">
                    <img
                        className="restaurant__menu__Food__Card--image"
                        src={food1}
                        alt="Not Found"></img>
                    <span className="restaurant__menu__Food__Card--description">
                        <h3>Crispy Chicken</h3>
                        <p>Korean BBQ</p>
                    </span>
                    <span className="restaurant__menu__Food__Card--rating-pricing">
                        <span>{setReviewStar(5)}</span>
                        <h3 className="restaurant__menu__Food__Card--rating-pricing-pricing">$25.00</h3>
                    </span>

                </div>
                <div className="restaurant__menu__Food__Card">
                    <img
                        className="restaurant__menu__Food__Card--image"
                        src={food2}
                        alt="Not Found"></img>
                    <span className="restaurant__menu__Food__Card--description">
                        <h3>Grilled Franky</h3>
                        <p>Mumbai BBQ</p>
                    </span>
                    <span className="restaurant__menu__Food__Card--rating-pricing">
                        <span>{setReviewStar(4)}</span>
                        <h3 className="restaurant__menu__Food__Card--rating-pricing-pricing">
                            $30.00</h3>
                    </span>

                </div>
                <div className="restaurant__menu__Food__Card">
                    <img
                        className="restaurant__menu__Food__Card--image"
                        src={food6}
                        alt="Not Found"></img>
                    <span className="restaurant__menu__Food__Card--description">
                        <h3>Crispy Chicken</h3>
                        <p>Korean BBQ</p>
                    </span>
                    <span className="restaurant__menu__Food__Card--rating-pricing">
                        <span>{setReviewStar(2)}</span>
                        <h3 className="restaurant__menu__Food__Card--rating-pricing-pricing">$25.00</h3>
                    </span>

                </div>
                <div className="restaurant__menu__Food__Card">
                    <img
                        className="restaurant__menu__Food__Card--image"
                        src={food3}
                        alt="Not Found"></img>
                    <span className="restaurant__menu__Food__Card--description">
                        <h3>Crispy Chicken</h3>
                        <p>Korean BBQ</p>
                    </span>
                    <span className="restaurant__menu__Food__Card--rating-pricing">
                        <span>{setReviewStar(5)}</span>
                        <h3 className="restaurant__menu__Food__Card--rating-pricing-pricing">$25.00</h3>
                    </span>

                </div>
                <div className="restaurant__menu__Food__Card">
                    <img
                        className="restaurant__menu__Food__Card--image"
                        src={food4}
                        alt="Not Found"></img>
                    <span className="restaurant__menu__Food__Card--description">
                        <h3>Crispy Chicken</h3>
                        <p>Korean BBQ</p>
                    </span>
                    <span className="restaurant__menu__Food__Card--rating-pricing">
                        <span>{setReviewStar(4)}</span>
                        <h3 className="restaurant__menu__Food__Card--rating-pricing-pricing">$25.00</h3>
                    </span>

                </div>
                <div className="restaurant__menu__Food__Card">
                    <img
                        className="restaurant__menu__Food__Card--image"
                        src={food5}
                        alt="Not Found"></img>
                    <span className="restaurant__menu__Food__Card--description">
                        <h3>Crispy Chicken</h3>
                        <p>Korean BBQ</p>
                    </span>
                    <span className="restaurant__menu__Food__Card--rating-pricing">
                        <span>{setReviewStar(4)}</span>
                        <h3 className="restaurant__menu__Food__Card--rating-pricing-pricing">$25.00</h3>
                    </span>

                </div>
            </div>


        </div>
    )
}
export default restaurantMenu