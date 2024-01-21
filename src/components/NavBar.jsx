import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/image-avatar.png";
import cart from "../assets/images/icon-cart.svg";
import CartSection from "./cartSection";
import menu from "../assets/images/icon-menu.svg";
import closemenu from "../assets/images/icon-close.svg";
import "./navbar.css";

export default function NavBar(props) {
  const [showcart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showcart);
  };
  const handleResetCount = () => {
    props.setToZero();
  };
  const [isMenu, setIsMenu] = useState(false);
  const showMenu = () => {
    setIsMenu(true);
  };
  const hideMenu = () => {
    setIsMenu(false);
  };
  return (
    <>
      <nav className="nav">
        <div className="nav-left">
          <img className="menu-icon" src={menu} alt="menu-icon" onClick={showMenu}></img>
          <div className="logo">
            <a href="/home">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className={isMenu ? "nav-links showmenu" : "nav-links hidemenu"}>
            <img className="closemenu-icon" src={closemenu} alt="close-icon" onClick={hideMenu}></img>
            <ul className="links">
              <li>
                <a href="/collections">Collections</a>
              </li>
              <li>
                <a href="/about">Men</a>
              </li>
              <li>
                <a href="/women">Women</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-right">
          <div className="cart-icon">
            <img src={cart} alt="cart-icon" onClick={toggleCart} />
            <span className="allitems">{props.allitem}</span>
            {showcart ? <CartSection totitem={props.allitem} resetCount={handleResetCount} /> : <></>}
          </div>
          <div className="profile">
            <img className="profile-img" src={avatar} alt="avatar" />
          </div>
        </div>
      </nav>
    </>
  );
}
