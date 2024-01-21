import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import ImageSection from "../../components/ImageSection";
import TextSection from "../../components/TextSection";
import "../Sneakers/sneakerone.css";

export default function SneakerOne() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (count) => {
    setCartCount(cartCount + count);
  };
  const handleSetToZero = () => {
    setCartCount(0);
  };
  return (
    <div className="sneakerone">
      <NavBar className="navbar" allitem={cartCount} setToZero={handleSetToZero} />
      <div className="content">
        <ImageSection className="imagesection" />
        <TextSection className="textsection" onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
}
