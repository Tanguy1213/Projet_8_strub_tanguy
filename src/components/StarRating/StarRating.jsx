import React from "react";
import "./starRating.scss";

function StarRating({ rating }) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <img
          src={require("../../assets/star_full.png")}
          alt="Filled Star"
          key={i}
        />
      );
    } else {
      stars.push(
        <img
          src={require("../../assets/star_empty.png")}
          alt="Empty Star"
          key={i}
        />
      );
    }
  }

  return <div className="star-rating">{stars}</div>;
}

export default StarRating;
