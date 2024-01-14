import React, { useState } from "react";
import "./BurgerButton.css";

export default function BurgerButton({ isNavigation, handleBurgerClick }) {
  return (
    <div
      className={`menu-burger ${isNavigation ? "menu-burger_active" : ""}`}
      onClick={handleBurgerClick}
    >
      <span
        className={`menu-burger__line ${
          isNavigation ? "menu-burger__line_active" : ""
        }`}
      ></span>
    </div>
  );
}
