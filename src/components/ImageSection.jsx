import React from "react";
import "../components/imagesection.css";
import Image1 from "../assets/images/image-product-1.jpg";
import Image1thumb from "../assets/images/image-product-1-thumbnail.jpg";
import Image2 from "../assets/images/image-product-2.jpg";
import Image2thumb from "../assets/images/image-product-2-thumbnail.jpg";
import Image3 from "../assets/images/image-product-3.jpg";
import Image3thumb from "../assets/images/image-product-3-thumbnail.jpg";
import Image4 from "../assets/images/image-product-4.jpg";
import Image4thumb from "../assets/images/image-product-4-thumbnail.jpg";
import previous from "../assets/images/icon-previous.svg";
import next from "../assets/images/icon-next.svg";
import iconClose from "../assets/images/icon-close.svg";
import { useState } from "react";

export default function ImageSection() {
  // ======================================================
  const imageList = [Image1, Image2, Image3, Image4];
  const [imageIndex, setImageIndex] = useState(1);

  const thumbnailClick = (index) => {
    setImageIndex(index);
  };

  const toPrevious = () => {
    if (imageIndex !== 1) {
      setImageIndex(imageIndex - 1);
    } else if (imageIndex === 1) {
      setImageIndex(imageList.length);
    }
  };
  const toNext = () => {
    if (imageIndex !== imageList.length) {
      setImageIndex(imageIndex + 1);
    } else if (imageIndex === imageList.length) {
      setImageIndex(1);
    }
  };
  // ======================================================
  const [showOverlay, setShowOverlay] = useState(false);
  const toOverlay = () => {
    setShowOverlay(!showOverlay);
  };
  const toClose = () => {
    setShowOverlay(false);
  };

  // ======================================================
  return (
    <>
      <div className="left-section">
        <div className="image-container">
          <img className="arrow1" src={previous} alt="arrow" onClick={toPrevious}></img>
          <img className="active-img" src={imageList[imageIndex - 1]} alt="Displayed-Shoe" onClick={toOverlay} />
          <img className="arrow2" src={next} alt="arrow" onClick={toNext}></img>
        </div>
        <div className="sub-images">
          <img className={imageIndex === 1 ? "sub-image selected" : "sub-image"} src={Image1thumb} alt="Shoe" onClick={() => thumbnailClick(1)} />
          <img className={imageIndex === 2 ? "sub-image selected" : "sub-image"} src={Image2thumb} alt="Shoe" onClick={() => thumbnailClick(2)} />
          <img className={imageIndex === 3 ? "sub-image selected" : "sub-image"} src={Image3thumb} alt="Shoe" onClick={() => thumbnailClick(3)} />
          <img className={imageIndex === 4 ? "sub-image selected" : "sub-image"} src={Image4thumb} alt="Shoe" onClick={() => thumbnailClick(4)} />
        </div>
      </div>
      <div className={`overlay ${showOverlay ? "show" : "hide"}`}>
        <img className="close" src={iconClose} alt="close" onClick={toClose}></img>
        <div className="image-container">
          <img className="arrow1" src={previous} alt="arrow" onClick={toPrevious}></img>
          <img className="active-img" src={imageList[imageIndex - 1]} alt="Displayed-Shoe" />
          <img className="arrow2" src={next} alt="arrow" onClick={toNext}></img>
        </div>
        <div className="sub-images">
          <img className={imageIndex === 1 ? "sub-image selected" : "sub-image"} src={Image1thumb} alt="Shoe" onClick={() => thumbnailClick(1)} />
          <img className={imageIndex === 2 ? "sub-image selected" : "sub-image"} src={Image2thumb} alt="Shoe" onClick={() => thumbnailClick(2)} />
          <img className={imageIndex === 3 ? "sub-image selected" : "sub-image"} src={Image3thumb} alt="Shoe" onClick={() => thumbnailClick(3)} />
          <img className={imageIndex === 4 ? "sub-image selected" : "sub-image"} src={Image4thumb} alt="Shoe" onClick={() => thumbnailClick(4)} />
        </div>
      </div>
    </>
  );
}
