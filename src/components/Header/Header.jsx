import React, { useState, useEffect } from "react";
import "./Header.css";
// import logoBlue from "../../images/logo_blue.svg";
// import logoWhite from "../../images/logo_white.svg";
import logoGold from "../../images/logo_gold.svg";
import instagramIcon from "../../images/instagram_icon.svg";
import vkIcon from "../../images/vk_icon.svg";
import tgIcon from "../../images/tg_icon.svg";
import BurgerButton from "../BurgerButton/BurgerButton";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [isNavigation, setIsNavigation] = useState(false);

  const handleBurgerClick = () => {
    setIsNavigation(!isNavigation);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header ${scrolling ? "header_active" : ""} ${
        isNavigation ? "header_transparent" : ""
      }`}
    >
      <Navigation
        isNavigation={isNavigation}
        handleBurgerClick={handleBurgerClick}
      />
      <div className="header__burger-phone">
        <BurgerButton
          isNavigation={isNavigation}
          handleBurgerClick={handleBurgerClick}
        />
        <a className="header__phone" href="tel:+79611243725">
          +7 (961) 124-37-25
        </a>
      </div>
      <img
        className="header__logo"
        src={logoGold}
        alt="Логотип"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      ></img>
      <div className="header__social-search">
        <ul className="header__social-links">
          <li>
            <a
              className="header__social-link"
              href="https://www.instagram.com/timetotravel.pro"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="header__social-link-icon"
                src={instagramIcon}
                alt="Инстаграм"
              ></img>
            </a>
          </li>
          <li>
            <a
              className="header__social-link"
              href="https://t.me/timetotravelpro"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="header__social-link-icon"
                src={tgIcon}
                alt="Телеграм"
              ></img>
            </a>
          </li>
          <li>
            <a
              className="header__social-link"
              href="https://vk.com/timetotravel40"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="header__social-link-icon"
                src={vkIcon}
                alt="ВКонтакте"
              ></img>
            </a>
          </li>
        </ul>
        <button className="header__search">Поиск тура</button>
      </div>
    </header>
  );
}
