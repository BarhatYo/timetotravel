import React, { useState, useEffect } from "react";
import "./Promo.css";
import promo1 from "../../images/promo1.jpeg";
import promo2 from "../../images/promo2.jpeg";
import promo3 from "../../images/promo3.jpeg";

export default function Promo() {
  const [currentImage, setCurrentImage] = useState(0);

  const backgroundImages = [promo1, promo2];

  const changeImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
  };

  useEffect(() => {
    const intervalId = setInterval(changeImage, 7000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="promo"
      style={{ backgroundImage: `url(${backgroundImages[currentImage]})` }}
    ></div>
  );
}
