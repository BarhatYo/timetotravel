import React from "react";
import "./Navigation.css";

export default function Navigation({ isNavigation, handleBurgerClick }) {

  return (
    <div className={`navigation ${isNavigation ? "navigation_active" : ""} `}>
      <ul className="navigation__links">
        <li>
          <a
            className="navigation__link"
            href="#test"
            onClick={(e) => {
              e.preventDefault();
              handleBurgerClick();
              document.getElementById("test").scrollIntoView({ behavior: "smooth" });
            }}
          >
            Выбор туристов
          </a>
        </li>
        <li>
          <a className="navigation__link" href="https://vk.com">
            О Time to Travel
          </a>
        </li>
        <li>
          <a className="navigation__link" href="https://vk.com">
            Отзывы
          </a>
        </li>
        <li>
          <a className="navigation__link" href="https://vk.com">
            Контакты
          </a>
        </li>
      </ul>
    </div>
  );
}
