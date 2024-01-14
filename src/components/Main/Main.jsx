import React from "react";
import "./Main.css";
import Promo from "../Promo/Promo";
import TourSearching from "../TourSearching/TourSearching";
import Hotels from "../Hotels/Hotels";

export default function Main() {
  return (
    <div className="main">
      <Promo />
      <div className="test" id="test">
        Kolobok
      </div>
      <Hotels />
      <TourSearching />
    </div>
  );
}
