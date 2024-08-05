import { FaStar } from "react-icons/fa";
import { useState } from "react";
import "./stylex.css";

export default function StarRating({ stars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(i) {
    setRating(i);
  }
  function handleMouseEnter(i) {
    setHover(i);
  }
  function handleMouseLeave(i) {
    setHover(rating);
  }

  return (
    <div className="star-rating">
      {[...Array(stars)].map((_,index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
}
