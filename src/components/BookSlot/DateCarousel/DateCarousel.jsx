import { useRef } from "react";
import "./DateCarousel.css";
import DateBox from "../DateBox/DateBox";
import leftArrow from "../../../assets/icons/left-arrow.png";
import rightArrow from "../../../assets/icons/right-arrow.png";

const DateCarousel = ({ slots, handleDateSelection, selectedDate }) => {
  const carouselContainer = useRef(null);
  const scrollCarousel = (direction) => {
    if (direction === "left") {
      carouselContainer.current.scrollLeft -= 40;
    }
    if (direction === "right") {
      carouselContainer.current.scrollLeft += 40;
    }
  };
  return (
    <div className="date-carousel-container">
      <button
        id="prev-btn"
        className="prev-btn"
        onClick={() => scrollCarousel("left")}
      >
        <img src={leftArrow} alt="previous arrow" />
      </button>
      <div
        id="carousel-view-id"
        className="carousel-view"
        ref={carouselContainer}
      >
        {slots &&
          Object.keys(slots).map((slot) => {
            return (
              <div
                key={slot}
                className={`item-list${selectedDate === slot ? " active" : ""}`}
                onClick={() => handleDateSelection(slot)}
              >
                {<DateBox slotDate={slot} />}
              </div>
            );
          })}
      </div>
      <button
        id="next-btn"
        className="next-btn"
        onClick={() => scrollCarousel("right")}
      >
        <img src={rightArrow} alt="right arrow" />
      </button>
    </div>
  );
};

export default DateCarousel;
