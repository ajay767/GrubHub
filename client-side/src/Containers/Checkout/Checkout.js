import React from 'react';


import food1 from "../../assests/restaurant-details/food1.jpg";
import food2 from "../../assests/restaurant-details/food2.jpg";
import food3 from "../../assests/restaurant-details/food3.jpg";
import food4 from "../../assests/restaurant-details/food4.jpg";
import food5 from "../../assests/restaurant-details/food5.jpg";
import food6 from "../../assests/restaurant-details/food6.jpg";


const checkout = (props) => {
    return (

        <div className="Restaurant__Checkout">
            <div className="Restaurant__Checkout__Order__Wrapper">
        </div>
        <span className="Restaurant__Checkout__Order__Heading__Close">
        <h1 className="Restaurant__Checkout__Order__Heading__Close--Heading">
            Order
        </h1>
        <p className="Restaurant__Checkout__Order__Heading__Close--Close">
            Close
            </p>
        </span>

        <div className="Restaurant__Checkout__Price__Wrapper">
            <span className="Restaurant__Checkout__Price__Wrapper__Content">
                <h3 className="Restaurant__Checkout__Price__Wrapper__Content--Heading">
                    Subtotal</h3>
                <h3 className="Restaurant__Checkout__Price__Wrapper__Content--Heading">
                    Tax and Fees</h3>
                <h3 className="Restaurant__Checkout__Price__Wrapper__Content--Heading">
                    Delivery</h3>
                  
                <h2> Total</h2>
            </span>
                <hr />
            <span className="Restaurant__Checkout__Price__Wrapper__Price">
                <p className="Restaurant__Checkout__Price__Wrapper__Price--price">
                    $49.50
                </p>
                <p className="Restaurant__Checkout__Price__Wrapper__Price--price">$2.75</p>
                <p className="Restaurant__Checkout__Price__Wrapper__Price--price">Free</p>
                <h2>$52.33</h2>
            </span>
        </div>


        <div className="Restaurant__Checkout__Food__Summary">
        <div className="Restaurant__Checkout__Food__Summary--wrapper">
            <img src={food1} alt="Not Found"></img>
            <span className="Restaurant__Checkout__Food__Summary--wrapper--details">
                <h3>Crispy Chicken San</h3>
                <p>2x tuna sahimi, 3x vegetables, 1x Noodles</p>
                <h2>$29.50</h2>
            </span>
        </div>
        <hr />
        <div className="Restaurant__Checkout__Food__Summary--wrapper">
            <img src={food2} alt="Not Found"></img>
            <span className="Restaurant__Checkout__Food__Summary--wrapper--details">
                <h3>Crispy Chicken San</h3>
                <p>2x tuna sahimi, 3x vegetables, 1x Noodles</p>
                <h2>$29.50</h2>
            </span>
        </div>

        </div>



        </div>
    )

}

export default checkout;