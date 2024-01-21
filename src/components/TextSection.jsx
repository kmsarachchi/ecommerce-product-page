import React from "react";
import "../components/textsection.css";
import cart from "../assets/images/icon-cart.svg";
import minus from "../assets/images/icon-minus.svg";
import plus from "../assets/images/icon-plus.svg";
import { useState } from "react";

export default function TextSection(props) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addToCart = () => {
    props.onAddToCart(count);
    setCount(0);
  };

  return (
    <div className="right-section">
      <div className="text-content">
        <p className="company-name">Sneaker Company</p>
        <h1 className="hero-text">Fall Limited Edition Sneakers</h1>
        <p className="discription">
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the
          weather can offer.
        </p>
        <div class="price-section">
          <div className="price">
            $125.00<span className="discount">50%</span>
          </div>
          <p className="old-price">
            <del>$250.00</del>
          </p>
        </div>
        <div className="button-section">
          <div className="count-section">
            <button className="count-btn" id="decrease" onClick={decrement}>
              <img className="count-img" src={minus} alt="minus"></img>
            </button>
            <span className="quanity" id="quanity">
              {count}
            </span>
            <button className="count-btn" id="increase" onClick={increment}>
              <img className="count-img" src={plus} alt="plus"></img>
            </button>
          </div>
          <div className="add-cart">
            <button className="addCart-btn" onClick={addToCart}>
              <img className="cart-icon" src={cart} alt="cart-icon"></img>Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
