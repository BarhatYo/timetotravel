import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import instagramIcon from "../../images/instagram_icon.svg";
import vkIcon from "../../images/vk_icon.svg";
import tgIcon from "../../images/tg_icon.svg";
import "./Hotels.css";

export default function Hotels() {
  const settings = {
    // dots: true,
    arrows: false,
    infinite: true,
    // centerMode: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="hotels">
      <Slider {...settings}>
        <div className="hotels__item">
          <img className="hotels__image" src={instagramIcon} />
        </div>
        <div className="hotels__item">
          <img className="hotels__image" src={vkIcon} />
        </div>
        <div className="hotels__item">
          <img className="hotels__image" src={tgIcon} />
        </div>
        <div className="hotels__item">
          <img className="hotels__image" src={instagramIcon} />
        </div>
        <div className="hotels__item">
          <img className="hotels__image" src={vkIcon} />
        </div>
        <div className="hotels__item">
          <img className="hotels__image" src={tgIcon} />
        </div>
        <div className="hotels__item">
          <img className="hotels__image" src={instagramIcon} />
        </div>
        <div className="hotels__item">
          <img className="hotels__image" src={vkIcon} />
        </div>
        <div className="hotels__item">
          <img className="hotels__image" src={tgIcon} />
        </div>
      </Slider>
    </div>
  );
}
