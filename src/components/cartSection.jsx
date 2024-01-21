import React, { useEffect, useState } from "react";
import thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import iconDelete from "../assets/images/icon-delete.svg";
import "./cartsection.css";

export default function CartSection(props) {
  const text = "Fall Limited Edition Sneakers";
  const [delcontent, setDelContent] = useState(true);
  const totalPrice = (125.0 * props.totitem).toFixed(2);

  const toDelete = () => {
    setDelContent(false);
    props.resetCount();
  };
  useEffect(() => {
    setDelContent(props.totitem !== 0);
  }, [props.totitem]);

  // useEffect(() => {
  //   if (props.totitem !== 0) {
  //     setDelContent(true);
  //   } else {
  //     setDelContent(false);
  //   }
  // }, [props.totitem]);

  return (
    <>
      <div className="cart-box">
        <div className="cart">Cart</div>
        {delcontent ? (
          <div className="todel">
            <div className="cart-content">
              <img className="content-img" src={thumbnail} alt="icon"></img>
              <div className="item">
                <p>{text}</p>
                <p className="cost">
                  $125.00 x {props.totitem}
                  <span> {totalPrice}</span>
                </p>
              </div>
              <img className="icon-delete" src={iconDelete} alt="icon-Delete" onClick={toDelete}></img>
            </div>
            <button className="checkout">Checkout</button>
          </div>
        ) : (
          <div className="emputy">Your card is empty.</div>
        )}
      </div>
    </>
  );
}
